Bonus = ReactMeteor.createClass({

  templateName: 'Bonus',

  mixins: [React.addons.LinkedStateMixin],

  getDefaultProps: function() {
    return {
      imbue: 0
    }
  },

  getInitialState: function() {
    return {
      imbue: 0,
      error: false
    };
  },

  getMeteorState: function() {
    var state = Bonuses.findOne({ slot: this.props.slot.id, index: this.props.index });
    state.error = false;

    if(this.state.type && this.state.effect){
      state.error = Bonuses.find({ slot: this.props.slot.id, type: this.state.type, effect: this.state.effect }).count() > 1;
    }

    return state;
  },

  componentDidUpdate: function(prevProps, prevState) {
    Bonuses.update({ slot: this.props.slot.id, index: this.props.index }, { $set: _.omit(this.state, '_id') });
  },

  render: function() {
    var realm = Session.get('meta').realm;
    var clss = Session.get('meta').class;
    var effects = this.state.type == 'Skill' ? GetSkillEffects(realm, clss) : BonusEffectsMap[this.state.type] || [];
    var amounts = GetAmounts(this.state.type, this.state.effect);
    var amount = amounts[this.state.amountIndex - 1] || '';

      return (
      <div className={classNames({ bonus: 1, error: this.state.error })}>

        <select name="type" value={this.state.type} onChange={this.onChangeType}>
          <option value="">-type-</option>
          {BonusTypes.map(function(type, i) {
            return <option value={type} key={i}>{type}</option>;
          }.bind(this))}
        </select>

        <select name="effect" value={this.state.effect} onChange={this.onChangeEffect}>
          <option value="">-effect-</option>
          {effects.map(function(effect, i) {
            return !(this.props.slot.crafted && effect == 'Acuity') ? <option value={effect} key={i}>{effect}</option> : '';
          }.bind(this))}
        </select>

        {this.props.slot.crafted ? (
          <select name="amount" value={amount} onChange={this.onChangeAmount}>
            <option value="">-value-</option>
            {amounts.map(function(value, i) {
              return <option value={value} key={i}>{value}</option>
            }.bind(this))}
          </select>
        ) : (
          <input type="text" name="amount" maxLength="2" value={this.state.amount} onChange={this.onChangeAmount} />
        )}

        {!this.props.slot.crafted ? '' : (
          <span className="imbue">{this.props.imbue.toFixed(1)}</span>
        )}

        {GetGemName(this.state.type, this.state.effect, this.state.amountIndex)}
      </div>
    );
  },

  onChangeType: function(e){
    this.setState({ type: $(e.target).val(), effect: '', amount: '', amountIndex: 0, imbue: 0 });
  },

  onChangeEffect: function(e){
    var effect = $(e.target).val();
    this.setState({ effect: effect });
    if(!effect){
      this.setState({ amount: '', amountIndex: 0, imbue: 0 });
    }
  },

  onChangeAmount: function(e){
    this.setState({ amount: parseInt($(e.target).val(), 10), amountIndex: $(e.target).prop('selectedIndex') });
  }

});