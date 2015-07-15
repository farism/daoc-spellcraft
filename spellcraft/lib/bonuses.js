CraftedBonusTypeValues = {
  'Stat': [2,5,8,11,14,17,20,23,26,29],
  'Hits': [4,12,20,28,36,44,52,60,68,76],
  'Resist': [1,2,3,5,7,9,11,13,15,17],
  'Power': [1,2,3,5,7,9,11,13,15,17],
  'Focus': [5,10,15,20,25,30,35,40,45,50],
  'Skill': [1,2,3,4,5,6,7,8]
};

BonusTypes = [
  'Stat',
  'Resist',
  'Skill',
  'Cap Increase',
  'Other Bonus',
  'Focus'
];

FifthSlotBonusTypes = [
  'Cap Increase',
  'Other Bonus',
  'Stat',
  'Skill'
];

BonusPrimary = [
  'Archery and Casting Speed',
  'Archery and Spell Range',
  'Archery and Spell Damage',
  'Melee Combat Speed',
  'Melee Damage',
  'Style Damage',
  'Resist Pierce',
  'AF'
]

BonusSecondary = [
  'Stat Buff Effectiveness',
  'Stat Debuff Effectiveness',
  'Healing Effectiveness',
  'Duration of Spells',
  '% Power Pool',
  'Fatigue'
]

BonusOther = BonusPrimary.concat(BonusSecondary);

BonusStat = [
  'Strength',
  'Constitution',
  'Dexterity',
  'Quickness',
  'Acuity',
  'Charisma',
  'Intelligence',
  'Piety',
  'Empathy',
  'Hits',
  'Power'
];

BonusStatCap = [
  'Strength',
  'Constitution',
  'Dexterity',
  'Quickness',
  'Intelligence',
  'Piety',
  'Empathy',
  'Acuity',
  'Hits',
  'Power'
];

BonusStatCapSearch = BonusStatCap.map(function(a){ return a + ' Cap' });

BonusResist = [
  'Body',
  'Cold',
  'Heat',
  'Energy',
  'Matter',
  'Spirit',
  'Crush',
  'Thrust',
  'Slash'
];

BonusResistSearch = BonusResist.map(function(a){ return a + ' Resist' });

BonusSkill = [
  'Shield',
  'All Spell Lines',
  'All Archery Skills',
  'All Dual Wield Skills',
  'All Magic Skills',
  'All Melee Weapon Skills'
];

BonusEffectsMap = {
  'Other Bonus': BonusOther,
  'Stat': BonusStat,
  'Cap Increase': BonusStatCap,
  'Resist': BonusResist
};

Utility = {
  'Stat': 2/3,
  'Stat Hits': 0.25,
  'Resist': 2,
  'Skill': 5,
  'Power': 2
}

UtilityToA = {
  'Cap Increase': 2,
  'Cap Increase Hits': 0.25,
  'Archery and Casting Speed': 5,
  'Archery and Spell Range': 5,
  'Archery and Spell Damage': 5,
  'Melee Combat Speed': 5,
  'Melee Damage': 5,
  'Style Damage': 5,
  'Resist Pierce': 5,
  'Power Pool %': 2,
  'Stat Buff Effectiveness': 2,
  'Stat Debuff Effectiveness': 2,
  'Healing Effectiveness': 2,
  'Duration of Spells': 2,
  '% Power Pool': 2,
  'Fatigue': 2,
  'AF': 1
};