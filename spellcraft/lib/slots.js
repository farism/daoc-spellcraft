JewelSlots = [
  { id: 0, value: 'Neck' },
  { id: 1, value: 'Cloak' },
  { id: 2, value: 'Jewel' },
  { id: 3, value: 'Belt' },
  { id: 4, value: 'Ring' },
  { id: 5, value: 'Ring' },
  { id: 6, value: 'Wrist' },
  { id: 7, value: 'Wrist' },
  { id: 8, value: 'Mythical' }
];

ArmorSlots = [
  { id: 9, value: 'Chest' },
  { id: 10, value: 'Head' },
  { id: 11, value: 'Arms' },
  { id: 12, value: 'Legs' },
  { id: 13, value: 'Hands' },
  { id: 14, value: 'Feet' }
];

WeaponSlots = [
  { id: 15, value: 'Right Hand' },
  { id: 16, value: 'Left Hand' },
  { id: 17, value: '2 Handed' },
  { id: 18, value: 'Ranged' }
];

ShieldTypes = [
  'Small',
  'Medium',
  'Large'
]

CraftedSlots = ArmorSlots.concat(WeaponSlots);

AllSlots = JewelSlots.concat(ArmorSlots).concat(WeaponSlots);