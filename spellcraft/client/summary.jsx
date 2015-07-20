Summary = ReactMeteor.createClass({

  templateName: 'Summary',

  mixins: [ReportMixin, React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      fromCeiling: 1
    }
  },

  getMeteorState: function() {
    var state = Session.get('meta');
    state.slots = Slots.find({ equipped: true }).fetch().map(function(slot) {
      slot.bonuses = Bonuses.find({ slot: slot.id, amount: { $gt: 0 } }).fetch();
      return slot;
    });
    state.skills = GetSkillsByClass(state.realm, state.class);
    var bonuses = _.flatten(_.pluck(state.slots, 'bonuses'));
    _.extend(
      state,
      this.getEffectTotals('Stat', BonusStat, bonuses),
      this.getEffectTotals('Skill', state.skills, bonuses),
      this.getEffectTotals('Cap Increase', BonusStatCap, bonuses),
      this.getEffectTotals('Resist', BonusResist, bonuses),
      this.getEffectTotals('Other Bonus', BonusOther, bonuses)
    );
    return state;
  },

  render: function() {
    var realm = this.state.realm;
    var race = this.state.race;
    var clss = this.state.class;
    var castStats = ['Charisma', 'Empathy', 'Intelligence', 'Piety'];
    var castStat = GetCastStatByClass(realm, clss);

    return (
      <div id="summary">
        <hr/>
        <label className="from-ceiling"><input type="checkbox" checkedLink={this.linkState('fromCeiling')} /> Distance from cap</label>
        <hr/>
        <div className="row">
          <div className="col-xs-6 stats">
            {BonusStat.map(function(effect, i){
              return (effect != 'Acuity' && (castStats.indexOf(effect) < 0 || castStat == effect)) ? (
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
                  <span>{GetRacialResist(realm, race, effect)}</span>
                </div>
              );
            }.bind(this))}
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-xs-12 variant">
            {this.state.skills.map(function(effect, i){
              return this.state['Skill|' + effect] ? (
                <div key={i}>
                  <label>{effect}: </label>
                  <span>{this.getCeilingDisplay('Skill', effect)}</span>
                </div>
              ) : '';
            }.bind(this))}
            <br/>
            {BonusOther.map(function(effect, i){
              return this.state['Other Bonus|' + effect] ? (
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
    var amtAndCeil = this.getAmountAndCeiling(type, effect);
    return this.state.fromCeiling ? amtAndCeil[1] - amtAndCeil[0] : amtAndCeil[0];
  }

});