EnhancedBonus = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return Bonuses.findOne({ _id: this.props._id });
  },

  render: function() {
    return (
      <div className="row bonus enhanced" style={{ display: this.data.amount ? 'block' : 'none' }}>
        <div className="col-xs-3">
          <select name="type">
            <option>{this.data.type}</option>
          </select>
        </div>
        <div className="col-xs-3">
          <select name="effect">
            <option>{this.data.effect}</option>
          </select>
        </div>
        <div className="col-xs-2">
          <select name="type">
            <option>{this.data.amount}</option>
          </select>
        </div>
      </div>
    );
  }

});