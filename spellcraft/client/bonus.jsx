Bonus = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      bonus: Bonuses.findOne({ _id: this.props._id })
    }
  },

  render: function() {
    var realm = this.props.meta.realm;
    var clss = this.props.meta.class;
    var race = this.props.meta.race;
    var newstats = this.props.meta.newstats;
    var type = this.data.bonus.type;
    var effects = type == 'Skill' ? GetSkillEffects(realm, clss) : BonusEffectsMap[type] || [];
    var effect = this.data.bonus.effect;
    var amounts = GetAmounts(type, effect, newstats);
    var amount = this.data.bonus.amount;
    var amountIndex = this.data.bonus.amountIndex;
    var amountCrafted = amounts[amountIndex - 1] || '';

    return (
      <div className="row bonus">

        <div className="col-xs-3">
          <select name="type" value={type} onChange={this.onChangeType}>
            <option value="">-type-</option>
            {BonusTypes.map(function(type, i) {
              return <option value={type} key={i}>{type}</option>;
            }.bind(this))}
          </select>
        </div>

        <div className="col-xs-3">
          <select name="effect" value={effect} onChange={this.onChangeEffect}>
            <option value="">-effect-</option>
            {effects.map(function(effect, i) {
              return !(this.props.slot.crafted && effect == 'Acuity') ? <option value={effect} key={i}>{effect}</option> : '';
            }.bind(this))}
          </select>
        </div>

        <div className="col-xs-2">
          {this.props.slot.crafted ? (
            <select name="amount" value={amountCrafted} onChange={this.onChangeAmount}>
              <option value="">-value-</option>
              {amounts.map(function(value, i) {
                return <option value={value} key={i}>{value}</option>
              }.bind(this))}
            </select>
          ) : (
            <input type="number" name="amount" min="0" maxLength="2" value={amount} onChange={this.onChangeAmount} />
          )}
        </div>

        <div className="col-xs-4 imbue">
          {!this.props.slot.crafted ? '' : (
            <span>{(this.props.imbue / 2).toFixed(1)}</span>
          )}

          {GetGemName(type, effect, amountIndex)}
        </div>
      </div>
    );
  },

  onChangeType: function(e){
    var state = { type: e.target.value, effect: '', amount: '', amountIndex: 0, imbue: 0 };
    Bonuses.update({ _id: this.props._id }, { $set: state });
  },

  onChangeEffect: function(e){
    var effect = e.target.value
    if(effect){
      var state = { effect: effect };
    } else {
      var state = { effect: effect, amount: 0, amountIndex: 0, imbue: 0 };
    }
    Bonuses.update({ _id: this.props._id }, { $set: state });
  },

  onChangeAmount: function(e){
    var amount = parseInt(e.target.value, 10) || 0;
    var amountIndex = e.target.selectedIndex;
    var imbue = CalculateBonusImbue(this.data.bonus.type, this.data.bonus.effect, amount, this.props.meta.newstats);
    var state = { amount: amount, amountIndex: amountIndex, imbue: imbue  };
    Bonuses.update({ _id: this.props._id }, { $set: state });
  }

});