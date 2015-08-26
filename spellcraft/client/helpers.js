GetDefaultSlot = function(slot) {
  return {
    id: slot.id,
    name: slot.name,
    slot: slot.name,
    crafted: slot.id >= 9,
    itemName: '',
    craftedItemName: 'Crafted',
    enhanced: false,
    equipped: true,
    level: 51,
    imbueArr: [0,0,0,0],
    imbuePoints: 0,
    imbueTotal: 32
  };
};

GetDefaultBonus = function(slotid, index) {
  return {
    slotid: slotid,
    index: index,
    type: '',
    effect: '',
    amount: 0,
    amountIndex: 0,
    imbue: 0
  };
};

IsJewelSlot = function(id) {
  return _.findWhere(JewelSlots, { id: id });
};

IsArmorSlot = function(id) {
  return _.findWhere(ArmorSlots, { id: id });
};

IsWeaponSlot = function(id) {
  return _.findWhere(WeaponSlots, { id: id });
};

GetRacesByRealm = function(realm) {
  return (_.findWhere(Realms, { name: realm }) || {}).races || [];
};

GetClassesByRealm = function(realm) {
  return (_.findWhere(Realms, { name: realm }) || {}).classes || [];
};

GetClassIndex = function(realm, clss) {
  var classes = GetClassesByRealm(realm).map(function(clss){ return clss.name });
  return classes.indexOf(clss);
};

GetCastStatByClass = function(realm, clss) {
  var classes = (_.findWhere(Realms, { name: realm }) || {}).classes || [];
  var castStat = (_.findWhere(classes, { name: clss }) || {}).castStat || null;
  return castStat;
};

GetArmorTierByClass = function(realm, clss) {
  var classes = (_.findWhere(Realms, { name: realm }) || {}).classes || [];
  var armorTier = (_.findWhere(classes, { name: clss }) || {}).armor || 0;
  return armorTier;
};

GetRacesByClass = function(realm, clss) {
  var races = GetRacesByRealm(realm);
  var classes = (_.findWhere(Realms, { name: realm }) || {}).classes || [];
  var classRaces = (_.findWhere(classes, { name: clss }) || {}).races || [];
  return classRaces.map(function(index){ return races[index] });
};

GetRacialResist = function(realm, race, effect) {
  var races = _.findWhere(Realms, { name: realm }).races;
  var resists = _.findWhere(races, { name: race }).resists;
  return resists[effect] ? '+' + resists[effect] : '';
};

GetSkillsByClass = function(realm, clss) {
  var classIndex = GetClassIndex(realm, clss);
  return _.where(SkillGems, { realm: realm }).filter(function(skill){
    return skill.classes.indexOf(classIndex) >= 0;
  }).map(function(skill){
    return skill.name;
  });
};

GetAmounts = function(type, effect, newstats) {
  if(type == 'Stat' && newstats) type = 'Stat2';
  return (CraftedBonusTypeValues[effect] || CraftedBonusTypeValues[type]) || [];
};

GetEnhancedBonusesBySlot = function(realm, clss, slot) {
  var gear = [];

  if(IsArmorSlot(slot)){
    var armorTier = GetArmorTierByClass(realm, clss);
    gear = _.findWhere(Realms, { name: realm }).fifthSlotArmor.slice(0, armorTier + 1);
    gear = _.flatten(gear.map(function(tier, i){
      return tier.map(function(item){
        return item[slot - 8] ? { name: item[0], value: item[slot - 8], tier: i } : null;
      });
    }));
  } else {
    gear = _.findWhere(Realms, { name: realm }).fifthSlotWeapon;
    gear = _.flatten(gear.map(function(tier, i){
      return tier.map(function(item){
        return { name: item[0], value: item[1], tier: i };
      });
    }));
  }

  return _.compact(gear);
};

GetGemName = function(type, effect, index, arr) {
  var gem = [GemLevels[index - 1]];

  if(type == 'Stat'){
    gem[1] = StatPrefixMap[effect];
    gem[2] = 'Essence Jewel';
  } else if(type == 'Resist'){
    gem[1] = ResistPrefixMap[effect];
    gem[2] = 'Shielding Jewel';
  } else if(type == 'Skill'){
    var skill = _.findWhere(SkillGems, { name: effect });
    if(skill){
      gem[1] = skill.gems[0];
      gem[2] = skill.gems[1];
    }
  }

  gem = _.compact(gem);

  return gem.length == 3 ? (arr ? gem : gem.join(' ')) : '';
};

GetBonusAbbreviation = function(bonus) {
  var suffix = bonus.effect;

  if(bonus.type == 'Stat'){
    suffix = bonus.effect.substr(0, 3);
  } else if(bonus.type == 'Cap Increase') {
    suffix = bonus.effect.substr(0, 3) + ' Cap';
  } else if(bonus.type == 'Other Bonus') {
    suffix = bonus.effect;
  } else if(bonus.type == 'Resist') {
    suffix = bonus.effect + ' Resist';
  }

  return bonus.amount + ' ' + suffix;
};

GetSkillEffects = function(realm, clss) {
  var classIndex = GetClassIndex(realm, clss);
  var gems = _.where(SkillGems, { realm: realm });
  return gems.filter(function(gem){
    return gem.classes.indexOf(classIndex) >= 0;
  }).map(function(gem){
    return gem.name;
  });
};

