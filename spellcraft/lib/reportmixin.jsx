ReportMixin = {

  mixins: [ReactMeteorData],

  getMeteorData: function() {
    var state = {};
    var totals = {};
    var template = this.props.template || Session.get('template');
    var castStat = GetCastStatByClass(template.realm, template.class);
    var skills = GetSkillsByClass(template.realm, template.class);
    var bonuses = Bonuses.find({ amount: { $gt: 0 } }).map(function(bonus){
      var key = bonus.type + ' ' + bonus.effect;
      if(castStat && castStat == bonus.effect && AcuityStats.indexOf(bonus.effect) >= 0){
        key = bonus.type + ' Acuity';
      }
      totals[key] ? totals[key] += bonus.amount : totals[key] = bonus.amount;
    });

    return { template: template, totals: totals, skills: skills };
  },

  getCeiling: function(type, effect){
    var level = this.state.template.level || 50;
    var totals = this.state.totals || {};
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
  },

};