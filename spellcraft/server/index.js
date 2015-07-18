Meteor.startup(function () {

  smtp = {
    username: 'daoctoolkit', 
    password: 'Phelix22',
    server: 'smtp.gmail.com',
    port: 25
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

  if(Templates.find().count() === 0) {


      Templates.insert({
        "_id": "2H4NRskfb97JgAhuo",
        "character": {
            "realm": "Hibernia",
            "class": "Bard",
            "race": "Celt",
            "level": 50
        },
        "createdAt": Date(1425140004080),
        "name": "Pbpesos2",
        "owner": "8vHE2Eps5gHCLHFRG",
        "public": 0,
        "slots": [{
            "slot": "Neck",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "Demonslayer Medal of Honor",
            "craftedItemName": "Crafted",
            "imbuePoints": 5,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Resist",
                "effect": "Slash",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Resist",
                "effect": "Thrust",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Resist",
                "effect": "Crush",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Resist",
                "effect": "Spirit",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Resist",
                "effect": "Matter",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Resist",
                "effect": "Energy",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "Resist",
                "effect": "Heat",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "Resist",
                "effect": "Cold",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "Resist",
                "effect": "Body",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": "",
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Cloak",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "",
            "craftedItemName": "Crafted",
            "imbuePoints": 5,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Other Bonus",
                "effect": "% Power Pool",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Stat",
                "effect": "Constitution",
                "amount": 24,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Resist",
                "effect": "Energy",
                "amount": 7,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Resist",
                "effect": "Body",
                "amount": 7,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Stat",
                "effect": "Hits",
                "amount": 30,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Other Bonus",
                "effect": "Stat Buff Effectiveness",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "Cap Increase",
                "effect": "Power",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "Other Bonus",
                "effect": "Archery and Casting Speed",
                "amount": 2,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "Cap Increase",
                "effect": "Hits",
                "amount": 30,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Jewel",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "Egg of Youth",
            "craftedItemName": "Crafted",
            "imbuePoints": 4,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Resist",
                "effect": "Crush",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Resist",
                "effect": "Thrust",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Resist",
                "effect": "Slash",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Stat",
                "effect": "Hits",
                "amount": 32,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Other Bonus",
                "effect": "Healing Effectiveness",
                "amount": 8,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Cap Increase",
                "effect": "Hits",
                "amount": 40,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "Stat",
                "effect": "Acuity",
                "amount": 12,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Belt",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "Curative Sash of the Vigilant",
            "craftedItemName": "Crafted",
            "imbuePoints": 5.5,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Stat",
                "effect": "Acuity",
                "amount": 21,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Stat",
                "effect": "Dexterity",
                "amount": 18,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Stat",
                "effect": "Hits",
                "amount": 40,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Resist",
                "effect": "Spirit",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Resist",
                "effect": "Matter",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Resist",
                "effect": "Thrust",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "Cap Increase",
                "effect": "Acuity",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "Cap Increase",
                "effect": "Dexterity",
                "amount": 4,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "Cap Increase",
                "effect": "Hits",
                "amount": 40,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "Other Bonus",
                "effect": "Healing Effectiveness",
                "amount": 10,
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Ring",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "Ring of Granite Enhancement",
            "craftedItemName": "Crafted",
            "imbuePoints": 4.5,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Skill",
                "effect": "All Melee Weapon Skills",
                "amount": 3,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Resist",
                "effect": "Cold",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Resist",
                "effect": "Heat",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Resist",
                "effect": "Crush",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Resist",
                "effect": "Thrust",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Resist",
                "effect": "Slash",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "Stat",
                "effect": "Hits",
                "amount": 50,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "Cap Increase",
                "effect": "Hits",
                "amount": 50,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "",
                "effect": "",
                "amount": "",
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": "",
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Ring",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "",
            "craftedItemName": "Crafted",
            "imbuePoints": 2,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Resist",
                "effect": "Cold",
                "amount": 9,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Other Bonus",
                "effect": "Duration of Spells",
                "amount": 13,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Other Bonus",
                "effect": "AF",
                "amount": 22,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Wrist",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "Bracelet of Zo'arkat",
            "craftedItemName": "Crafted",
            "imbuePoints": 3.5,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Resist",
                "effect": "Body",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Resist",
                "effect": "Matter",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Resist",
                "effect": "Spirit",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Other Bonus",
                "effect": "% Power Pool",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Stat",
                "effect": "Acuity",
                "amount": 18,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Other Bonus",
                "effect": "Archery and Spell Range",
                "amount": 4,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Wrist",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "Glimmershade Bracer",
            "craftedItemName": "Crafted",
            "imbuePoints": 4.5,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Resist",
                "effect": "Body",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Resist",
                "effect": "Cold",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Resist",
                "effect": "Heat",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Resist",
                "effect": "Energy",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Resist",
                "effect": "Matter",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Resist",
                "effect": "Spirit",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "Other Bonus",
                "effect": "% Power Pool",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "Stat",
                "effect": "Acuity",
                "amount": 22,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "",
                "effect": "",
                "amount": "",
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": "",
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Mythical",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "",
            "craftedItemName": "Crafted",
            "imbuePoints": 0,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": false
        }, {
            "slot": "Chest",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "Jerkin of Demonic Means",
            "craftedItemName": "Crafted",
            "imbuePoints": 5,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Stat",
                "effect": "Hits",
                "amount": 40,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Skill",
                "effect": "All Magic Skills",
                "amount": 2,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Cap Increase",
                "effect": "Acuity",
                "amount": 7,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Cap Increase",
                "effect": "Hits",
                "amount": 40,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Other Bonus",
                "effect": "AF",
                "amount": 15,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Other Bonus",
                "effect": "Archery and Spell Range",
                "amount": 4,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "Other Bonus",
                "effect": "Archery and Casting Speed",
                "amount": 4,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "Other Bonus",
                "effect": "Healing Effectiveness",
                "amount": 4,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "Cap Increase",
                "effect": "Dexterity",
                "amount": 7,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Head",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "The Winged Helm",
            "craftedItemName": "Crafted",
            "imbuePoints": 4.5,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Stat",
                "effect": "Strength",
                "amount": 15,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Stat",
                "effect": "Dexterity",
                "amount": 15,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Resist",
                "effect": "Matter",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Resist",
                "effect": "Spirit",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Stat",
                "effect": "Hits",
                "amount": 40,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Other Bonus",
                "effect": "AF",
                "amount": 10,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "Other Bonus",
                "effect": "Fatigue",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "",
                "effect": "",
                "amount": "",
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "",
                "effect": "",
                "amount": "",
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": "",
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Arms",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "Infernal Cailiocht Sleeves",
            "craftedItemName": "Crafted",
            "imbuePoints": 4,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Stat",
                "effect": "Dexterity",
                "amount": 21,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Stat",
                "effect": "Acuity",
                "amount": 21,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Resist",
                "effect": "Heat",
                "amount": 6,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Cap Increase",
                "effect": "Acuity",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Cap Increase",
                "effect": "Dexterity",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Other Bonus",
                "effect": "Healing Effectiveness",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "Other Bonus",
                "effect": "Archery and Casting Speed",
                "amount": 2,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Legs",
            "crafted": true,
            "equipped": true,
            "level": 51,
            "itemName": "",
            "craftedItemName": "Reinforced Blazed Cailocht",
            "imbuePoints": 37.5,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Stat",
                "effect": "Constitution",
                "amount": 28,
                "amountIndex": 10,
                "gem": ["Perfect", "Earthen", "Essence Jewel"]
            }, {
                "index": 1,
                "type": "Resist",
                "effect": "Crush",
                "amount": 11,
                "amountIndex": 7,
                "gem": ["Faceted", "Fiery", "Shielding Jewel"]
            }, {
                "index": 2,
                "type": "Stat",
                "effect": "Hits",
                "amount": 52,
                "amountIndex": 7,
                "gem": ["Faceted", "Blood", "Essence Jewel"]
            }, {
                "index": 3,
                "type": "Stat",
                "effect": "Dexterity",
                "amount": 4,
                "amountIndex": 2,
                "gem": ["Uncut", "Vapor", "Essence Jewel"]
            }, {
                "index": 4,
                "type": "Other Bonus",
                "effect": "% Power Pool",
                "amount": 5,
                "amountIndex": 0,
                "gem": ["", "", ""]
            }],
            "craftedInUse": true
        }, {
            "slot": "Hands",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "Melodious Gloves",
            "craftedItemName": "Crafted",
            "imbuePoints": 4.5,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Stat",
                "effect": "Dexterity",
                "amount": 19,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Stat",
                "effect": "Constitution",
                "amount": 9,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Stat",
                "effect": "Hits",
                "amount": 35,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Resist",
                "effect": "Body",
                "amount": 9,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Resist",
                "effect": "Energy",
                "amount": 8,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Cap Increase",
                "effect": "Hits",
                "amount": 15,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "Other Bonus",
                "effect": "Duration of Spells",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "Other Bonus",
                "effect": "Healing Effectiveness",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Feet",
            "crafted": true,
            "equipped": true,
            "level": 51,
            "itemName": "Melodious Boots",
            "craftedItemName": "Reinforced Dragonsworn Ornamented Cailocht",
            "imbuePoints": 0,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Resist",
                "effect": "Slash",
                "amount": 11,
                "amountIndex": 0,
                "gem": ["", "Watery", "Shielding Jewel"]
            }, {
                "index": 1,
                "type": "Resist",
                "effect": "Thrust",
                "amount": 5,
                "amountIndex": 0,
                "gem": ["", "Airy", "Shielding Jewel"]
            }, {
                "index": 2,
                "type": "Stat",
                "effect": "Hits",
                "amount": 76,
                "amountIndex": 0,
                "gem": ["", "Blood", "Essence Jewel"]
            }, {
                "index": 3,
                "type": "Resist",
                "effect": "Heat",
                "amount": 3,
                "amountIndex": 0,
                "gem": ["", "Heated", "Shielding Jewel"]
            }, {
                "index": 4,
                "type": "Stat",
                "effect": "Constitution",
                "amount": 15,
                "amountIndex": 0,
                "gem": ["", "", ""]
            }],
            "craftedInUse": true
        }, {
            "slot": "Right Hand",
            "crafted": true,
            "equipped": true,
            "level": 51,
            "itemName": "",
            "craftedItemName": "Crafted",
            "imbuePoints": 0,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }, {
                "index": 1,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }, {
                "index": 2,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }, {
                "index": 3,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }],
            "craftedInUse": false
        }, {
            "slot": "Left Hand",
            "crafted": true,
            "equipped": true,
            "level": 51,
            "itemName": "",
            "craftedItemName": "Crafted",
            "imbuePoints": 0,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }, {
                "index": 1,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }, {
                "index": 2,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }, {
                "index": 3,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }],
            "craftedInUse": false
        }, {
            "slot": "2 Handed",
            "crafted": false,
            "equipped": true,
            "level": 51,
            "itemName": "",
            "craftedItemName": "Crafted",
            "imbuePoints": 4,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "Skill",
                "effect": "All Magic Skills",
                "amount": 4,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 1,
                "type": "Stat",
                "effect": "Dexterity",
                "amount": 25,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 2,
                "type": "Cap Increase",
                "effect": "Dexterity",
                "amount": 10,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 3,
                "type": "Other Bonus",
                "effect": "Archery and Spell Damage",
                "amount": 4,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 4,
                "type": "Other Bonus",
                "effect": "Archery and Casting Speed",
                "amount": 4,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 5,
                "type": "Other Bonus",
                "effect": "Archery and Spell Range",
                "amount": 4,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 6,
                "type": "Other Bonus",
                "effect": "Duration of Spells",
                "amount": 5,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 7,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 8,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }, {
                "index": 9,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": null
            }],
            "craftedInUse": true
        }, {
            "slot": "Ranged",
            "crafted": true,
            "equipped": true,
            "level": 51,
            "itemName": "",
            "craftedItemName": "Crafted",
            "imbuePoints": 0,
            "imbueTotal": 32,
            "bonuses": [{
                "index": 0,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }, {
                "index": 1,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }, {
                "index": 2,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }, {
                "index": 3,
                "type": "",
                "effect": "",
                "amount": 0,
                "amountIndex": 0,
                "gem": ["", null, null]
            }],
            "craftedInUse": false
        }]

      });

    }
});