EnhancedBonus = ReactMeteor.createClass({

  templateName: 'EnhancedBonus',

  getMeteorState: function() {
    return Bonuses.findOne({ slot: this.props.slot.id, index: this.props.index });;
  },

  render: function() {
    return (
      <div className="row bonus enhanced">
        <div className="col-xs-3">
          <select name="type">
            <option>{this.state.type}</option>
          </select>
        </div>
        <div className="col-xs-3">
          <select name="effect">
            <option>{this.state.effect}</option>
          </select>
        </div>
        <div className="col-xs-2">
          <select name="type">
            <option>{this.state.amount}</option>
          </select>
        </div>
      </div>
    );
  }
  
});