GetImbueCeiling = function(level) {
  return ImbueTotals[parseInt(level, 10) - 1];
};

GetCeiling = function(totals, level, type, effect){
  var level = level || 50;
  var totals = totals || {};
  var ceiling = CalculateCap(type + ' ' + effect, level) || CalculateCap(effect, level) || CalculateCap(type, level);

  if(type == 'Stat'){
    var capCeiling = CalculateCap('Cap Increase ' + effect, level);
    ceiling += Math.min(capCeiling, totals['Cap Increase ' + effect] || 0);
  }

  if(effect == '% Power Pool'){
    var capCeiling = CalculateCap('Cap Increase ' + 'Power', level);
    ceiling += Math.min(capCeiling, totals['Cap Increase ' + 'Power'] || 0);
  }

  return ceiling;
};

CalculateBonusImbue = function(type, effect, amount, newstats) {
  amount = parseInt(amount, 10) || 0;
  var imbue = 0;

  if(type == 'Stat'){
    if(effect == 'Hits') {
      imbue = amount / 4;
    } else if(effect == 'Power') {
      imbue = (amount - 1) * 2;
    } else {
      if(newstats){
        imbue = Math.floor(amount / 1.725);
      } else {
        imbue = Math.ceil(amount * 2 / 3);
      }
    }
  } else if(type == 'Resist'){
    imbue = (amount - 1) * 2;
  } else if(type == 'Skill') {
    imbue = (amount - 1) * 5;
  }

  return Math.max(amount == 0 ? 0 : 1, imbue);
};

CalculateSlotImbue = function(bonuses) {
  var arr = _.pluck(bonuses.slice(0, 4), 'imbue');
  var max = _.max(arr);
  var pts = (arr.reduce(function(p, c){ return p + c; }, 0) + max) / 2;
  arr[arr.indexOf(max)] += max;

  return {
    arr: arr,
    points: pts
  }
}

CalculateCap = function(key, level) {
  return {
    'Skill': Math.floor(level / 5 + 1),
    'Stat Strength': Math.floor(level * 1.5),
    'Stat Constitution': Math.floor(level * 1.5),
    'Stat Dexterity': Math.floor(level * 1.5),
    'Stat Quickness': Math.floor(level * 1.5),
    'Stat Intelligence': Math.floor(level * 1.5),
    'Stat Piety': Math.floor(level * 1.5),
    'Stat Empathy': Math.floor(level * 1.5),
    'Stat Acuity': Math.floor(level * 1.5),
    'Stat Hits': level * 4,
    'Cap Increase Strength': Math.floor(level / 2 + 1),
    'Cap Increase Constitution': Math.floor(level / 2 + 1),
    'Cap Increase Dexterity': Math.floor(level / 2 + 1),
    'Cap Increase Quickness': Math.floor(level / 2 + 1),
    'Cap Increase Intelligence': Math.floor(level / 2 + 1),
    'Cap Increase Piety': Math.floor(level / 2 + 1),
    'Cap Increase Empathy': Math.floor(level / 2 + 1),
    'Cap Increase Acuity': Math.floor(level / 2 + 1),
    'Cap Increase Hits': level * 4,
    'Cap Increase Power': level,
    'Cap Increase Fatigue': Math.floor(level / 2),
    'Resist Body': Math.floor(level / 2 + 1),
    'Resist Cold': Math.floor(level / 2 + 1),
    'Resist Heat': Math.floor(level / 2 + 1),
    'Resist Energy': Math.floor(level / 2 + 1),
    'Resist Matter': Math.floor(level / 2 + 1),
    'Resist Spirit': Math.floor(level / 2 + 1),
    'Resist Crush': Math.floor(level / 2 + 1),
    'Resist Thrust': Math.floor(level / 2 + 1),
    'Resist Slash': Math.floor(level / 2 + 1),
    'Other Bonus Archery and Casting Speed': Math.floor(level / 5),
    'Other Bonus Archery and Spell Range': Math.floor(level / 5),
    'Other Bonus Archery and Spell Damage': Math.floor(level / 5),
    'Other Bonus Melee Combat Speed': Math.floor(level / 5),
    'Other Bonus Melee Damage': Math.floor(level / 5),
    'Other Bonus Style Damage': Math.floor(level / 5),
    'Other Bonus Resist Pierce': Math.floor(level / 5),
    'Other Bonus Stat Buff Effectiveness': Math.floor(level / 2),
    'Other Bonus Stat Debuff Effectiveness': Math.floor(level / 2),
    'Other Bonus Healing Effectiveness': Math.floor(level / 2),
    'Other Bonus Duration of Spells': Math.floor(level / 2),
    'Other Bonus Power Pool %': Math.floor(level / 2),
    'Other Bonus % Power Pool': Math.floor(level / 2),
    'Other Bonus Fatigue': Math.floor(level / 2),
    'Other Bonus AF': level
  }[key] || 0;
};

GetInnerText = function(el) {
  var sel, range, innerText = "";
  if (typeof document.selection != "undefined" && typeof document.body.createTextRange != "undefined"){
      range = document.body.createTextRange();
      range.moveToElementText(el);
      innerText = range.text;
  } else if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined"){
      sel = window.getSelection();
      sel.selectAllChildren(el);
      innerText = "" + sel;
      sel.removeAllRanges();
  }
  return innerText;
}