Bonus = ReactMeteor.createClass({

  templateName: 'Bonus',

  mixins: [React.addons.LinkedStateMixin],

  getMeteorState: function(){
    var slots = Session.get('slots') || [];
    var slot = slots[this.props.slot] || [];
    var bonus = slot[this.props.index] || { type: '', effect: '', value: '' };
    return bonus;
  },

  getDefaultProps: function(){
    return { crafted: 0 }
  },

  render: function() {
    return (
      <div className="bonus">
        {this.typeSelect()}
        {this.effectSelect()}
        {this.valueSelect()}
      </div>
    );
  },

  typeSelect: function() {
    return (
      <select name="type" value={this.state.type} onChange={this.onChange}>
        <option>-type-</option>
        {BonusTypes.map(function(type, i) {
          return <option value={type} key={i}>{type}</option>;
        }.bind(this))}
      </select>
    );
  },

  effectSelect: function() {
    return (
      <select name="effect" value={this.state.effect} onChange={this.onChange}>
        <option>-effect-</option>
        {(BonusEffectsMap[this.state.type] || []).map(function(effect, i) {
          return <option value={effect} key={i}>{effect}</option>;
        }.bind(this))}
      </select>
    );
  },

  valueSelect: function() {
    return this.props.crafted ? (
      <select name="value" value={this.state.value} onChange={this.onChange}>
        <option>-value-</option>
        {(CraftedBonusTypeValues.map[this.state.type] || []).map(function(value, i) {
          return <option value={value} key={i}>{value}</option>
        }.bind(this))}
      </select>
    ) : (
      <input name="value" onChange={this.onChange} />
    );
  },

  onChange: function(e) {
    var state = this.state;
    state[$(e.target).attr('name')] = $(e.target).val();
    this.setState(state);
  }

});