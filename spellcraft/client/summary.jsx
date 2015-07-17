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
    var slots = _.pluck(Slots.find({ equipped: true }).fetch(), 'id');
    var bonuses = Bonuses.find({ slot: { $in: slots } }).fetch();
    var stats = this.getEffectTotals('Stat', BonusStat, bonuses);
    var statcaps = this.getEffectTotals('Cap Increase', BonusStatCap, bonuses);
    var resists = this.getEffectTotals('Resist', BonusResist, bonuses);
    var other = this.getEffectTotals('Other Bonus', BonusOther, bonuses);
    return _.extend(state, stats, statcaps, resists, other);
  },

  render: function() {
    var realm = this.state.realm;
    var race = this.state.race;
    var clss = this.state.class;
    var castStats = ['Charisma', 'Empathy', 'Intelligence', 'Piety'];
    var castStat = GetCastStatByClass(realm, clss);

    return (
      <div className="summary">

        <label><input type="checkbox" checkedLink={this.linkState('fromCeiling')} /> Distance from cap</label>

        <table>
          <tr>
            <td className="stats">
              {BonusStat.map(function(effect, i){
                return (effect != 'Acuity' && (castStats.indexOf(effect) < 0 || castStat == effect)) ? (
                  <div key={i}>
                    <label>{effect.substr(0,3)}: </label>
                    <span>{this.getCeilingDisplay('Stat', effect)}</span>
                    <span>({this.getCeilingDisplay('Cap Increase', effect)})</span>
                  </div>
                ) : '';
              }.bind(this))}
            </td>
            <td className="resists">
              {BonusResist.map(function(effect, i){
                return (
                  <div key={i}>
                    <label>{effect}: </label>
                    <span>{this.getCeilingDisplay('Resist', effect)}</span>
                    <span>{GetRacialResist(realm, race, effect)}</span>
                  </div>
                );
              }.bind(this))}
            </td>
          </tr>
        </table>

        {BonusOther.map(function(effect, i){
          return !this.state[effect] ? '' : (
            <div key={i}>
              <label>{effect}: </label>
              <span>{this.state[effect]}{effect != 'AF' && effect != 'Fatigue' ? '%' : ''}</span>
            </div>
          );
        }.bind(this))}

      </div>
    );
  },

  getCeilingDisplay: function(type, effect) {
    var amtAndCeil = this.getAmountAndCeiling(type, effect);
    return this.state.fromCeiling ? amtAndCeil[1] - amtAndCeil[0] : amtAndCeil[0];
  }

});