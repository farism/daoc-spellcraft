EnhancedBonus = ReactMeteor.createClass({

  templateName: 'EnhancedBonus',

  getMeteorState: function() {
    return Bonuses.findOne({ slot: this.props.slot.id, index: this.props.index });;
  },

  render: function() {
    return (
      <div className="bonus enhanced">
        <select name="type">
          <option>{this.state.type}</option>
        </select>
        <select name="effect">
          <option>{this.state.effect}</option>
        </select>
        <select name="type">
          <option>{this.state.amount}</option>
        </select>
      </div>
    );
  }
  
});