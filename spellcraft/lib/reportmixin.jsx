ReportMixin = {

  getMeteorState: function() {
    var state = {};
    var totals = {};
    var character = Session.get('character');
    var castStat = GetCastStatByClass(character.realm, character.class);
    var skills = GetSkillsByClass(character.realm, character.class);
    var bonuses = Bonuses.find({ amount: { $gt: 0 } }).map(function(bonus){
      var key = bonus.type + ' ' + bonus.effect;
      if(castStat && castStat == bonus.effect && acuityStats.indexOf(bonus.effect) >= 0){
        key = bonus.type + ' Acuity';
      }
      totals[key] ? totals[key] += bonus.amount : totals[key] = bonus.amount;
    });

    return { character: character, totals: totals, skills: skills };
  },

  getCeiling: function(type, effect){
    var level = this.state.level || 50;
    var totals = this.state.totals || {};
    var ceiling = this.calculateCap(type + ' ' + effect, level) || this.calculateCap(effect, level) || this.calculateCap(type, level);

    if(type == 'Stat'){
      var capCeiling = this.calculateCap('Cap Increase ' + effect, level);
      ceiling += Math.min(capCeiling, totals['Cap Increase ' + effect] || 0);
    }

    return ceiling;
  },

  calculateCap: function(key, level){
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
      'Stat Power': Math.floor(level / 2),
      'Cap Increase Strength': Math.floor(level / 2 + 1),
      'Cap Increase Constitution': Math.floor(level / 2 + 1),
      'Cap Increase Dexterity': Math.floor(level / 2 + 1),
      'Cap Increase Quickness': Math.floor(level / 2 + 1),
      'Cap Increase Intelligence': Math.floor(level / 2 + 1),
      'Cap Increase Piety': Math.floor(level / 2 + 1),
      'Cap Increase Empathy': Math.floor(level / 2 + 1),
      'Cap Increase Acuity': Math.floor(level / 2 + 1),
      'Cap Increase Hits': level * 4,
      'Cap Increase Power Pool %': level,
      'Cap Increase % Power Pool': Math.floor(level / 2),
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
      'Other Bonus Power Pool %': Math.floor(level / 2),
      'Other Bonus Stat Buff Effectiveness': Math.floor(level / 2),
      'Other Bonus Stat Debuff Effectiveness': Math.floor(level / 2),
      'Other Bonus Healing Effectiveness': Math.floor(level / 2),
      'Other Bonus Duration of Spells': Math.floor(level / 2),
      'Other Bonus % Power Pool': Math.floor(level / 2),
      'Other Bonus Fatigue': Math.floor(level / 2),
      'Other Bonus AF': level
    }[key] || 0;
  }

};