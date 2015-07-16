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

GetCastStatByClass = function(realm, clss){
  var classes = (_.findWhere(Realms, { name: realm }) || {}).classes || [];
  var castStat = (_.findWhere(classes, { name: clss }) || {}).castStat || null;
  return castStat;
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

GetSkillGems = function(realm, race){
  return (_.findWhere(Realms, { name: realm }) || {}).classes || [];
};

GetImbueCeiling = function(level){
  return ImbueTotals[parseInt(level, 10) - 1];
};

CalculateBonusImbue = function(type, effect, amount){
  amount = parseInt(amount, 10) || 0;
  var imbue = 0;

  if(type == 'Stat'){
    if(effect == 'Hits') {
      imbue = amount / 4;
    } else if(effect == 'Power') {
      imbue = (amount - 1) * 2;
    } else {
      imbue = ((amount - 1) / 3) * 2 + 1;
    }
  } else if(type == 'Resist'){
    imbue = (amount - 1) * 2;
  } else if(type == 'Skill') {
    imbue = (amount - 1) * 5;
  }

  return Math.max(amount == 0 ? 0 : 1, imbue);
}

CalculateCap = function(type, level){
  return {
    'Strength': Math.floor(level * 1.5),
    'Constitution': Math.floor(level * 1.5),
    'Dexterity': Math.floor(level * 1.5),
    'Quickness': Math.floor(level * 1.5),
    'Intelligence': Math.floor(level * 1.5),
    'Piety': Math.floor(level * 1.5),
    'Empathy': Math.floor(level * 1.5),
    'Acuity': Math.floor(level * 1.5),
    'Hits': level * 4,
    'Power': Math.floor(level / 2),
    'Strength Cap Increase': Math.floor(level / 2 + 1),
    'Constitution Cap Increase': Math.floor(level / 2 + 1),
    'Dexterity Cap Increase': Math.floor(level / 2 + 1),
    'Quickness Cap Increase': Math.floor(level / 2 + 1),
    'Intelligence Cap Increase': Math.floor(level / 2 + 1),
    'Piety Cap Increase': Math.floor(level / 2 + 1),
    'Empathy Cap Increase': Math.floor(level / 2 + 1),
    'Acuity Cap Increase': Math.floor(level / 2 + 1),
    'Hits Cap Increase': Math.floor(level / 2 + 1),
    'Body': Math.floor(level / 2 + 1),
    'Cold': Math.floor(level / 2 + 1),
    'Heat': Math.floor(level / 2 + 1),
    'Energy': Math.floor(level / 2 + 1),
    'Matter': Math.floor(level / 2 + 1),
    'Spirit': Math.floor(level / 2 + 1),
    'Crush': Math.floor(level / 2 + 1),
    'Thrust': Math.floor(level / 2 + 1),
    'Slash': Math.floor(level / 2 + 1),
    'Skill': Math.floor(level / 5 + 1),
    'Archery and Casting Speed': Math.floor(level / 5),
    'Archery and Spell Range': Math.floor(level / 5),
    'Archery and Spell Damage': Math.floor(level / 5),
    'Melee Combat Speed': Math.floor(level / 5),
    'Melee Damage': Math.floor(level / 5),
    'Style Damage': Math.floor(level / 5),
    'Resist Pierce': Math.floor(level / 5),
    'Power Pool %': Math.floor(level / 2),
    'Power Pool % Cap Increase': level,
    'Stat Buff Effectiveness': Math.floor(level / 2),
    'Stat Debuff Effectiveness': Math.floor(level / 2),
    'Healing Effectiveness': Math.floor(level / 2),
    'Duration of Spells': Math.floor(level / 2),
    '% Power Pool': Math.floor(level / 2),
    '% Power Pool Cap Increase': Math.floor(level / 2),
    'Fatigue': Math.floor(level / 2),
    'Fatigue Cap Increase': Math.floor(level / 2),
    'AF': level
  }[type] || 0;
}