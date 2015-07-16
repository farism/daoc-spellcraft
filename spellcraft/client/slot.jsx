Slot = ReactMeteor.createClass({

  templateName: 'Slot',

  mixins: [React.addons.LinkedStateMixin],

  getMeteorState: function() {
    var state = Slots.findOne({ id: this.props.id });

    state.imbueArr = Bonuses.find({ slot: this.props.id }).fetch().map(function(bonus){
      return CalculateBonusImbue(bonus.type, bonus.effect, bonus.amount) / 2;
    });

    var max = _.max(state.imbueArr);
    state.imbueArr[state.imbueArr.indexOf(max)] = max * 2;

    state.imbuePoints = state.imbueArr.reduce(function(prev, cur){
      return prev + cur;
    });

    return state;
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
          <span>{this.state.imbuePoints.toFixed(1)} / {GetImbueCeiling(this.state.level).toFixed(1)}</span>
        )}

        {_.range(0, this.state.crafted ? 4 : 10).map(function(val, i){
          return <Bonus ref={'bonus' + i} slot={this.state} index={i} imbue={this.state.imbueArr[i]} key={i} />;
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