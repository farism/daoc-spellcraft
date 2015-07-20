Bonus = ReactMeteor.createClass({

  templateName: 'Bonus',

  render: function() {
    var realm = this.props.character.realm;
    var clss = this.props.character.class;
    var slot = this.props.slot;
    var bonus = slot.bonuses[this.props.index];
    var effects = bonus.type == 'Skill' ? GetSkillEffects(realm, clss) : BonusEffectsMap[bonus.type] || [];
    var amounts = GetAmounts(this.props.type, this.props.effect);
    var amount = amounts[bonus.amountIndex - 1] || '';

    return (
      <div className={classNames({ row: 1, bonus: 1, error: this.props.error })}>

        <div className="col-xs-3">
          <select name="type" value={bonus.type} onChange={this.onChangeType}>
            <option value="">-type-</option>
            {BonusTypes.map(function(type, i) {
              return <option value={type} key={i}>{type}</option>;
            }.bind(this))}
          </select>
        </div>

        <div className="col-xs-3">
          <select name="effect" value={bonus.effect} onChange={this.onChangeEffect}>
            <option value="">-effect-</option>
            {effects.map(function(effect, i) {
              return !(slot.crafted && effect == 'Acuity') ? <option value={effect} key={i}>{effect}</option> : '';
            }.bind(this))}
          </select>
        </div>

        <div className="col-xs-2">
          {slot.crafted ? (
            <select name="amount" value={amount} onChange={this.onChangeAmount}>
              <option value="">-value-</option>
              {amounts.map(function(value, i) {
                return <option value={value} key={i}>{value}</option>
              }.bind(this))}
            </select>
          ) : (
            <input type="number" name="amount" min="0" maxLength="2" value={bonus.amount} onChange={this.onChangeAmount} />
          )}
        </div>

        <div className="col-xs-4 imbue">
          {!slot.crafted ? '' : (
            <span>{bonus.imbue.toFixed(1)}</span>
          )}

          {GetGemName(bonus.type, bonus.effect, bonus.amountIndex)}
        </div>
      </div>
    );
  },

  update: function() {

  },

  onChangeType: function(e){
    var state = { type: $(e.target).val(), effect: '', amount: '', amountIndex: 0, imbue: 0 };
    // Bonuses.update({ _id: this.props._id }, { $set: state });
  },

  onChangeEffect: function(e){
    var effect = $(e.target).val();
    if(effect){
      var state = { effect: effect };
    } else {
      var state = { effect: effect, amount: '', amountIndex: 0, imbue: 0 };
    }
    // Bonuses.update({ _id: this.props._id }, { $set: state });
  },

  onChangeAmount: function(e){
    /*Bonuses.update({ _id: this.props._id }, { $set: {
      amount: (parseInt($(e.target).val(), 10) || 0),
      amountIndex: ($(e.target).prop('selectedIndex') || 0)
    }});*/
  }

});