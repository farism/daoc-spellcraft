Bonus = ReactMeteor.createClass({

  templateName: 'Bonus',

  getInitialState: function() {
    return Bonuses.findOne({ _id: this.props._id });
  },

  getMeteorState: function() {
    var state = Bonuses.findOne({ _id: this.props._id });
    state.template = Session.get('template');
    return state;
  },

  render: function() {
    var realm = this.state.template.realm;
    var clss = this.state.template.class;
    var newstats = this.state.template.newstats;
    var effects = this.state.type == 'Skill' ? GetSkillEffects(realm, clss) : BonusEffectsMap[this.state.type] || [];
    var amounts = GetAmounts(this.state.type, this.state.effect, newstats);
    var amount = amounts[this.state.amountIndex - 1] || '';

    return (
      <div className="row bonus">

        <div className="col-xs-3">
          <select name="type" value={this.state.type} onChange={this.onChangeType}>
            <option value="">-type-</option>
            {BonusTypes.map(function(type, i) {
              return <option value={type} key={i}>{type}</option>;
            }.bind(this))}
          </select>
        </div>

        <div className="col-xs-3">
          <select name="effect" value={this.state.effect} onChange={this.onChangeEffect}>
            <option value="">-effect-</option>
            {effects.map(function(effect, i) {
              return !(this.props.crafted && effect == 'Acuity') ? <option value={effect} key={i}>{effect}</option> : '';
            }.bind(this))}
          </select>
        </div>

        <div className="col-xs-2">
          {this.props.crafted ? (
            <select name="amount" value={amount} onChange={this.onChangeAmount}>
              <option value="">-value-</option>
              {amounts.map(function(value, i) {
                return <option value={value} key={i}>{value}</option>
              }.bind(this))}
            </select>
          ) : (
            <input type="number" name="amount" min="0" maxLength="2" value={this.state.amount} onChange={this.onChangeAmount} />
          )}
        </div>

        <div className="col-xs-4 imbue">
          {!this.props.crafted ? '' : (
            <span>{(this.props.imbueAdjusted / 2).toFixed(1)}</span>
          )}

          {GetGemName(this.state.type, this.state.effect, this.state.amountIndex)}
        </div>
      </div>
    );
  },

  onChangeType: function(e){
    var state = { type: $(e.target).val(), effect: '', amount: '', amountIndex: 0, imbue: 0 };
    Bonuses.update({ _id: this.props._id }, { $set: state });
  },

  onChangeEffect: function(e){
    var effect = $(e.target).val();
    if(effect){
      var state = { effect: effect };
    } else {
      var state = { effect: effect, amount: '', amountIndex: 0, imbue: 0 };
    }
    Bonuses.update({ _id: this.props._id }, { $set: state });
  },

  onChangeAmount: function(e){
    var amount = parseInt($(e.target).val(), 10) || 0;
    var amountIndex = $(e.target).prop('selectedIndex');
    var imbue = CalculateBonusImbue(this.state.type, this.state.effect, amount, this.state.template.newstats);
    var state = { amount: amount, amountIndex: amountIndex, imbue: imbue  };
    Bonuses.update({ _id: this.props._id }, { $set: state });
  }

});