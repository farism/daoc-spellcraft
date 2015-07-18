Slot = ReactMeteor.createClass({

  templateName: 'Slot',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      enhanced: false
    }
  },

  getMeteorState: function() {
    var state = Slots.findOne({ id: this.props.id });

    state.imbueArr = Bonuses.find({ slot: this.props.id }).fetch().slice(0, 4).map(function(bonus){
      return CalculateBonusImbue(bonus.type, bonus.effect, bonus.amount, bonus.amountIndex) / 2;
    });

    var max = _.max(state.imbueArr);
    state.imbueArr[state.imbueArr.indexOf(max)] = max * 2;

    state.imbuePoints = state.imbueArr.reduce(function(prev, cur){
      return prev + cur;
    }, 0);

    return state;
  },

  componentDidUpdate: function(prevProps, prevState) {
    Slots.update({ id: this.props.id }, { $set: _.omit(this.state, '_id') });

    if(prevState.crafted != this.state.crafted){
      Bonuses.update({ slot: this.state.id }, { $set: { type: '', effect: '', amount: 0, amountIndex: 0, imbue: 0 } });
    }
  },

  render: function() {
    return (
      <div className="slot">

        <div className="row">
          <div className="col-xs-6">
            {this.props.id >= 9 ? (
              <label><input type="checkbox" name="crafted" checkedLink={this.linkState('crafted')} />Crafted</label>
            ) : ''}

            {this.props.id >= 16 ? (
              <label><input type="checkbox" name="equiped" checkedLink={this.linkState('equipped')} />Equipped</label>
            ) : ''}
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-6">
                {this.state.crafted ? (
                  <input type="number" name="level" min="1" max="51" maxLength="2" valueLink={this.linkState('level')} />
                ) : ''}

                {this.state.crafted ? (
                  <span className="item-imbue">{this.state.imbuePoints.toFixed(1)} / {GetImbueCeiling(this.state.level).toFixed(1)}</span>
                ) : ''}

                {this.state.crafted ? (
                  <span className="item-name">{this.state.craftedItemName}</span>
                ) : ''}

                {!this.state.crafted ? (
                  <ItemSearch location={this.state.name} onSelect={this.onSelectItem} />
                ) : ''}
              </div>
              <div className="col-xs-2">
                <div className="btn-group">
                  <button type="button" className="dropdown-toggle" data-toggle="dropdown">
                    <span className="glyphicon glyphicon-cog" />
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li onClick={this.onClickSave}><a href="#">Save Item</a></li>
                    <li onClick={this.onClickClear}><a href="#">Clear Item</a></li>
                    <li className="dropdown-submenu">
                      <a href="#">Move Item</a>
                      <ul className="dropdown-menu">
                        {AllSlots.map(function(slot, i){
                          return <li onClick={this.onClickMove.bind(this, slot)} key={i}><a href="#">{slot.name}</a></li>;
                        }.bind(this))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {_.range(0, this.state.crafted ? 4 : 10).map(function(val, i){
          return <Bonus slot={this.state} imbue={this.state.imbueArr[i]} enhanced={this.state.crafted && i == 4} index={i} key={i} />;
        }.bind(this))}

        {this.state.crafted && this.state.enhanced ? (
          <EnhancedBonus slot={this.state} index={4} />
        ) : ''}

        <div className="enhanced-actions">
          {this.state.crafted ? (
            <button className="btn btn-default" onClick={this.onClickEnhanced}>Enhanced Bonus</button>
          ) : ''}

          {this.state.enhanced ? (
            <button className="btn btn-default" onClick={this.onClickEnhancedClear}>Clear Enhanced</button>
          ) : ''}
        </div>

      </div>
    );
  },

  onClickSave: function(e) {
    this.props.onClickSaveItem(this.state);
  },

  onClickMove: function(slot, e) {
    Slots.update({ id: slot.id }, { $set: this.state });
    Bonuses.find({ slot: this.state.id }).map(function(bonus){
      Bonuses.update({ slot: slot.id }, { $set: bonus });
    });
    this.onClickClear();
  },

  onClickClear: function() {
    Slots.update({ id: this.state.id }, { $set: _.omit(GetDefaultSlot(this.state), '_id') });
    _.range(0, 10).map(function(i){
      Bonuses.update({ slot: this.state.id, index: i }, { $set: _.omit(GetDefaultBonus(this.state, i), '_id') });
    }.bind(this))
  },

  onSelectItem: function(item, i) {
    console.log(item);
  },

  onClickEnhanced: function(e) {
    this.props.onClickEnhanceItem(this);
  },

  onClickEnhancedClear: function(){
    Bonuses.update({ slot: this.state.id, index: 4 }, { $set: { type: '', effect: '', amount: 0, amountIndex: 0, imbue: 0 } });
    this.setState({ enhanced: false });
  }

});