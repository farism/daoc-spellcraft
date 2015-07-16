Summary = ReactMeteor.createClass({

  templateName: 'Summary',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      fromCeiling: 1
    }
  },

  getMeteorState: function() {
    var state = Session.get('meta');
    var bonuses = Bonuses.find().fetch();
    var stats = this.getBonusTotal('Stat', BonusStat, bonuses);
    var statcaps = this.getBonusTotal('Cap Increase', BonusStatCap, bonuses);
    var resists = this.getBonusTotal('Resist', BonusResist, bonuses);
    var other = this.getBonusTotal('Other Bonus', BonusOther, bonuses);
    return _.extend(state, stats, statcaps, resists, other);
  },

  render: function() {
    var castStats = ['Charisma', 'Empathy', 'Intelligence', 'Piety']
    var castStat = GetCastStatByClass(this.state.realm, this.state.class);

    return (
      <div className="summary">

        <label><input type="checkbox" checkedLink={this.linkState('fromCeiling')} /> Distance from cap</label>

        <table>
          <tr>
            <td>
              {BonusStat.map(function(effect, i){
                return (effect != 'Acuity' && (castStats.indexOf(effect) < 0 || castStat == effect)) ? (
                  <div key={i}>
                    <label>{effect.substr(0,3)}: </label>
                    <span>{this.getBonusDisplay('Stat', effect)}</span>
                    <span>({this.getBonusDisplay('Cap Increase', effect)})</span>
                  </div>
                ) : '';
              }.bind(this))}
            </td>
            <td>
              {BonusResist.map(function(effect, i){
                return (
                  <div key={i}>
                    <label>{effect}: </label>
                    <span>{this.getBonusDisplay('Resist', effect)}</span>
                    <span>{GetRacialResist(this.state.realm, this.state.race, effect)}</span>
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

  getBonusTotal: function(type, list, bonuses){
    var state = {};

    list.map(function(effect){
      var amount = bonuses.filter(function(bonus){
        return bonus.type == type && bonus.effect == effect;
      }).map(function(bonus){
        return parseInt(bonus.amount, 10) || 0;
      }).reduce(function(prev, cur){
        return prev + cur;
      }, 0);

      state[effect + ' ' + type] = amount;
    });

    return state;
  },

  getBonusDisplay: function(type, effect){
    var lvl = Session.get('meta').level;
    var amount = this.state[effect + ' ' + type];
    var ceiling = CalculateCap(effect + ' ' + type, lvl) || CalculateCap(effect, lvl) || CalculateCap(type, lvl);

    if(type == 'Stat'){
      var capCeiling = CalculateCap(effect + ' Cap Increase', lvl);
      ceiling += Math.min(capCeiling, this.state[effect + ' Cap Increase']);
    }

    return this.state.fromCeiling ? ceiling - amount : amount;
  }

});