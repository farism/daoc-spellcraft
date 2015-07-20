EnhancedBonus = ReactMeteor.createClass({

  templateName: 'EnhancedBonus',

  getInitialState: function() {
    return Bonuses.findOne({ _id: this.props._id });
  },

  componentDidUpdate: function(prevState) {
    Bonuses.update({ _id:this.props._id }, { $set: _.omit(this.state, '_id') });
  },

  render: function() {
    return (
      <div className="row bonus enhanced" style={{ display: this.state.amount ? 'block' : 'none' }}>
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