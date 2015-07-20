var acuityStats = ['Charisma', 'Empathy', 'Intelligence', 'Piety'];

Summary = ReactMeteor.createClass({

  templateName: 'Summary',

  mixins: [ReportMixin, React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      fromCeiling: 1
    }
  },

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

  render: function() {
    return (
      <div id="summary">
        <hr/>
        <label className="from-ceiling"><input type="checkbox" checkedLink={this.linkState('fromCeiling')} /> Distance from cap</label>
        <hr/>
        <div className="row">
          <div className="col-xs-6 stats">
            {BonusStat.map(function(effect, i){
              return acuityStats.indexOf(effect) < 0 ? (
                <div key={i}>
                  <label>{effect.substr(0,3)}: </label>
                  <span>{this.getCeilingDisplay('Stat', effect)}</span>
                  <span>({this.getCeilingDisplay('Cap Increase', effect)})</span>
                </div>
              ) : '';
            }.bind(this))}
          </div>
          <div className="col-xs-6 resists">
            {BonusResist.map(function(effect, i){
              return (
                <div key={i}>
                  <label>{effect}: </label>
                  <span>{this.getCeilingDisplay('Resist', effect)}</span>
                  <span>{GetRacialResist(this.state.character.realm, this.state.character.race, effect)}</span>
                </div>
              );
            }.bind(this))}
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 variant">
            {this.state.skills.map(function(effect, i){
              return this.state.totals['Skill ' + effect] ? (
                <div key={i}>
                  <label>{effect}: </label>
                  <span>{this.getCeilingDisplay('Skill', effect)}</span>
                </div>
              ) : '';
            }.bind(this))}
            <br/>
            {BonusOther.map(function(effect, i){
              return this.state.totals['Other Bonus ' + effect] ? (
                <div key={i}>
                  <label>{effect}: </label>
                  <span>{this.getCeilingDisplay('Other Bonus', effect)}</span>
                </div>
              ) : '';
            }.bind(this))}
          </div>
        </div>
      </div>
    );
  },

  getCeilingDisplay: function(type, effect) {
    var amount = this.state.totals[type + ' ' + effect] || 0;
    var ceil = this.getCeiling(this.state.character.level, this.state.totals, type, effect);
    return this.state.fromCeiling ? ceil - amount : amount;
  }

});