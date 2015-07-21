Slot = ReactMeteor.createClass({

  templateName: 'Slot',

  mixins: [React.addons.LinkedStateMixin],

  getMeteorState: function() {
    var state = Slots.findOne({ _id: this.props._id });
    return state;
  },

  componentDidUpdate: function() {
    Slots.update({ _id: this.state._id }, { $set: _.omit(this.state, '_id') });
  },

  render: function() {
    var imbueArr = _.range(0,4).map(function(i){
      var bonus = this.refs['bonus' + i];
      return bonus ? bonus.state.imbue : 0;
    }.bind(this));

    imbueArr[imbueArr.indexOf(_.max(imbueArr))] = _.max(imbueArr) * 2;

    var imbuePoints = imbueArr.reduce(function(prev, cur){
      return prev + cur;
    }, 0);

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
                  <span className="item-imbue">{imbuePoints.toFixed(1)} / {GetImbueCeiling(this.state.level).toFixed(1)}</span>
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

        {Bonuses.find({ slotid: this.state._id }).fetch().slice(0, this.state.crafted ? 5 : 10).map(function(bonus, i){
          if(this.state.crafted && i == 4){
            return <EnhancedBonus ref={'bonus' + i} crafted={this.state.crafted} {...bonus} key={i} />;
          } else {
            return <Bonus ref={'bonus' + i} crafted={this.state.crafted} imbueAdjusted={imbueArr[i]} {...bonus} key={i} />;
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
                  {Slots.find().map(function(slot, j){
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

  reset: function() {
    this.setState(_.omit(GetDefaultSlot(this.state), 'crafted'));
    _.range(0,10).map(function(i){
      var bonus = this.refs['bonus' + i];
      if(bonus) bonus.setState(GetDefaultBonus(this.state._id, i));
    }.bind(this));
  },

  copy: function(slotid) {
    Slots.update({ _id: slotid }, { $set: _.omit(this.state, '_id', 'id', 'name') });
    Bonuses.find({ slotid: this.state._id }).map(function(bonus){
      Bonuses.update({ slotid: slotid, index: bonus.index }, { $set: _.omit(bonus, '_id', 'slotid') });
    });
    this.props.onClickSlot(slotid);
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
    this.reset();
    Slots.update({ _id: this.state._id }, { $set: { itemName: item.itemname } });
    _.range(0,10).map(function(i){
      var from = item.dropitem[i];
      var to = this.refs['bonus' + i];
      if(from){
        from.amount = parseInt(from.amount, 10);
        if(to) to.setState(from);
      } else {
        if(to) to.setState(GetDefaultBonus(this.state._id, i));
      }
    }.bind(this));
  },

  onClickEnhanced: function(e) {
    this.props.onClickEnhanceItem(this.props._id);
  },

  onClickEnhancedClear: function() {
    // Bonuses.update({ _id: this.props.bonuses[4]._id }, { $set: GetDefaultBonus(this.props._id) });
  }

});