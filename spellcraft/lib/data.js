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

ImbueTotals = [
  1,  2,  2,  3,  4,  4,  5,  5,  6,  7,
  7,  8,  9,  9, 10, 10, 11, 12, 12, 13,
  13, 14, 15, 15, 16, 16, 17, 18, 18, 19,
  20, 20, 21, 21, 22, 23, 23, 24, 24, 25,
  26, 26, 27, 27, 28, 29, 29, 30, 31, 31,
  32
];

CraftedBonusTypeValues = {
  'Stat':   [2, 5, 8, 11, 14, 17, 20, 23, 26, 29],
  'Hits':   [4, 12, 20, 28, 36, 44, 52, 60, 68, 76],
  'Resist': [1, 2, 3, 5, 7, 9, 11, 13, 15, 17],
  'Power':  [1, 2, 3, 5, 7, 9, 11, 13, 15, 17],
  'Focus':  [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
  'Skill':  [1, 2, 3, 4, 5, 6, 7, 8],
  'Other Bonus':  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  'Cap Increase':  [1, 2, 3, 4, 5]
};

CraftedBonusTypes = [
  'Stat',
  'Resist',
  'Skill',
  'Focus'
];

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
  'Acuity',
  'Charisma',
  'Intelligence',
  'Piety',
  'Empathy',
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

JewelSlots = [
  { id: 0, name: 'Neck' },
  { id: 1, name: 'Cloak' },
  { id: 2, name: 'Jewel' },
  { id: 3, name: 'Belt' },
  { id: 4, name: 'Ring' },
  { id: 5, name: 'Ring' },
  { id: 6, name: 'Wrist' },
  { id: 7, name: 'Wrist' },
  { id: 8, name: 'Mythical' }
];

ArmorSlots = [
  { id: 9, name: 'Chest' },
  { id: 10, name: 'Head' },
  { id: 11, name: 'Arms' },
  { id: 12, name: 'Legs' },
  { id: 13, name: 'Hands' },
  { id: 14, name: 'Feet' }
];

WeaponSlots = [
  { id: 15, name: 'Right Hand' },
  { id: 16, name: 'Left Hand' },
  { id: 17, name: '2 Handed' },
  { id: 18, name: 'Ranged' }
];

ShieldTypes = [
  'Small',
  'Medium',
  'Large'
]

CraftedSlots = ArmorSlots.concat(WeaponSlots);

AllSlots = JewelSlots.concat(ArmorSlots).concat(WeaponSlots);

Realms = [
  {
    name: 'Albion',

    races: [
      { name: 'Avalonian', resists: { 'Crush': 2, 'Slash': 3, 'Matter': 5 } }, //0
      { name: 'Briton', resists: { 'Crush': 2, 'Slash': 3, 'Matter': 5 } }, //1
      { name: 'Highlander', resists: { 'Crush': 3, 'Slash': 2, 'Cold': 5  } }, //2
      { name: 'Saracen', resists: { 'Slash': 2, 'Thrust': 3, 'Heat': 5 } }, //3
      { name: 'Inconnu', resists: { 'Crush': 2, 'Thrust': 3, 'Heat': 5, 'Spirit': 5 } }, //4
      { name: 'Half Ogre', resists: { 'Thrust': 2, 'Slash': 3, 'Matter': 5 } }, //5
      { name: 'Minotaur', resists: { 'Crush': 4, 'Heat': 3, 'Cold': 3 } } //6
    ],

    classes: [
      { name: 'Armsman', armor: 4, races: [0, 1, 2, 3, 4, 5, 6] }, //0
      { name: 'Cabalist', armor: 0, castStat: 'Intelligence', races: [0, 1, 3, 4, 5] }, //1
      { name: 'Cleric', armor: 3, castStat: 'Piety', races: [0, 1, 2] }, //2
      { name: 'Friar', armor: 1, castStat: 'Piety', races: [0, 1, 2] }, //3
      { name: 'Heretic', armor: 0, castStat: 'Piety', races: [0, 1, 4, 6] }, //4
      { name: 'Infiltrator', armor: 1, races: [1, 3, 4] }, //5
      { name: 'Mauler', armor: 1, races: [1, 4, 5, 6] }, //6
      { name: 'Mercenary', armor: 3, races: [0, 1, 2, 3, 4, 5, 6] }, //7
      { name: 'Minstrel', armor: 3, castStat: 'Charisma', races: [1, 2, 3, 4] }, //8
      { name: 'Necromancer', armor: 0, castStat: 'Intelligence', races: [0, 1, 3, 4] }, //9
      { name: 'Paladin', armor: 4, races: [0, 1, 2, 3] }, //10
      { name: 'Reaver', armor: 3, castStat: 'Piety', races: [1, 3, 4, 6] }, //11
      { name: 'Scout', armor: 2, races: [1, 2, 3, 4] }, //12
      { name: 'Sorcerer', armor: 0, castStat: 'Intelligence', races: [0, 1, 3, 4, 5] }, //13
      { name: 'Theurgist', armor: 0, castStat: 'Intelligence', races: [0, 1, 5] }, //14
      { name: 'Wizard', armor: 0, castStat: 'Intelligence', races: [0, 1, 4, 5] } //15
    ],

    armor: [
      'Cloth',
      'Leather',
      'Studded',
      'Chain',
      'Plate'
    ],

    weapon: [
      'Weapon',
      'S. Shield',
      'M. Shield',
      'L. Shield',
      'Harp'
    ],

    fifthSlotArmor: [
      [
        ['Sigil Stiched Cloth','3 All Magic Skills','5 Acuity Cap','40 Hits Cap','5% Power Pool','10 AF','5 Dexterity Cap'],
        ['Sigil Sewn Cloth','3 All Melee Weapon Skills','5% Healing Effectiveness','5 Constitution Cap','5 Strength Cap',null,null],
        ['Sigil Worn Cloth',null,null,'5% Stat Buff Effectiveness',null,null,null],
        ['Sigil Scorched Cloth',null,'5 Quickness Cap',null,null,null,null],
        ['Dragonsworn Stiched Cloth','2% Archery and Spell Damage','15 Acuity','40 Hits','5 Power Cap','5% Duration of Spells','15 Dexterity'],
        ['Dragonsworn Sewn Cloth','2% Melee Damage','5% Stat Buff Effectiveness','15 Constitution','15 Strength',null,null],
        ['Dragonsworn Worn Cloth',null,null,'5% Healing Effectiveness',null,null,null],
        ['Dragonsworn Scorched Cloth',null,'15 Quickness',null,null,null,null]
      ],[
        ['Sigil Etched Leather','3 All Melee Weapon Skills','5 Constitution Cap','40 Hits Cap','5 Strength Cap','5 Dexterity Cap','3 All Dual Wield Skills'],
        ['Sigil Bound Leather','3 All Magic Skills','5 Acuity Cap','5% Healing Effectiveness','5% Power Pool',null,'10 AF'],
        ['Sigil Wrapped Leather',null,null,null,null,null,'5% Stat Buff Effectiveness'],
        ['Dragonsworn Etched Leather','2% Melee Damage','15 Constitution','40 Hits','15 Strength','15 Dexterity','5 Fatigue'],
        ['Dragonsworn Bound Leather','5% Healing Effectiveness','15 Acuity','5% Stat Buff Effectiveness','5 Power Cap',null,'5 Fatigue Cap'],
        ['Dragonsworn Wrapped Leather',null,null,null,null,null,'5% Healing Effectiveness']
      ],[
        ['Sigil Marked Lamellar','3 All Melee Weapon Skills','5 Constitution Cap','40 Hits Cap','5 Strength Cap','10 AF','5 Dexterity Cap'],
        ['Sigil Stamped Lamellar',null,null,'5 Quickness Cap',null,null,'3 Archery'],
        ['Dragonsworn Marked Lamellar','2% Melee Damage','15 Constitution','40 Hits','15 Strength','5 Fatigue','15 Dexterity'],
        ['Dragonsworn Stamped Lamellar',null,null,'15 Quickness',null,null,'2% Archery and Spell Damage']
      ],[
        ['Sigil Enchanted Mail','3 All Melee Weapon Skills','5 Constitution Cap','40 Hits Cap','5 Strength Cap','5 Dexterity Cap','10 AF'],
        ['Sigil Enscrolled Mail','3 All Magic Skills','5 Acuity Cap','5% Healing Effectiveness','5% Power Pool',null,'5% Stat Buff Effectiveness'],
        ['Sigil Spelled Mail',null,'5 Quickness Cap',null,null,null,'3 All Dual Wield Skills'],
        ['Sigil Protected Mail',null,'5% Defense',null,null,null,null],
        ['Dragonsworn Enchanted Mail','2% Melee Damage','15 Constitution','40 Hits','15 Strength','15 Dexterity','5% Duration of Spells'],
        ['Dragonsworn Enscrolled Mail','2% Archery and Spell Damage','15 Acuity','5% Stat Buff Effectiveness','5 Power Cap',null,'5% Healing Effectiveness'],
        ['Dragonsworn Spelled Mail',null,'15 Quickness',null,null,null,'5 Fatigue'],
        ['Dragonsworn Protected Mail',null,'3% To Hit',null,null,null,null]
      ],[
        ['Sigil Gilded Plate','3 All Melee Weapon Skills','5 Constitution Cap','40 Hits Cap','5 Strength Cap','5 Dexterity Cap','10 AF'],
        ['Sigil Blazed Plate',null,'5% Defense',null,null,null,'5 Quickness Cap'],
        ['Dragonsworn Gilded Plate','2% Melee Damage','15 Constitution','40 Hits','15 Strength','15 Dexterity','5 Fatigue'],
        ['Dragonsworn Blazed Plate',null,'3% To Hit',null,null,null,'15 Quickness']
      ]
    ],

    fifthSlotWeapon: [
      [
        ['Dragonsworn', '5 Strength Cap'],
        ['Dragonsworn', '5 Dexterity Cap']
      ],[
        ['Sigil Forged Protector\'s Buckler', '3 Shield Skill'],
        ['Sigil Forged Mighty Buckler', '5 Strength Cap'],
        ['Sigil Forged Adroit Buckler', '5 Dexterity Cap'],
        ['Sigil Forged Insightful Buckler', '5 Acuity Cap'],
        ['Sigil Forged Rejuvenating Buckler', '5% Healing Effectiveness'],
        ['Sigil Forged Accommodation Buckler', '5% Stat Buff Effectiveness'],
        ['Dragonsworn Forged Protector\'s Buckler', '2% Melee Damage'],
        ['Dragonsworn Forged Mighty Buckler', '15 Strength'],
        ['Dragonsworn Forged Adroit Buckler', '15 Dexterity'],
        ['Dragonsworn Forged Insightful Buckler', '15 Acuity'],
        ['Dragonsworn Forged Accommodation Buckler', '5% Stat Buff Effectiveness'],
        ['Dragonsworn Forged Rejuvenating Buckler', '5% Healing Effectiveness']
      ],[
        ['Sigil Pressed Protector\'s Heater Shield', '3 Shield Skill'],
        ['Sigil Pressed Mighty Heater Shield', '5 Strength Cap'],
        ['Sigil Pressed Adroit Heater Shield', '5 Dexterity Cap'],
        ['Sigil Pressed Insightful Heater Shield', '5 Acuity Cap'],
        ['Sigil Pressed Rejuvenating Heater Shield', '5% Healing Effectiveness'],
        ['Sigil Pressed Accommodation Heater Shield', '5% Stat Buff Effectiveness'],
        ['Dragonsworn Forged Protector\'s Heater Shield', '2% Melee Damage'],
        ['Dragonsworn Forged Mighty Heater Shield', '15 Strength'],
        ['Dragonsworn Forged Adroit Heater Shield', '15 Dexterity'],
        ['Dragonsworn Forged Insightful Heater Shield', '15 Acuity'],
        ['Dragonsworn Forged Accommodation Heater Shield', '5% Stat Buff Effectiveness'],
        ['Dragonsworn Forged Rejuvenating Heater Shield', '5% Healing Effectiveness']
      ],[
        ['Sigil Fixed Protector\'s Fixed Tower', '3 Shield Skill'],
        ['Sigil Fixed Mighty Fixed Tower', '5 Strength Cap'],
        ['Sigil Fixed Adroit Fixed Tower', '5 Dexterity Cap'],
        ['Sigil Fixed Speedy Fixed Tower', '5 Quickness Cap'],
        ['Dragonsworn Forged Adroit Tower Shield', '15 Dexterity'],
        ['Dragonsworn Forged Speedy Tower Shield', '15 Quickness'],
        ['Dragonsworn Forged Protector\'s Tower Shield', '2% Melee Damage'],
        ['Dragonsworn Forged Mighty Tower Shield', '15 Strength']
      ],[
        ['Sigil Harmonious Harp', '5% Duration of Spells'],
        ['Sigil Arpeggio Harp', '5 Dexterity Cap']
      ]
    ]

  },

  {
    name: 'Hibernia',

    races: [
      { name: 'Celt', resists: { 'Crush': 2, 'Slash': 3, 'Spirit': 5 } }, //0
      { name: 'Elf', resists: { 'Slash': 2, 'Thrust': 3, 'Spirit': 5 } }, //1
      { name: 'Firbolg', resists: { 'Crush': 3, 'Slash': 2, 'Heat': 5 } }, //2
      { name: 'Lurikeen', resists: { 'Crush': 5, 'Energy': 5 } }, //3
      { name: 'Sylvan', resists: { 'Crush': 3, 'Thrust': 2, 'Matter': 5, 'Energy': 5 } }, //4
      { name: 'Shar', resists: { 'Crush': 5, 'Energy': 5 } }, //5
      { name: 'Minotaur', resists: { 'Crush': 4, 'Heat': 3, 'Cold': 3 } } //6
    ],

    classes: [
      { name: 'Animist', armor: 0, castStat: 'Intelligence', races: [0, 1, 2, 4] }, //0
      { name: 'Bainshee', armor: 0, castStat: 'Intelligence', races: [0, 1, 3] }, //1
      { name: 'Bard', armor: 2, castStat: 'Charisma', races: [0, 2] }, //2
      { name: 'Blademaster', armor: 2, races: [0, 1, 2, 5, 6] }, //3
      { name: 'Champion', armor: 3, races: [0, 1, 3, 4, 5] }, //4
      { name: 'Druid', armor: 3, castStat: 'Empathy', races: [0, 2, 4] }, //5
      { name: 'Eldritch', armor: 0, castStat: 'Intelligence', races: [1, 3] }, //6
      { name: 'Enchanter', armor: 0, castStat: 'Intelligence', races: [1, 3] }, //7
      { name: 'Hero', armor: 3, races: [0, 2, 3, 4, 5, 6] }, //8
      { name: 'Mauler', armor: 1, races: [0, 2, 3, 6] }, //9
      { name: 'Mentalist', armor: 0, castStat: 'Intelligence', races: [0, 1, 3, 5] }, //10
      { name: 'Nightshade', armor: 1, races: [0, 1, 3] }, //11
      { name: 'Ranger', armor: 2, races: [0, 1, 3, 5] }, //12
      { name: 'Valewalker', armor: 0, castStat: 'Intelligence', races: [0, 2, 4, 6] }, //13
      { name: 'Vampiir', armor: 1, races: [0, 3, 5] }, //14
      { name: 'Warden', armor: 3, castStat: 'Empathy', races: [0, 2, 4, 6] } //15
    ],

    armor: [
      'Cloth',
      'Leather',
      'Reinforced',
      'Scale'
    ],

    weapon: [
      'Weapon',
      'Small Shield',
      'Medium Shield',
      'Large Shield',
      'Harp'
    ],

    fifthSlotArmor: [
      [
        ['Bespelled Woven','3 All Magic Skills','5 Acuity Cap','40 Hits Cap','5% Power Pool','5 Constitution Cap','5 Dexterity Cap'],
        ['Enchanted Woven','3 All Melee Weapon Skills','5% Healing Effectiveness',null,'5 Strength Cap',null,'10 AF'],
        ['Spell Riddled Woven',null,null,'5% Stat Buff Effectiveness',null,null,null],
        ['Enticing Woven',null,'5 Quickness Cap',null,null,null,null],
        ['Dragonsworn Bespelled Woven','2% Archery and Spell Damage','15 Acuity','40 Hits','5 Power Cap','15 Constitution','15 Dexterity'],
        ['Dragonsworn Enchanted Woven','2% Melee Damage','5% Stat Buff Effectiveness',null,'15 Strength',null,'5% Duration of Spells'],
        ['Dragonsworn Spell Riddled Woven',null,null,'5% Healing Effectiveness',null,null,null],
        ['Dragonsworn Enticing Woven',null,'15 Quickness',null,null,null,null]
      ],[
        ['Embroidered Cruaigh','3 All Melee Weapon Skills','5 Constitution Cap','40 Hits Cap','5 Strength Cap','5 Dexterity Cap','3 All Dual Wield Skills'],
        ['Ensorcelled Cruaigh','3 All Magic Skills','5 Acuity Cap',null,'5% Power Pool',null,'10 AF'],
        ['Dragonsworn Embroidered Cruaigh','2% Melee Damage','15 Constitution','40 Hits','15 Strength','15 Dexterity','5 Fatigue'],
        ['Dragonsworn Ensorcelled Cruaigh','2% Archery and Spell Damage','15 Acuity',null,'5 Power Cap',null,'5 Fatigue Cap']
      ],[
        ['Reinforced Ornamented Cailocht','3 All Melee Weapon Skills','3 Archery','40 Hits Cap','5 Strength Cap','10 AF','5 Constitution Cap'],
        ['Reinforced Blazed Cailocht','3 All Magic Skills','5 Acuity Cap','5% Healing Effectiveness','5% Power Pool','5% Stat Buff Effectiveness','5 Dexterity Cap'],
        ['Reinforced Etched Cailocht',null,null,'5 Quickness Cap',null,null,'3 All Dual Wield Skills'],
        ['Reinforced Dragonsworn Ornamented Cailocht','2% Melee Damage','2% Archery and Spell Damage','40 Hits','15 Strength','5 Fatigue','15 Constitution'],
        ['Reinforced Dragonsworn Blazed Cailocht','2% Archery and Spell Damage','15 Acuity','5% Stat Buff Effectiveness','5 Power Cap','5% Healing Effectiveness','15 Dexterity'],
        ['Reinforced Dragonsworn Etched Cailocht',null,null,'15 Quickness',null,null,'5 Fatigue Cap']
      ],[
        ['Decorated Osnadurtha','3 All Melee Weapon Skills','5% Defense','40 Hits Cap','5 Strength Cap','5 Dexterity Cap','10 AF'],
        ['Spell Marked Osnadurtha','3 All Magic Skills','5 Quickness Cap','5% Healing Effectiveness','5% Power Pool','5% Stat Buff Effectiveness','5 Acuity Cap'],
        ['Spell Etched Osnadurtha',null,'5 Constitution Cap',null,null,null,null],
        ['Dragonsworn Decorated Osnadurtha','2% Melee Damage','3% To Hit','40 Hits','15 Strength','15 Dexterity','5 Fatigue'],
        ['Dragonsworn Marked Osnadurtha','2% Archery and Spell Damage','15 Quickness','5% Stat Buff Effectiveness','5 Power Cap','5% Healing Effectiveness','15 Acuity'],
        ['Dragonsworn Etched Osnadurtha',null,'15 Constitution',null,null,null,null]
      ]
    ],

    fifthSlotWeapon: [
      [
        ['Dragonsworn', '5 Strength Cap'],
        ['Dragonsworn', '5 Dexterity Cap']
      ],[
        /*['Spell Marked Protector\'s Buckler', '3 Shield Skill'],
        ['Spell Marked Mighty Buckler', '5 Strength Cap'],*/
        ['Spell Marked Adroit Buckler', '5 Dexterity Cap'],
        /*['Spell Marked Speedy Buckler', '5 Quickness Cap'],*/
        ['Spell Marked Insightful Buckler', '5 Acuity Cap'],
        ['Spell Marked Regrown Buckler', '5% Healing Effectiveness'],
        ['Spell Marked Accommodation Buckler', '5% Stat Buff Effectiveness'],
        /*['Dragonsworn Marked Protector\'s Buckler', '2% Melee Damage'],
        ['Dragonsworn Marked Mighty Buckler', '15 Strength'],*/
        ['Dragonsworn Marked Adroit Buckler', '15 Dexterity'],
        /*['Dragonsworn Marked Speedy Buckler', '15 Quickness'],*/
        ['Dragonsworn Marked Insightful Buckler', '15 Acuity'],
        ['Dragonsworn Marked Regrown Buckler', '5% Healing Effectiveness'],
        ['Dragonsworn Marked Accommodation Buckler', '5% Stat Buff Effectiveness']
      ],[
        ['Bespelled Protector\'s Heater Shield', '3 Shield Skill'],
        ['Bespelled Mighty Heater Shield', '5 Strength Cap'],
        ['Bespelled Adroit Heater Shield', '5 Dexterity Cap'],
        ['Bespelled Speedy Heater Shield', '5 Quickness Cap'],
        /*['Bespelled Insightful Heater Shield', '5 Acuity Cap'],
        ['Bespelled Regrown Heater Shield', '5% Healing Effectiveness'],
        ['Bespelled Accommodation Heater Shield', '5% Stat Buff Effectiveness'],*/
        ['Dragonsworn Protector\'s Heater Shield', '2% Melee Damage'],
        ['Dragonsworn Mighty Heater Shield', '15 Strength'],
        ['Dragonsworn Adroit Heater Shield', '15 Dexterity'],
        ['Dragonsworn Speedy Heater Shield', '15 Quickness']//,
        /*['Dragonsworn Insightful Heater Shield', '15 Acuity'],
        ['Dragonsworn Regrown Heater Shield', '5% Healing Effectiveness'],
        ['Dragonsworn Accommodation Heater Shield', '5% Stat Buff Effectiveness']*/
      ],[
        ['Spell Riddled Protector\'s Leaf Shield', '3 Shield Skill'],
        ['Spell Riddled Mighty Leaf Shield', '5 Strength Cap'],
        ['Spell Riddled Adroit Leaf Shield', '5 Dexterity Cap'],
        ['Spell Riddled Speedy Leaf Shield', '5 Quickness Cap'],
        /*['Spell Riddled Insightful Leaf Shield', '5 Acuity Cap'],*/
        ['Spell Riddled Regrown Leaf Shield', '5% Healing Effectiveness'],
        /*['Spell Riddled Accommodation Leaf Shield', '5% Stat Buff Effectiveness'],*/
        ['Dragonsworn Riddled Protector\'s Leaf Shield', '2% Melee Damage'],
        ['Dragonsworn Riddled Mighty Leaf Shield', '15 Strength'],
        ['Dragonsworn Riddled Adroit Leaf Shield', '15 Dexterity'],
        ['Dragonsworn Riddled Speedy Leaf Shield', '15 Quickness'],
        /*['Dragonsworn Riddled Insightful Leaf Shield', '15 Acuity'],*/
        ['Dragonsworn Riddled Regrown Leaf Shield', '5% Healing Effectiveness']//,
        /*['Dragonsworn Riddled Accommodation Leaf Shield', '5% Stat Buff Effectiveness']*/
      ],[
        ['Spell Marked Luinneag Harp', '5 Dexterity Cap'],
        ['Spell Marked Appoggiatura Harp', '5% Duration of Spells'],
        ['Spell Marked Adban Trireach Harp', '5% Healing Effectiveness']
      ]
    ]

  },

  {

    name: 'Midgard',

    races: [
      { name: 'Dwarf', resists: { 'Slash': 2, 'Thrust': 3, 'Body': 5 } }, //0
      { name: 'Troll', resists: { 'Slash': 3, 'Thrust': 2, 'Matter': 5 } }, //1
      { name: 'Kobold', resists: { 'Crush': 5, 'Energy': 5 } }, //2
      { name: 'Norseman', resists: { 'Crush': 2, 'Slash': 3, 'Cold': 5 } }, //3
      { name: 'Valykn', resists: { 'Slash': 3, 'Thrust': 2, 'Cold': 5, 'Body': 5 } }, //4
      { name: 'Frostalf', resists: { 'Slash': 2, 'Thrust': 3, 'Spirit': 5 } }, //5
      { name: 'Minotaur', resists: { 'Crush': 4, 'Heat': 3, 'Cold': 3 } } //6
    ],

    classes: [
      { name: 'Berserker', armor: 2, races: [0, 1, 2, 3, 4, 6] }, //0
      { name: 'Bonedancer', armor: 0, castStat: 'Piety', races: [1, 2, 4, 5] }, //1
      { name: 'Healer', armor: 3, castStat: 'Piety', races: [0, 3, 5] }, //2
      { name: 'Hunter', armor: 2, races: [0, 2, 3, 4] }, //3
      { name: 'Mauler', armor: 1, races: [1, 2, 3, 6] }, //4
      { name: 'Runemaster', armor: 0, castStat: 'Piety', races: [0, 2, 3, 5] }, //5
      { name: 'Savage', armor: 2, races: [0, 1, 2, 3, 4] }, //6
      { name: 'Shadowblade', armor: 1, races: [2, 3, 4, 5] }, //7
      { name: 'Shaman', armor: 3, castStat: 'Piety', races: [0, 1, 2, 5] }, //8
      { name: 'Skald', armor: 3, castStat: 'Charisma', races: [0, 1, 2, 3, 6] }, //9
      { name: 'Spiritmaster', armor: 0, castStat: 'Piety', races: [2, 3, 5] }, //10
      { name: 'Thane', armor: 3, castStat: 'Piety', races: [0, 1, 3, 4, 5] }, //11
      { name: 'Valkyrie', armor: 3, castStat: 'Piety', races: [0, 3, 5] }, //12
      { name: 'Warlock', armor: 0, castStat: 'Piety', races: [1, 2, 3, 5] }, //13
      { name: 'Warrior', armor: 3, races: [0, 1, 2, 3, 4, 6] } //14
    ],

    armor: [
      'Cloth',
      'Leather',
      'Studded',
      'Chain'
    ],

    weapon: [
      'Weapon',
      'Small Shield',
      'Medium Shield',
      'Large Shield'
    ],


    fifthSlotArmor: [
      [
        ['Rune Knit Padded','3 All Magic Skills','5 Acuity Cap','40 Hits Cap','5% Power Pool','10 AF','5 Dexterity Cap'],
        ['Rune Braided Padded',null,'5% Healing Effectiveness','5% Stat Buff Effectiveness','5 Strength Cap',null,'5 Constitution Cap'],
        ['Rune Riddled Padded',null,'5 Quickness Cap',null,null,null,null],
        ['Dragonsworn Knit Padded','2% Archery and Spell Damage','15 Acuity','40 Hits','5 Power Cap','5% Duration of Spells','15 Dexterity'],
        ['Dragonsworn Braided Padded',null,'5% Stat Buff Effectiveness','5% Healing Effectiveness','15 Strength',null,'15 Constitution'],
        ['Dragonsworn Riddled Padded',null,'15 Quickness',null,null,null,null]
      ],[
        ['Rune Stitched Starklaedar','3 All Melee Weapon Skills','5 Constitution Cap','40 Hits Cap','5 Strength Cap','10 AF','3 All Dual Wield Skills'],
        ['Rune Sewn Starklaedar',null,null,null,null,null,'5 Quickness Cap'],
        ['Dragonsworn Stitched Starklaedar','2% Melee Damage','15 Constitution','40 Hits','15 Strength','5 Fatigue Cap','5 Fatigue'],
        ['Dragonsworn Sewn Starklaedar',null,null,null,null,null,'15 Quickness']
      ],[
        ['Rune Etched Starkaskodd','3 All Melee Weapon Skills','3 Archery','40 Hits Cap','5 Strength Cap','5 Dexterity Cap','5 Constitution Cap'],
        ['Rune Carved Starkaskodd','3 All Magic Skills','10 AF','5 Quickness Cap',null,null,'5% Stat Buff Effectiveness'],
        ['Rune Struck Starkaskodd',null,null,null,null,null,'3 All Dual Wield Skills'],
        ['Dragonsworn Etched Starkaskodd','2% Melee Damage','2% Archery and Spell Damage','40 Hits','15 Strength','15 Dexterity','15 Constitution'],
        ['Dragonsworn Carved Starkaskodd',null,'5 Fatigue Cap','15 Quickness',null,null,'5 Fatigue'],
        ['Dragonsworn Struck Starkaskodd',null,null,null,null,null,'3 All Melee Weapon Skills']
      ],[
        ['Rune Bound Starkakedja','3 All Melee Weapon Skills','5% Defense','40 Hits Cap','5 Strength Cap','5 Dexterity Cap','10 AF'],
        ['Rune Scribed Starkakedja','3 All Magic Skills','5 Quickness Cap','5% Healing Effectiveness','5% Power Pool','5% Stat Buff Effectiveness','5 Acuity Cap'],
        ['Rune Marked Starkakedja',null,'5 Constitution Cap',null,null,null,null],
        ['Dragonsworn Bound Starkakedja','2% Melee Damage','3% To Hit','40 Hits','15 Strength','15 Dexterity','5 Fatigue'],
        ['Dragonsworn Scribed Starkakedja','2% Archery and Spell Damage','15 Quickness','5% Stat Buff Effectiveness','5 Power Cap','5% Healing Effectiveness','15 Acuity'],
        ['Dragonsworn Marked Starkakedja',null,'15 Constitution',null,null,null,null]
      ]
    ],

    fifthSlotWeapon: [
      [
        ['Dragonsworn', '5 Strength Cap'],
        ['Dragonsworn', '5 Dexterity Cap']
      ],[
        /*['Rune Tempered Protector\'s Buckler', '3 Shield Skill'],
        ['Rune Tempered Mighty Buckler', '5 Strength Cap'],*/
        ['Rune Tempered Adroit Buckler', '5 Dexterity Cap'],
        /*['Rune Tempered Speedy Buckler', '5 Quickness Cap'],*/
        ['Rune Tempered Insightful Buckler', '5 Acuity Cap'],
        ['Rune Tempered Regrown Buckler', '5% Healing Effectiveness'],
        ['Rune Tempered Accommodation Buckler', '5% Stat Buff Effectiveness'],
        /*['Dragonsworn Tempered Protector\'s Buckler', '2% Melee Damage'],
        ['Dragonsworn Mighty Buckler', '15 Strength'],*/
        ['Dragonsworn Adroit Buckler', '15 Dexterity'],
        /*['Dragonsworn Speedy Buckler', '15 Quickness'],*/
        ['Dragonsworn Insightful Buckler', '15 Acuity'],
        ['Dragonsworn Regrown Buckler', '5% Healing Effectiveness'],
        ['Dragonsworn Accommodation Buckler', '5% Stat Buff Effectiveness']
      ],[
        /*['Rune Etched Protector\'s Crescent Shield', '3 Shield Skill'],
        ['Rune Etched Mighty Crescent Shield', '5 Strength Cap'],*/
        ['Rune Etched Adroit Crescent Shield', '5 Dexterity Cap'],
        ['Rune Etched Speedy Crescent Shield', '5 Quickness Cap'],
        /*['Rune Etched Insightful Crescent Shield', '5 Acuity Cap'],
        ['Rune Etched Regrown Crescent Shield', '5% Healing Effectiveness'],
        ['Rune Etched Accommodation Crescent Shield', '5% Stat Buff Effectiveness'],
        ['Dragonsworn Etched Protector\'s Crescent Shield', '2% Melee Damage'],*/
        ['Dragonsworn Etched Mighty Crescent Shield', '15 Strength'],
        ['Dragonsworn Etched Adroit Crescent Shield', '15 Dexterity'],
        ['Dragonsworn Etched Speedy Crescent Shield', '15 Quickness']//,
        /*['Dragonsworn Etched Insightful Crescent Shield', '15 Acuity'],
        ['Dragonsworn Etched Regrown Crescent Shield', '5% Healing Effectiveness'],
        ['Dragonsworn Etched Accommodation Crescent Shield', '5% Stat Buff Effectiveness']*/
      ],[
        ['Rune Delinated Protector\'s Grave Shield', '3 Shield Skill'],
        ['Rune Delinated Mighty Grave Shield', '5 Strength Cap'],
        ['Rune Delinated Adroit Grave Shield', '5 Dexterity Cap'],
        ['Rune Delinated Speedy Grave Shield', '5 Quickness Cap'],
        ['Rune Delinated Insightful Grave Shield', '5 Acuity Cap'],
        ['Rune Delinated Regrown Grave Shield', '5% Healing Effectiveness'],
        /*['Rune Delinated Accommodation Grave Shield', '5% Stat Buff Effectiveness'],*/
        ['Dragonsworn Delinated Protector\'s Grave Shield', '2% Melee Damage'],
        ['Dragonsworn Delinated Mighty Grave Shield', '15 Strength'],
        ['Dragonsworn Delinated Adroit Grave Shield', '15 Dexterity'],
        ['Dragonsworn Delinated Speedy Grave Shield', '15 Quickness'],
        ['Dragonsworn Delinated Insightful Grave Shield', '15 Acuity'],
        ['Dragonsworn Delinated Regrown Grave Shield', '5% Healing Effectiveness']//,
        /*['Dragonsworn Delinated Accommodation Grave Shield', '5% Stat Buff Effectiveness']*/
      ],[
      ]
    ]

  }

];

AllClasses = Realms[0].classes.concat(Realms[1].classes).concat(Realms[2].classes);
AllClasses = _.sortBy(AllClasses, function(c){ return c.name; });

StatPrefixMap = {
  'Strength': 'Fiery',
  'Constitution': 'Earthen',
  'Dexterity': 'Vapor',
  'Quickness': 'Airy',
  'Intelligence': 'Dusty',
  'Piety': 'Watery',
  'Charisma': 'Icy',
  'Empathy': 'Heated',
  'Power': 'Mystical',
  'Hits': 'Blood'
};

ResistPrefixMap = {
  'Body': 'Dusty',
  'Cold': 'Icy',
  'Heat': 'Heated',
  'Energy': 'Light',
  'Matter': 'Earthen',
  'Spirit': 'Vapor',
  'Crush': 'Fiery',
  'Thrust': 'Airy',
  'Slash': 'Watery'
};

SkillGems = [
  { realm: 'Albion', name: 'All Magic Skills', gems: ['Mystic', 'Fervor Sigil'], classes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  { realm: 'Albion', name: 'All Melee Weapon Skills', gems: ['Finesse', 'War Sigil'], classes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  { realm: 'Albion', name: 'Archery', gems: ['Airy', 'War Sigil'], classes: [12] },
  { realm: 'Albion', name: 'Aura Manipulation', gems: ['Radiant', 'Fervor Sigil'], classes: [6] },
  { realm: 'Albion', name: 'Body Magic', gems: ['Heated', 'Evocation Sigil'], classes: [1, 13] },
  { realm: 'Albion', name: 'Chants', gems: ['Earthen', 'Fervor Sigil'], classes: [10] },
  { realm: 'Albion', name: 'Cold Magic', gems: ['Icy', 'Evocation Sigil'], classes: [14, 15] },
  { realm: 'Albion', name: 'Critical Strike', gems: ['Heated', 'Battle Jewel'], classes: [5] },
  { realm: 'Albion', name: 'Crossbow', gems: ['Vapor', 'War Sigil'], classes: [0] },
  { realm: 'Albion', name: 'Crush', gems: ['Fiery', 'War Sigil'], classes: [0, 7, 10] },
  { realm: 'Albion', name: 'Death Servant', gems: ['Ashen', 'Fervor Sigil'], classes: [9] },
  { realm: 'Albion', name: 'Deathsight', gems: ['Vacuous', 'Fervor Sigil'], classes: [9] },
  { realm: 'Albion', name: 'Dual Wield', gems: ['Icy', 'War Sigil'], classes: [5, 7] },
  { realm: 'Albion', name: 'Earth Magic', gems: ['Earthen', 'Evocation Sigil'], classes: [14, 15] },
  { realm: 'Albion', name: 'Enhancement', gems: ['Airy', 'Fervor Sigil'], classes: [2, 3, 4] },
  { realm: 'Albion', name: 'Envenom', gems: ['Dusty', 'Battle Jewel'], classes: [5] },
  { realm: 'Albion', name: 'Flexible', gems: ['Molten Magma', 'War Sigil'], classes: [4, 11] },
  { realm: 'Albion', name: 'Fire Magic', gems: ['Fiery', 'Evocation Sigil'], classes: [15] },
  { realm: 'Albion', name: 'Fist Wraps', gems: ['Glacial', 'War Sigil'], classes: [6] },
  { realm: 'Albion', name: 'Instruments', gems: ['Vapor', 'Fervor Sigil'], classes: [8] },
  { realm: 'Albion', name: 'Magnetism', gems: ['Magnetic', 'Fervor Sigil'], classes: [6] },
  { realm: 'Albion', name: 'Matter Magic', gems: ['Dusty', 'Evocation Sigil'], classes: [1, 13] },
  { realm: 'Albion', name: 'Mauler Staff', gems: ['Cinder', 'War Sigil'], classes: [6] },
  { realm: 'Albion', name: 'Mind Magic', gems: ['Watery', 'Evocation Sigil'], classes: [13] },
  { realm: 'Albion', name: 'Painworking', gems: ['Salt Crusted', 'Fervor Sigil'], classes: [9] },
  { realm: 'Albion', name: 'Parry', gems: ['Vapor', 'Battle Jewel'], classes: [0, 7, 10, 11] },
  { realm: 'Albion', name: 'Polearm', gems: ['Earthen', 'War Sigil'], classes: [0] },
  { realm: 'Albion', name: 'Power Strikes', gems: ['Clout', 'Fervor Sigil'], classes: [6] },
  { realm: 'Albion', name: 'Rejuvenation', gems: ['Watery', 'Fervor Sigil'], classes: [2, 3, 4] },
  { realm: 'Albion', name: 'Shield', gems: ['Fiery', 'Battle Jewel'], classes: [0, 4, 7, 10, 11, 12] },
  { realm: 'Albion', name: 'Slash', gems: ['Watery', 'War Sigil'], classes: [0, 5, 7, 8, 10, 11, 12] },
  { realm: 'Albion', name: 'Smite', gems: ['Fiery', 'Fervor Sigil'], classes: [2] },
  { realm: 'Albion', name: 'Soulrending', gems: ['Steaming', 'Fervor Sigil'], classes: [11] },
  { realm: 'Albion', name: 'Spirit Magic', gems: ['Vapor', 'Evocation Sigil'], classes: [1] },
  { realm: 'Albion', name: 'Staff', gems: ['Earthen', 'Battle Jewel'], classes: [3, 6] },
  { realm: 'Albion', name: 'Stealth', gems: ['Airy', 'Battle Jewel'], classes: [5, 8, 12] },
  { realm: 'Albion', name: 'Thrust', gems: ['Dusty', 'War Sigil'], classes: [0, 5, 7, 8, 11, 12] },
  { realm: 'Albion', name: 'Two Handed', gems: ['Heated', 'War Sigil'], classes: [0, 10] },
  { realm: 'Albion', name: 'Wind Magic', gems: ['Airy', 'Evocation Sigil'], classes: [14] },

  { realm:'Hibernia', name: 'All Magic Skills', gems: ['Mystic', 'Nature Spell Stone'], classes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  { realm:'Hibernia', name: 'All Melee Weapon Skills', gems: ['Finesse', 'War Spell Stone'], classes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  { realm:'Hibernia', name: 'Arboreal Path', gems: ['Steaming', 'Nature Spell Stone'], classes: [0, 13] },
  { realm:'Hibernia', name: 'Archery', gems: ['Airy', 'War Spell Stone'], classes: [12] },
  { realm:'Hibernia', name: 'Aura Manipulation', gems: ['Radiant', 'Nature Spell Stone'], classes: [9] },
  { realm:'Hibernia', name: 'Blades', gems: ['Watery', 'War Spell Stone'], classes: [2, 3, 4, 8, 11, 12, 15] },
  { realm:'Hibernia', name: 'Blunt', gems: ['Fiery', 'War Spell Stone'], classes: [2, 3, 8] },
  { realm:'Hibernia', name: 'Celtic Dual', gems: ['Icy', 'War Spell Stone'], classes: [3, 11,12] },
  { realm:'Hibernia', name: 'Celtic Spear', gems: ['Earthen', 'War Spell Stone'], classes: [8] },
  { realm:'Hibernia', name: 'Creeping Path', gems: ['Oozing', 'Nature Spell Stone'], classes: [0] },
  { realm:'Hibernia', name: 'Critical Strike', gems: ['Heated', 'Battle Jewel'], classes: [11] },
  { realm:'Hibernia', name: 'Dementia', gems: ['Aberrant', 'Arcane Spell Stone'], classes: [14] },
  { realm:'Hibernia', name: 'Enchantments', gems: ['Vapor', 'Arcane Spell Stone'], classes: [7] },
  { realm:'Hibernia', name: 'Envenom', gems: ['Dusty', 'Battle Jewel'], classes: [11] },
  { realm:'Hibernia', name: 'Ethereal Shriek', gems: ['Ethereal', 'Arcane Spell Stone'], classes: [1] },
  { realm:'Hibernia', name: 'Fist Wraps', gems: ['Glacial', 'War Spell Stone'], classes: [9] },
  { realm:'Hibernia', name: 'Large Weaponry', gems: ['Heated', 'War Spell Stone'], classes: [4, 8] },
  { realm:'Hibernia', name: 'Light', gems: ['Fiery', 'Arcane Spell Stone'], classes: [6, 7, 10] },
  { realm:'Hibernia', name: 'Magnetism', gems: ['Magnetic', 'Nature Spell Stone'], classes: [9] },
  { realm:'Hibernia', name: 'Mana', gems: ['Watery', 'Arcane Spell Stone'], classes: [6, 7, 10] },
  { realm:'Hibernia', name: 'Mauler Staff', gems: ['Cinder', 'War Spell Stone'], classes: [9] },
  { realm:'Hibernia', name: 'Mentalism', gems: ['Earthen', 'Arcane Spell Stone'], classes: [10] },
  { realm:'Hibernia', name: 'Music', gems: ['Airy', 'Nature Spell Stone'], classes: [2] },
  { realm:'Hibernia', name: 'Nature', gems: ['Earthen', 'Nature Spell Stone'], classes: [5, 15] },
  { realm:'Hibernia', name: 'Nurture', gems: ['Fiery', 'Nature Spell Stone'], classes: [2, 5, 15] },
  { realm:'Hibernia', name: 'Parry', gems: ['Vapor', 'Battle Jewel'], classes: [3, 4, 8, 13, 15] },
  { realm:'Hibernia', name: 'Phantasmal Wail', gems: ['Phantasmal', 'Arcane Spell Stone'], classes: [1] },
  { realm:'Hibernia', name: 'Piercing', gems: ['Dusty', 'War Spell Stone'], classes: [3, 4, 8, 11, 12, 14] },
  { realm:'Hibernia', name: 'Power Strikes', gems: ['Clout', 'Nature Spell Stone'], classes: [9] },
  { realm:'Hibernia', name: 'Regrowth', gems: ['Watery', 'Nature Spell Stone'], classes: [2, 5, 15] },
  { realm:'Hibernia', name: 'Scythe', gems: ['Light', 'War Spell Stone'], classes: [13] },
  { realm:'Hibernia', name: 'Shadow Mastery', gems: ['Shadowy', 'Arcane Spell Stone'], classes: [14] },
  { realm:'Hibernia', name: 'Shield', gems: ['Fiery', 'Battle Jewel'], classes: [3, 4, 8, 15] },
  { realm:'Hibernia', name: 'Spectral Guard', gems: ['Spectral', 'Arcane Spell Stone'], classes: [1] },
  { realm:'Hibernia', name: 'Staff', gems: ['Earthen', 'Battle Jewel'], classes: [9] },
  { realm:'Hibernia', name: 'Stealth', gems: ['Airy', 'Battle Jewel'], classes: [11, 12] },
  { realm:'Hibernia', name: 'Valor', gems: ['Airy', 'Arcane Spell Stone'], classes: [4] },
  { realm:'Hibernia', name: 'Vampiiric Embrace', gems: ['Embracing', 'Arcane Spell Stone'], classes: [14] },
  { realm:'Hibernia', name: 'Verdant Path', gems: ['Mineral Encrusted', 'Nature Spell Stone'], classes: [0] },
  { realm:'Hibernia', name: 'Void', gems: ['Icy', 'Arcane Spell Stone'], classes: [6] },

  { realm:'Midgard', name: 'All Magic Skills', gems: ['Mystic', 'Primal Rune'], classes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
  { realm:'Midgard', name: 'All Melee Weapon Skills', gems: ['Finesse', 'War Rune'], classes: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
  { realm:'Midgard', name: 'Archery', gems: ['Airy', 'War Rune'], classes: [3] },
  { realm:'Midgard', name: 'Augmentation', gems: ['Airy', 'Chaos Rune'], classes: [2, 8] },
  { realm:'Midgard', name: 'Aura Manipulation', gems: ['Radiant', 'Primal Rune'], classes: [4] },
  { realm:'Midgard', name: 'Axe', gems: ['Earthen', 'War Rune'], classes: [0, 6, 7, 11, 14] },
  { realm:'Midgard', name: 'Battlesongs', gems: ['Airy', 'Primal Rune'], classes: [9] },
  { realm:'Midgard', name: 'Beastcraft', gems: ['Earthen', 'Primal Rune'], classes: [3] },
  { realm:'Midgard', name: 'Bone Army', gems: ['Ashen', 'Primal Rune'], classes: [1] },
  { realm:'Midgard', name: 'Cave Magic', gems: ['Fiery', 'Chaos Rune'], classes: [8] },
  { realm:'Midgard', name: 'Critical Strike', gems: ['Heated', 'Battle Jewel'], classes: [7] },
  { realm:'Midgard', name: 'Cursing', gems: ['Blighted', 'Primal Rune'], classes: [13] },
  { realm:'Midgard', name: 'Darkness', gems: ['Icy', 'Chaos Rune'], classes: [10] },
  { realm:'Midgard', name: 'Envenom', gems: ['Dusty', 'Battle Jewel'], classes: [7] },
  { realm:'Midgard', name: 'Fist Wraps', gems: ['Glacial', 'War Rune'], classes: [4] },
  { realm:'Midgard', name: 'Hammer', gems: ['Fiery', 'War Rune'], classes: [0, 9, 11, 14] },
  { realm:'Midgard', name: 'Hand To Hand', gems: ['Lightning Charged', 'War Rune'], classes: [6] },
  { realm:'Midgard', name: 'Hexing', gems: ['Unholy', 'Primal Rune'], classes: [13] },
  { realm:'Midgard', name: 'Left Axe', gems: ['Icy', 'War Rune'], classes: [0, 7] },
  { realm:'Midgard', name: 'Magnetism', gems: ['Magnetic', 'Primal Rune'], classes: [4] },
  { realm:'Midgard', name: 'Mauler Staff', gems: ['Cinder', 'War Rune'], classes: [4] },
  { realm:'Midgard', name: 'Mending', gems: ['Watery', 'Chaos Rune'], classes: [2, 9] },
  { realm:'Midgard', name: 'Odin\'s Will', gems: ['Valiant', 'Primal Rune'], classes: [12] },
  { realm:'Midgard', name: 'Parry', gems: ['Vapor', 'Battle Jewel'], classes: [0, 6, 9, 11, 12, 14] },
  { realm:'Midgard', name: 'Power Strikes', gems: ['Clout', 'Primal Rune'], classes: [4] },
  { realm:'Midgard', name: 'Runecarving', gems: ['Heated', 'Chaos Rune'], classes: [5] },
  { realm:'Midgard', name: 'Shield', gems: ['Fiery', 'Battle Jewel'], classes: [11, 12, 14] },
  { realm:'Midgard', name: 'Spear', gems: ['Heated', 'War Rune'], classes: [3, 12] },
  { realm:'Midgard', name: 'Staff', gems: ['Earthen', 'Battle Jewel'], classes: [4] },
  { realm:'Midgard', name: 'Stealth', gems: ['Airy', 'Battle Jewel'], classes: [3, 7] },
  { realm:'Midgard', name: 'Stormcalling', gems: ['Fiery', 'Primal Rune'], classes: [11] },
  { realm:'Midgard', name: 'Summoning', gems: ['Vapor', 'Chaos Rune'], classes: [10] },
  { realm:'Midgard', name: 'Suppression', gems: ['Dusty', 'Chaos Rune'], classes: [5] },
  { realm:'Midgard', name: 'Sword', gems: ['Watery', 'War Rune'], classes: [0, 3, 6, 7, 9, 12, 14] },
  { realm:'Midgard', name: 'Thrown Weapons', gems: ['Vapor', 'War Rune'], classes: [0, 7, 14] }
],

FocusGems = [
  { realm:'Albion', name: 'All Spell Lines', gems: ['Brilliant', 'Sigil'], classes: [1, 9, 13, 14, 15] },
  { realm:'Albion', name: 'Body Magic', gems: ['Heat', 'Sigil'], classes: [1, 13] },
  { realm:'Albion', name: 'Cold Magic', gems: ['Ice', 'Sigil'], classes: [14, 15] },
  { realm:'Albion', name: 'Death Servant', gems: ['Ashen', 'Sigil'], classes: [9] },
  { realm:'Albion', name: 'Deathsight', gems: ['Vacuous', 'Sigil'], classes: [9] },
  { realm:'Albion', name: 'Earth Magic', gems: ['Earth', 'Sigil'], classes: [14, 15] },
  { realm:'Albion', name: 'Fire Magic', gems: ['Fire', 'Sigil'], classes: [15] },
  { realm:'Albion', name: 'Matter Magic', gems: ['Dust', 'Sigil'], classes: [1, 13] },
  { realm:'Albion', name: 'Mind Magic', gems: ['Water', 'Sigil'], classes: [13] },
  { realm:'Albion', name: 'Painworking', gems: ['Salt Crusted', 'Sigil'], classes: [9] },
  { realm:'Albion', name: 'Spirit Magic', gems: ['Vapor', 'Sigil'], classes: [1] },
  { realm:'Albion', name: 'Wind Magic', gems: ['Air', 'Sigil'], classes: [14] },

  { realm:'Hibernia', name: 'All Spell Lines', gems: ['Brilliant', 'Spell Stone'], classes: [0, 1, 6, 7, 10] },
  { realm:'Hibernia', name: 'Arboreal Path', gems: ['Steaming', 'Spell Stone'], classes: [0] },
  { realm:'Hibernia', name: 'Creeping Path', gems: ['Oozing', 'Spell Stone'], classes: [0] },
  { realm:'Hibernia', name: 'Enchantments', gems: ['Vapor', 'Spell Stone'], classes: [7] },
  { realm:'Hibernia', name: 'Ethereal Shriek', gems: ['Ethereal', 'Spell Stone'], classes: [1] },
  { realm:'Hibernia', name: 'Light', gems: ['Fire', 'Spell Stone'], classes: [6, 7, 10] },
  { realm:'Hibernia', name: 'Mana', gems: ['Water', 'Spell Stone'], classes: [6, 7, 10] },
  { realm:'Hibernia', name: 'Mentalism', gems: ['Earth', 'Spell Stone'], classes: [10] },
  { realm:'Hibernia', name: 'Phantasmal Wail', gems: ['Phantasmal', 'Spell Stone'], classes: [1] },
  { realm:'Hibernia', name: 'Spectral Guard', gems: ['Spectral', 'Spell Stone'], classes: [1] },
  { realm:'Hibernia', name: 'Verdant Path', gems: ['Mineral Encrusted', 'Spell Stone'], classes: [0] },
  { realm:'Hibernia', name: 'Void', gems: ['Ice', 'Spell Stone'], classes: [6] },

  { realm:'Midgard', name: 'All Spell Lines', gems: ['Brilliant', 'Rune'], classes: [1, 5, 10, 13] },
  { realm:'Midgard', name: 'Bone Army', gems: ['Ashen', 'Rune'], classes: [1] },
  { realm:'Midgard', name: 'Cursing', gems: ['Blighted', 'Rune'], classes: [13] },
  { realm:'Midgard', name: 'Darkness', gems: ['Ice', 'Rune'], classes: [1, 5, 10] },
  { realm:'Midgard', name: 'Runecarving', gems: ['Heat', 'Rune'], classes: [5] },
  { realm:'Midgard', name: 'Summoning', gems: ['Vapor', 'Rune'], classes: [10] },
  { realm:'Midgard', name: 'Suppression', gems: ['Dust', 'Rune'], classes: [1, 5, 10] }
];

GemLevels = [
  'Raw',
  'Uncut',
  'Rough',
  'Flawed',
  'Imperfect',
  'Polished',
  'Faceted',
  'Precious',
  'Flawless',
  'Perfect'
];

GemsOrdered = [
  'Lo',
  'Um',
  'On',
  'Ee',
  'Pal',
  'Mon',
  'Ros',
  'Zo',
  'Kath',
  'Ra'
]

Dusts = {
  'Essence Jewel': 'Essence of Life',
  'Shielding Jewel': 'Ground Draconic Scales',
  'Spell Stone': 'Ground Draconic Scales',
  'Sigil': 'Ground Draconic Scales',
  'Rune': 'Ground Draconic Scales',
  'Chaos Rune': 'Soot From Niflheim',
  'Battle Jewel': 'Bloodied Battlefield Dirt',
  'War Rune': 'Ground Giant Bone',
  'Primal Rune': 'Ground Vendo Bone',
  'Evocation Sigil': 'Ground Cave Crystal',
  'Fervor Sigil': 'Ground Blessed Undead Bone',
  'War Sigil': 'Ground Caer Stone',
  'Nature Spell Stone': 'Fairy Dust',
  'War Spell Stone': 'Unseelie Dust',
  'Arcane Spell Stone': 'Other Worldly Dust'
};

DustsOrdered = [
  'Bloodied Battlefield Dirt',
  'Essence of Life',
  'Fairy Dust',
  'Ground Blessed Undead Bone',
  'Ground Caer Stone',
  'Ground Cave Crystal',
  'Ground Draconic Scales',
  'Ground Giant Bone',
  'Ground Vendo Bone',
  'Other Worldly Dust',
  'Soot From Niflheim',
  'Unseelie Dust'
];

Liquids = {
  'Fiery': ['Draconic Fire'],
  'Earthen': ['Treant Blood'],
  'Vapor': ['Swamp Fog'],
  'Airy': ['Air Elemental Essence'],
  'Heated': ['Heat From an Unearthly Pyre'],
  'Icy': ['Frost From a Wasteland'],
  'Watery': ['Leviathan Blood'],
  'Dusty': ['Undead Ash and Holy Water'],
  'Fire': ['Draconic Fire'],
  'Earth': ['Treant Blood'],
  'Vapor': ['Swamp Fog'],
  'Air': ['Air Elemental Essence'],
  'Heat': ['Heat From an Unearthly Pyre'],
  'Ice': ['Frost From a Wasteland'],
  'Water': ['Leviathan Blood'],
  'Dust': ['Undead Ash and Holy Water'],
  'Ashen': ['Undead Ash and Holy Water'],
  'Vacuous': ['Swamp Fog'],
  'Salt Crusted': ['Mystic Energy'],
  'Steaming Spell': ['Swamp Fog'],
  'Steaming Nature': ['Swamp Fog'],
  'Steaming Fervor': ['Heat From an Unearthly Pyre'],
  'Oozing': ['Treant Blood'],
  'Mineral Encrusted': ['Heat From an Unearthly Pyre'],
  'Lightning Charged': ['Leviathan Blood'],
  'Molten Magma': ['Leviathan Blood'],
  'Light': ['Sun Light'],
  'Blood': ['Giant Blood'],
  'Mystical': ['Mystic Energy'],
  'Mystic': ['Mystic Energy'],
  'Brilliant': ['Draconic Fire', 'Mystic Energy', 'Treant Blood'],
  'Finesse': ['Draconic Fire', 'Mystic Energy', 'Treant Blood'],
  'Ethereal Spell': ['Swamp Fog'],
  'Phantasmal Spell': ['Leviathan Blood'],
  'Spectral Spell': ['Draconic Fire'],
  'Ethereal Arcane': ['Leviathan Blood'],
  'Phantasmal Arcane': ['Draconic Fire'],
  'Spectral Arcane': ['Air Elemental Essence'],
  'Aberrant': ['Treant Blood'],
  'Embracing': ['Frost From a Wasteland'],
  'Shadowy': ['Swamp Fog'],
  'Blighted Primal': ['Air Elemental Essence'],
  'Blighted Rune': ['Undead Ash and Holy Water'],
  'Valiant': ['Swamp Fog'],
  'Unholy': ['Air Elemental Essence'],
  'Glacial': ['Frost From a Wasteland'],
  'Cinder': ['Draconic Fire'],
  'Radiant': ['Sun Light'],
  'Magnetic': ['Mystic Energy'],
  'Clout': ['Giant Blood']
};

LiquidsOrdered = [
  'Air Elemental Essence',
  'Draconic Fire',
  'Frost From a Wasteland',
  'Giant Blood',
  'Heat From an Unearthly Pyre',
  'Leviathan Blood',
  'Mystic Energy',
  'Sun Light',
  'Swamp Fog',
  'Treant Blood',
  'Undead Ash and Holy Water'
];

DustMultiplier = {
  'Stat': [4, 1],
  'Resist': [5, 1],
  'Skill': [4, 1],
  'Focus': [5, 1],
  'All Magic Skills': [5, 1],
  'All Melee Skills': [5, 1]
};

LiquidMultiplier = {
  'Stat': [1, 1],
  'Resist': [1, 1],
  'Skill': [1, 1],
  'Focus': [1, 1],
  'All Magic Skills': [6, 2],
  'All Melee Skills': [6, 2]
};