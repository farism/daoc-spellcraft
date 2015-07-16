Bonus = ReactMeteor.createClass({

  templateName: 'Bonus',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      imbue: 0
    };
  },

  getMeteorState: function() {
    return Bonuses.findOne({ slot: this.props.slot.id, index: this.props.index });
  },

  componentDidUpdate: function(prevProps, prevState) {
    Bonuses.update({ slot: this.props.slot.id, index: this.props.index }, { $set: _.omit(this.state, '_id') });
  },

  render: function() {
    return (
      <div className="bonus">

        <select name="type" value={this.state.type} onChange={this.onChangeType}>
          <option>-type-</option>
          {(this.props.slot.crafted ? CraftedBonusTypes : BonusTypes).map(function(type, i) {
            return <option value={type} key={i}>{type}</option>;
          }.bind(this))}
        </select>

        <select name="effect" value={this.state.effect} onChange={this.onChangeEffect}>
          <option>-effect-</option>
          {(BonusEffectsMap[this.state.type] || []).map(function(effect, i) {
            return <option value={effect} key={i}>{effect}</option>;
          }.bind(this))}
        </select>

        {this.props.slot.crafted ? (
          <select name="amount" value={this.state.amount} onChange={this.onChangeAmount}>
            <option>-value-</option>
            {(CraftedBonusTypeValues[this.state.type] || []).map(function(value, i) {
              return <option value={value} key={i}>{value}</option>
            }.bind(this))}
          </select>
        ) : (
          <input name="amount" value={this.state.amount} onChange={this.onChangeAmount} />
        )}

        {!this.props.slot.crafted ? '' : (
          <span>{this.props.imbue}</span>
        )}
      </div>
    );
  },

  onChangeType: function(e){
    this.setState({ type: $(e.target).val(), effect: '', amount: '', imbue: 0 });
  },

  onChangeEffect: function(e){
    this.setState({ effect: $(e.target).val() });
  },

  onChangeAmount: function(e){
    var amount = parseInt($(e.target).val()) || 0;
    var imbue = CalculateBonusImbue(this.state.type, this.state.effect, amount);
    this.setState({ amount: amount, imbue: imbue });
  }

});