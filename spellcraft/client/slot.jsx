Slot = ReactMeteor.createClass({

  templateName: 'Slot',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      query: [],
      enhanced: false
    }
  },

  getMeteorState: function() {
    var state = Slots.findOne({ id: this.props.id });

    state.imbueArr = Bonuses.find({ slot: this.props.id }).fetch().slice(0, 4).map(function(bonus){
      return CalculateBonusImbue(bonus.type, bonus.effect, bonus.amount) / 2;
    });

    var max = _.max(state.imbueArr);
    state.imbueArr[state.imbueArr.indexOf(max)] = max * 2;

    state.imbuePoints = state.imbueArr.reduce(function(prev, cur){
      return prev + cur;
    }, 0);

    return state;
  },

  componentDidMount: function(){
    $(React.findDOMNode(this.refs.search)).select2({ query: this.query, format:this.format });
  },

  componentDidUpdate: function(prevProps, prevState) {
    Slots.update({ id: this.props.id }, { $set: _.omit(this.state, '_id') });

    if(prevState.crafted != this.state.crafted){
      for(var ref in this.refs){
        this.refs[ref].setState({ type: '', effect: '', amount: 0, imbue: 0 });
      }
    }
  },

  render: function() {
    return (
      <div className="slot">

        {this.props.id < 9 ? '' : (
          <label><input type="checkbox" name="crafted" checkedLink={this.linkState('crafted')} />Crafted</label>
        )}

        {this.props.id < 15 ? '' : (
          <label><input type="checkbox" name="equiped" checkedLink={this.linkState('equipped')} />Equipped</label>
        )}

        <br />

        {this.state.crafted ? '' : (
          <input ref="search" type="text" />
        )}

        {!this.state.crafted ? '' : (
          <input type="number" min="1" max="51" maxLength="2" valueLink={this.linkState('level')} />
        )}

        {!this.state.crafted ? '' : (
          <span>{this.state.imbuePoints.toFixed(1)} / {GetImbueCeiling(this.state.level).toFixed(1)}</span>
        )}

        {_.range(0, this.state.crafted ? 4 : 10).map(function(val, i){
          return <Bonus ref={'bonus' + i} slot={this.state} imbue={this.state.imbueArr[i]} enhanced={this.state.crafted && i == 4} index={i} key={i} />;
        }.bind(this))}

        {!this.state.crafted || !this.state.enhanced ? '' : (
          <EnhancedBonus ref="bonus4" slot={this.state} index={4} />
        )}

        {!this.state.crafted ? '' : (
          <button onClick={this.onClickEnhanced}>Enhanced Bonus</button>
        )}

      </div>
    );
  },

  query: function(search) {
    if(search.term.length > 2){
      var results = Items.find({ itemname: new RegExp(search.term, 'gi') }).fetch().map(function(item){
        return { id: item._id, text: item.itemname };
      });

      search.callback({ results: results });
    } else {
      search.callback({ results: [] });
    }
  },

  format: function(item){
    return item.itemname;
  },

  onClickEnhanced: function(e) {
    this.props.onClickEnhancedBonus(this);
  }

});