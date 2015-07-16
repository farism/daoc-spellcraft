Slot = ReactMeteor.createClass({

  templateName: 'Slot',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      totalImbue: 0
    };
  },

  getMeteorState: function() {
    var slot = Slots.findOne({ id: this.props.id });
    slot.bonuses = Bonuses.find({ slot: this.props.id }).fetch();
    return slot;
  },

  componentDidUpdate: function(prevProps, prevState) {
    Slots.update({ id: this.props.id }, { $set: _.omit(this.state, '_id') });
    if(prevState.crafted != this.state.crafted){
      for(var ref in this.refs){
        this.refs[ref].setState({ type: '', effect: '', amount: 0, imbue: 0 });
      }
    }
  },

  render: function(){
    return (
      <div className="slot">

        {this.props.id < 9 ? '' : (
          <label><input type="checkbox" name="crafted" checkedLink={this.linkState('crafted')} />Crafted</label>
        )}

        {this.state.crafted ? '' : (
          <input type="text" valueLink={this.linkState('itemName')} />
        )}

        {!this.state.crafted ? '' : (
          <input type="number" min="1" max="51" maxLength="2" valueLink={this.linkState('level')} />
        )}

        {!this.state.crafted ? '' : (
          <span>{this.state.totalImbue} / {GetImbueCeiling(this.state.level)}</span>
        )}

        {_.range(0, this.state.crafted ? 4 : 10).map(function(val, i){
          return <Bonus ref={'bonus' + i} slot={this.state} index={i} key={i} />;
        }.bind(this))}

        {!this.state.crafted || this.state.hasFifthSlot ? '' : (
          <button onClick={this.selectFifthSlot}>Enhanced Bonus</button>
        )}

      </div>
    );
  },

  selectFifthSlot: function(e) {

  }

});