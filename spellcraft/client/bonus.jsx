Bonus = ReactMeteor.createClass({

  templateName: 'Bonus',

  getInitialState: function() {
    return Bonuses.findOne({ _id: this.props._id });
  },

  getMeteorState: function() {
    return {
      character: Session.get('character')
    };
  },

  componentDidUpdate: function(prevState) {
    Bonuses.update({ _id: this.state._id }, { $set: _.omit(this.state, '_id') });
  },

  render: function() {
    var realm = this.state.character.realm;
    var clss = this.state.character.class;
    var effects = this.state.type == 'Skill' ? GetSkillEffects(realm, clss) : BonusEffectsMap[this.state.type] || [];
    var amounts = GetAmounts(this.state.type, this.state.effect);
    var amount = amounts[this.state.amountIndex - 1] || '';

    return (
      <div className={classNames({ row: 1, bonus: 1, error: this.props.error })}>

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
            <span>{this.props.imbueAdjusted.toFixed(1)}</span>
          )}

          {GetGemName(this.state.type, this.state.effect, this.state.amountIndex)}
        </div>
      </div>
    );
  },

  onChangeType: function(e){
    var state = { type: $(e.target).val(), effect: '', amount: '', amountIndex: 0, imbue: 0 };
    this.setState(state);
  },

  onChangeEffect: function(e){
    var effect = $(e.target).val();
    if(effect){
      var state = { effect: effect };
    } else {
      var state = { effect: effect, amount: '', amountIndex: 0, imbue: 0 };
    }
    this.setState(state);
  },

  onChangeAmount: function(e){
    var amount = parseInt($(e.target).val(), 10) || 0;
    var amountIndex = $(e.target).prop('selectedIndex');
    var imbue = CalculateBonusImbue(this.state.type, this.state.effect, amount, amountIndex) / 2;
    this.setState({ amount: amount, amountIndex: amountIndex, imbue: imbue  });
  }

});