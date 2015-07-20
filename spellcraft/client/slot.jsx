Slot = ReactMeteor.createClass({

  templateName: 'Slot',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    var state = Slots.findOne({ _id: this.props._id });
    state.bonuses = Bonuses.find({ slotid: this.props._id }).fetch();
    return state;
  },

  componentDidUpdate: function() {
    Slots.update({ _id: this.state._id }, { $set: _.omit(this.state, '_id') });
  },

  render: function() {
    console.log(this.getImbuePoints(Bonuses.find({ slotid: this.state._id }).fetch()));

    return (
      <div className="slot">

        <div className="row">
          <div className="col-xs-12 crafted">
            {this.state.id >= 9 ? (
              <label><input type="checkbox" checkedLink={this.linkState('crafted')} />Crafted</label>
            ) : ''}

            {this.state.id >= 16 ? (
              <label><input type="checkbox" checkedLink={this.linkState('equipped')} />Equipped</label>
            ) : ''}
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-6">
                {this.state.crafted ? (
                  <input type="number" name="level" min="1" max="51" maxLength="2" value={this.state.level} onChange={this.onChangeLevel} />
                ) : ''}

                {this.state.crafted ? (
                  <span className="item-imbue">{this.state.imbuePoints.toFixed(1)} / {GetImbueCeiling(this.state.level).toFixed(1)}</span>
                ) : ''}

                {this.state.crafted ? (
                  <span className="item-name">{this.state.craftedItemName}</span>
                ) : ''}

                {!this.state.crafted ? (
                  <ItemSearch location={this.state.name} value={this.state.itemName} onChange={this.onChangeSearch} onSelect={this.onSelectSearch} />
                ) : ''}
              </div>
              <div className="col-xs-2">
                {this.operations()}
              </div>
            </div>
          </div>
        </div>

        {this.state.bonuses.slice(0, this.state.crafted ? 5 : 10).map(function(bonus, i){
          if(this.state.crafted && i == 4){
            return <EnhancedBonus ref={'bonus' + i} slotid={this.state._id} {...bonus} key={i} />;
          } else {
            return <Bonus ref={'bonus' + i} slotid={this.state._id} {...bonus} key={i} />;
          }
        }.bind(this))}

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

  operations: function() {
    var ops = [
      { label: 'Copy Item To', cb: this.onClickCopy },
      { label: 'Move Item To', cb: this.onClickMove }
    ];

    return (
      <div className="btn-group">
        <button type="button" className="dropdown-toggle" data-toggle="dropdown">
          <span className="glyphicon glyphicon-cog" />
        </button>
        <ul className="dropdown-menu" role="menu">
          <li onClick={this.onClickSave}><a href="#">Save Item</a></li>
          <li onClick={this.onClickClear}><a href="#">Clear Item</a></li>
          {ops.map(function(op, i){
            return (
              <li className="dropdown-submenu" key={i}>
                <a href="#">{op.label}</a>
                <ul className="dropdown-menu">
                  {AllSlots.map(function(slot, j){
                    return (
                      <li onClick={op.cb.bind(this, slot._id)} key={j}>
                        <a href="#">{slot.id == 4 || slot.id == 6 ? 'L. ' : ''} {slot.id == 5 || slot.id == 7 ? 'R. ' : ''} {slot.name}</a>
                      </li>
                    );
                  }.bind(this))}
                </ul>
              </li>
            );
          }.bind(this))}
        </ul>
      </div>
    );
  },

  getImbuePoints: function(bonuses) {
    console.log(bonuses);
    var imbueArr = bonuses.slice(0, 4).map(function(bonus){
      return CalculateBonusImbue(bonus.type, bonus.effect, bonus.amount, bonus.amountIndex) / 2;
    });

    imbueArr[imbueArr.indexOf(_.max(imbueArr))] = _.max(imbueArr) * 2;

    var imbuePoints = imbueArr.reduce(function(prev, cur){
      return prev + cur;
    }, 0);

    console.log(imbueArr, imbuePoints);
  },

  reset: function() {
    this.setState(GetDefaultSlot(this.state));
    _.range(0,10).map(function(i){
      var bonus = this.refs['bonus' + i];
      if(bonus) bonus.setState(GetDefaultBonus(this._id, i));
    }.bind(this));
  },

  copy: function(slot) {
  },

  save: function() {
  },

  onClickSave: function(e) {
    if(Meteor.user()){
      this.save();
    } else {
      Session.set({ login: { callback: this.save.bind(this) } });
    }
  },

  onClickClear: function() {
    this.reset();
  },

  onClickCopy: function(slot, e) {
    this.copy(slot);
  },

  onClickMove: function(slot, e) {
    this.copy(slot);
    this.reset();
  },

  onChangeLevel: function(e) {
    var lvl = parseInt($(e.target).val(), 10) || 1;
    this.setState({ level: Math.min(51, Math.max(1, lvl)) });
  },

  onChangeSearch: function(val) {
    this.setState({ itemName: val });
  },

  onSelectSearch: function(item) {
    this.onClickClear();
    /*item.dropitem.map(function(bonus, i) {
      bonus.amount = parseInt(bonus.amount, 10);
      Bonuses.update({ _id: this.props.bonuses[i]._id }, { $set: bonus });
    }.bind(this));
    Slots.update({ id: this.props._id }, { $set: { itemName: item.itemname } });*/
  },

  onClickEnhanced: function(e) {
    this.props.onClickEnhanceItem(this.props._id);
  },

  onClickEnhancedClear: function() {
    // Bonuses.update({ _id: this.props.bonuses[4]._id }, { $set: GetDefaultBonus(this.props._id) });
  }

});