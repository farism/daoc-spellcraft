Slot = ReactMeteor.createClass({

  templateName: 'Slot',

  getMeteorState: function(){
    return {
      crafted: 0
    }
  },

  render: function(){
    return (
      <div className="slot">
        <label><input type="radio" name="crafted" value="1" onChange={this.onChange} />Crafted</label>
        <label><input type="radio" name="crafted" value="0" onChange={this.onChange} />Dropped</label>
        {_.range(0,10).map(function(val, i){
          return <Bonus key={i} template={this.state} />;
        }.bind(this))}
      </div>
    );
  },

  onChange: function(e){
    var state = this.state;
    state[$(e.target).attr('name')] = $(e.target).val();
    this.replaceState(state);
  }

});