Slot = ReactMeteor.createClass({

  templateName: 'Slot',

  getDefaultProps: function() {
    return {};
  },

  componentWillReceiveProps: function(nextProps) {
    var state = {};

    state.imbueArr = nextProps.slot.bonuses.slice(0, 4).map(function(bonus){
      return CalculateBonusImbue(bonus.type, bonus.effect, bonus.amount, bonus.amountIndex) / 2;
    });

    var max = _.max(state.imbueArr);
    state.imbueArr[state.imbueArr.indexOf(max)] = max * 2;

    state.imbuePoints = state.imbueArr.reduce(function(prev, cur){
      return prev + cur;
    }, 0);

    this.setState(state);
  },

  render: function() {
    var character = this.props.character;
    var slot = this.props.slot;

    return (
      <div className="slot">

        <div className="row">
          <div className="col-xs-12 crafted">
            {slot.id >= 9 ? (
              <label><input type="checkbox" checked={slot.crafted} onChange={this.onChangeCrafted} />Crafted</label>
            ) : ''}

            {slot.id >= 16 ? (
              <label><input type="checkbox" checked={slot.equipped} onChange={this.changeEquipped} />Equipped</label>
            ) : ''}
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-6">
                {slot.crafted ? (
                  <input type="number" name="level" min="1" max="51" maxLength="2" value={slot.level} onChange={this.onChangeLevel} />
                ) : ''}

                {slot.crafted ? (
                  <span className="item-imbue">{slot.imbuePoints.toFixed(1)} / {GetImbueCeiling(slot.level).toFixed(1)}</span>
                ) : ''}

                {slot.crafted ? (
                  <span className="item-name">{slot.craftedItemName}</span>
                ) : ''}

                {!slot.crafted ? (
                  <ItemSearch location={slot.name} value={slot.itemName} onChange={this.onChangeSearch} onSelect={this.onSelectSearch} />
                ) : ''}
              </div>
              <div className="col-xs-2">
                {this.operations()}
              </div>
            </div>
          </div>
        </div>

        {slot.bonuses.slice(0, slot.crafted ? 5 : 10).map(function(bonus, i){
          if(slot.crafted && i == 4){
            if(slot.bonuses[i].amount){
              return <EnhancedBonus slot={slot} index={i} key={i} />
            }
          } else {
            return <Bonus2 />;
          }
        }.bind(this))}

        <div className="enhanced-actions">
          {slot.crafted ? (
            <button className="btn btn-default" onClick={this.onClickEnhanced}>Enhanced Bonus</button>
          ) : ''}

          {slot.enhanced ? (
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
                  {Slots.find().fetch().map(function(slot, j){
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

  update: function(state) {
    var template = Session.get('template');
    var slot = _.findWhere(template.slots, { id: this.props.slot.id });
    _.extend(slot, state);
    Session.set('template', template);
  },

  reset: function() {
  },

  copy: function(slot) {
  },

  save: function() {
  },

  onChangeCrafted: function(e) {
    this.update({ crafted: $(e.target).is(':checked') });
  },

  onChangeEquipped: function(e) {
    this.update({ equipped: $(e.target).is(':checked') });
  },

  onChangeLevel: function(e) {
    var lvl = parseInt($(e.target).val(), 10) || 1;
    this.update({ level: Math.min(51, Math.max(1, lvl)) });
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

  onChangeSearch: function(val) {
    // Slots.update({ _id: this.props._id }, { $set: { itemName: val } });
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