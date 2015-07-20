GetDefaultSlot = function(slot){
  return {
    id: slot.id,
    name: slot.name,
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

GetDefaultBonus = function(slot_id){
  return {
    slot: slot_id,
    type: '',
    effect: '',
    amount: 0,
    amountIndex: 0,
    imbue: 0
  };
};

IsJewelSlot = function(id){
  return _.findWhere(JewelSlots, { id: id });
};

IsArmorSlot = function(id){
  return _.findWhere(ArmorSlots, { id: id });
};

IsWeaponSlot = function(id){
  return _.findWhere(WeaponSlots, { id: id });
};

GetRacesByRealm = function(realm){
  return (_.findWhere(Realms, { name: realm }) || {}).races || [];
};

GetClassesByRealm = function(realm){
  return (_.findWhere(Realms, { name: realm }) || {}).classes || [];
};

GetClassIndex = function(realm, clss){
  var classes = GetClassesByRealm(realm).map(function(clss){ return clss.name });
  return classes.indexOf(clss);
};

GetCastStatByClass = function(realm, clss){
  var classes = (_.findWhere(Realms, { name: realm }) || {}).classes || [];
  var castStat = (_.findWhere(classes, { name: clss }) || {}).castStat || null;
  return castStat;
};

GetArmorTierByClass = function(realm, clss){
  var classes = (_.findWhere(Realms, { name: realm }) || {}).classes || [];
  var armorTier = (_.findWhere(classes, { name: clss }) || {}).armor || 0;
  return armorTier;
};

GetRacesByClass = function(realm, clss){
  var races = GetRacesByRealm(realm);
  var classes = (_.findWhere(Realms, { name: realm }) || {}).classes || [];
  var classRaces = (_.findWhere(classes, { name: clss }) || {}).races || [];
  return classRaces.map(function(index){ return races[index] });
};

GetRacialResist = function(realm, race, effect){
  var races = _.findWhere(Realms, { name: realm }).races;
  var resists = _.findWhere(races, { name: race }).resists;
  return resists[effect] ? '+' + resists[effect] : '';
};

GetSkillsByClass = function(realm, clss){
  var classIndex = GetClassIndex(realm, clss);
  return _.where(SkillGems, { realm: realm }).filter(function(skill){
    return skill.classes.indexOf(classIndex) >= 0;
  }).map(function(skill){
    return skill.name;
  });
};

GetAmounts = function(type, effect){
  return (CraftedBonusTypeValues[effect] || CraftedBonusTypeValues[type]) || [];
};

GetEnhancedBonusesBySlot = function(realm, clss, slot){
  var gear = [];
  var armorTier = GetArmorTierByClass(realm, clss);
  if(IsArmorSlot(slot)){
    gear = _.findWhere(Realms, { name: realm }).fifthSlotArmor;
    var gear = _.flatten(gear.slice(0, armorTier + 1), true).map(function(item){
      return item[slot - 8] ? { name: item[0], value: item[slot - 8] } : null;
    });
  } else {
    gear = _.findWhere(Realms, { name: realm }).fifthSlotWeapon;
    gear = _.flatten(gear, true).map(function(item){
      return { name: item[0], value: item[1] };
    });
  }

  return _.compact(gear);
};

GetGemName = function(type, effect, index, arr){
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

GetSkillEffects = function(realm, clss){
  var classIndex = GetClassIndex(realm, clss);
  var gems = _.where(SkillGems, { realm: realm });
  return gems.filter(function(gem){
    return gem.classes.indexOf(classIndex) >= 0;
  }).map(function(gem){
    return gem.name;
  });
};

GetImbueCeiling = function(level){
  return ImbueTotals[parseInt(level, 10) - 1];
};

CalculateBonusImbue = function(type, effect, amount, amountIndex){
  amount = parseInt(amount, 10) || 0;
  var imbue = 0;

  if(type == 'Stat'){
    if(effect == 'Hits') {
      imbue = amount / 4;
    } else if(effect == 'Power') {
      imbue = (amount - 1) * 2;
    } else {
      imbue = [1, 3, 5, 6, 8, 10, 12, 13, 15, 17][amountIndex - 1] || 0;
    }
  } else if(type == 'Resist'){
    imbue = (amount - 1) * 2;
  } else if(type == 'Skill') {
    imbue = (amount - 1) * 5;
  }

  return Math.max(amount == 0 ? 0 : 1, imbue);
}