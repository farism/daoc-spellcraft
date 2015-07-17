ReportMixin = {

  getEffectTotals: function(type, effects, bonuses){
    var state = {};

    effects.map(function(effect){
      var amount = bonuses.filter(function(bonus){
        return bonus.type == type && bonus.effect == effect;
      }).map(function(bonus){
        return parseInt(bonus.amount, 10) || 0;
      }).reduce(function(prev, cur){
        return prev + cur;
      }, 0);

      state[type + '|' + effect] = amount;
    });

    return state;
  },

  getAmountAndCeiling: function(type, effect){
    var lvl = this.state.level;
    var amount = this.state[type + '|' + effect];
    var ceiling = this.calculateCap(type + '|' + effect, lvl) || this.calculateCap(effect, lvl) || this.calculateCap(type, lvl);

    if(type == 'Stat'){
      var capCeiling = this.calculateCap('Cap Increase|' + effect, lvl);
      ceiling += Math.min(capCeiling, this.state['Cap Increase|' + effect]);
    }

    return [amount, ceiling];
  },

  calculateCap: function(type, level){
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
      'Stat Buff Effectiveness': Math.floor(level / 2),
      'Stat Debuff Effectiveness': Math.floor(level / 2),
      'Healing Effectiveness': Math.floor(level / 2),
      'Duration of Spells': Math.floor(level / 2),
      '% Power Pool': Math.floor(level / 2),
      'Fatigue': Math.floor(level / 2),
      'AF': level,
      'Cap Increase|Strength': Math.floor(level / 2 + 1),
      'Cap Increase|Constitution': Math.floor(level / 2 + 1),
      'Cap Increase|Dexterity': Math.floor(level / 2 + 1),
      'Cap Increase|Quickness': Math.floor(level / 2 + 1),
      'Cap Increase|Intelligence': Math.floor(level / 2 + 1),
      'Cap Increase|Piety': Math.floor(level / 2 + 1),
      'Cap Increase|Empathy': Math.floor(level / 2 + 1),
      'Cap Increase|Acuity': Math.floor(level / 2 + 1),
      'Cap Increase|Hits': level * 4,
      'Cap Increase|Power Pool %': level,
      'Cap Increase|% Power Pool': Math.floor(level / 2),
      'Cap Increase|Fatigue': Math.floor(level / 2)
    }[type] || 0;
  }

};