Realms = [
  {
    name: 'Albion',

    races: [
      { name: 'Avalonian', resists: { 'Crush': 2, 'Slash': 3, 'Matter': 5 } },
      { name: 'Briton', resists: { 'Crush': 2, 'Slash': 3, 'Matter': 5 } },
      { name: 'Highlander', resists: { 'Crush': 3, 'Slash': 2, 'Cold': 5  } },
      { name: 'Saracen', resists: { 'Slash': 2, 'Thrust': 3, 'Heat': 5 } },
      { name: 'Inconnu', resists: { 'Crush': 2, 'Thrust': 3, 'Heat': 5, 'Spirit': 5 } },
      { name: 'Half Ogre', resists: { 'Thrust': 2, 'Slash': 3, 'Matter': 5 } },
      { name: 'Minotaur', resists: { 'Crush': 4, 'Heat': 3, 'Cold': 3 } }
    ],

    classes: [
      { name: 'Armsman', armor: 4, races: [0, 1, 2, 3, 4, 5, 6] }, //0
      { name: 'Cabalist', armor: 0, castStat: 'Intelligence', races: [0, 1, 3, 4, 5] }, //1
      { name: 'Cleric', armor: 3, castStat: 'Piety', races: [0, 1, 2] }, //2
      { name: 'Friar', armor: 1, castStat: 'Piety', races: [1] }, //3
      { name: 'Heretic', armor: 0, castStat: 'Piety', races: [0, 1, 4, 6] }, //4
      { name: 'Infiltrator', armor: 1, races: [1, 3, 4] }, //5
      { name: 'Mauler', armor: 1, races: [1, 5, 6] }, //6
      { name: 'Mercenary', armor: 3, races: [0, 1, 2, 3, 4, 5, 6] }, //7
      { name: 'Minstrel', armor: 3, castStat: 'Charisma', races: [1, 2, 3, 4] }, //8
      { name: 'Necromancer', armor: 0, castStat: 'Intelligence', races: [1, 3, 4] }, //9
      { name: 'Paladin', armor: 4, races: [0, 1, 2, 3] }, //10
      { name: 'Reaver', armor: 3, castStat: 'Piety', races: [1, 3, 4] }, //11
      { name: 'Scout', armor: 2, races: [1, 2, 3, 4] }, //12
      { name: 'Sorcerer', armor: 0, castStat: 'Intelligence', races: [0, 1, 3, 4, 5] }, //13
      { name: 'Theurgist', armor: 0, castStat: 'Intelligence', races: [0, 1, 5] }, //14
      { name: 'Wizard', armor: 0, castStat: 'Intelligence', races: [0, 1, 5] } //15
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
      { name: 'Celt', resists: { 'Crush': 2, 'Slash': 3, 'Spirit': 5 } },
      { name: 'Elf', resists: { 'Slash': 2, 'Thrust': 3, 'Spirit': 5 } },
      { name: 'Firbolg', resists: { 'Crush': 3, 'Slash': 2, 'Heat': 5 } },
      { name: 'Lurikeen', resists: { 'Crush': 5, 'Energy': 5 } },
      { name: 'Sylvan', resists: { 'Crush': 3, 'Thrust': 2, 'Matter': 5, 'Energy': 5 } },
      { name: 'Shar', resists: { 'Crush': 5, 'Energy': 5 } },
      { name: 'Minotaur', resists: { 'Crush': 4, 'Heat': 3, 'Cold': 3 } }
    ],

    classes: [
      { name: 'Animist', armor: 0, castStat: 'Intelligence', races: [0, 2, 4] }, //0
      { name: 'Bainshee', armor: 0, castStat: 'Intelligence', races: [0, 1, 3] }, //1
      { name: 'Bard', armor: 2, castStat: 'Charisma', races: [0, 2] }, //2
      { name: 'Blademaster', armor: 2, races: [0, 1, 2, 5, 6] }, //3
      { name: 'Champion', armor: 3, races: [0, 1, 3, 5] }, //4
      { name: 'Druid', armor: 3, castStat: 'Empathy', races: [0, 2, 4] }, //5
      { name: 'Eldritch', armor: 0, castStat: 'Intelligence', races: [1, 3] }, //6
      { name: 'Enchanter', armor: 0, castStat: 'Intelligence', races: [1, 3] }, //7
      { name: 'Hero', armor: 3, races: [0, 2, 3, 4, 5, 6] }, //8
      { name: 'Mauler', armor: 1, races: [0, 2, 3, 6] }, //9
      { name: 'Mentalist', armor: 0, castStat: 'Intelligence', races: [0, 1, 3, 5] }, //10
      { name: 'Nightshade', armor: 1, races: [0, 1, 3] }, //11
      { name: 'Ranger', armor: 2, races: [0, 1, 3, 5] }, //12
      { name: 'Valewalker', armor: 0, castStat: 'Intelligence', races: [0, 2, 4] }, //13
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
      { name: 'Dwarf', resists: { 'Slash': 2, 'Thrust': 3, 'Body': 5 } },
      { name: 'Troll', resists: { 'Slash': 3, 'Thrust': 2, 'Matter': 5 } },
      { name: 'Kobold', resists: { 'Crush': 5, 'Energy': 5 } },
      { name: 'Norseman', resists: { 'Crush': 2, 'Slash': 3, 'Cold': 5 } },
      { name: 'Valykn', resists: { 'Slash': 3, 'Thrust': 2, 'Cold': 5, 'Body': 5 } },
      { name: 'Frostalf', resists: { 'Slash': 2, 'Thrust': 3, 'Spirit': 5 } },
      { name: 'Minotaur', resists: { 'Crush': 4, 'Heat': 3, 'Cold': 3 } }
    ],

    classes: [
      { name: 'Berserker', armor: 2, races: [0, 1, 2, 3, 4, 6] }, //0
      { name: 'Bonedancer', armor: 0, castStat: 'Piety', races: [1, 2, 4] }, //1
      { name: 'Healer', armor: 3, castStat: 'Piety', races: [0, 3, 5] }, //2
      { name: 'Hunter', armor: 2, races: [0, 2, 3, 4] }, //3
      { name: 'Mauler', armor: 1, races: [1, 3, 6] }, //4
      { name: 'Runemaster', armor: 0, castStat: 'Piety', races: [0, 2, 3, 5] }, //5
      { name: 'Savage', armor: 2, races: [0, 1, 2, 3, 4] }, //6
      { name: 'Shadowblade', armor: 1, races: [2, 3, 4] }, //7
      { name: 'Shaman', armor: 3, castStat: 'Piety', races: [1, 2, 5] }, //8
      { name: 'Skald', armor: 3, castStat: 'Charisma', races: [0, 1, 2, 3] }, //9
      { name: 'Spiritmaster', armor: 0, castStat: 'Piety', races: [2, 3, 5] }, //10
      { name: 'Thane', armor: 3, castStat: 'Piety', races: [0, 1, 3, 5] }, //11
      { name: 'Valkyrie', armor: 3, castStat: 'Piety', races: [0, 3, 5] }, //12
      { name: 'Warlock', armor: 0, castStat: 'Piety', races: [2, 3, 5] }, //13
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