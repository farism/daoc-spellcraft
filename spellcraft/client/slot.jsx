Slot = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData: function() {
    return {
      slot: Slots.findOne({ id: this.props.id }),
      bonuses: Bonuses.find({ slotid: this.props.id }).fetch()
    };
  },

  render: function() {
    var crafted = this.data.slot.crafted;
    var equipped = this.data.slot.equipped;
    var level = this.data.slot.level;
    var imbue = CalculateSlotImbue(this.data.bonuses);

    return (
      <div className="slot">

        <div className="row">
          <div className="col-xs-12 crafted">
            {this.data.slot.id >= 9 ? (
              <label><input type="checkbox" checked={crafted} onChange={this.onChangeCrafted} />Crafted</label>
            ) : ''}

            {this.data.slot.id >= 16 ? (
              <label><input type="checkbox" checked={equipped} onChange={this.onChangeEquipped} />Equipped</label>
            ) : ''}
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-6">
                {crafted ? (
                  <input type="number" name="level" min="1" max="51" maxLength="2" value={level} onChange={this.onChangeLevel} />
                ) : ''}

                {crafted ? (
                  <span className="item-imbue">{imbue.points.toFixed(1)} / {GetImbueCeiling(level).toFixed(1)}</span>
                ) : ''}

                {crafted ? (
                  <span className="item-name">{this.data.slot.craftedItemName}</span>
                ) : ''}

                {!crafted ? (
                  <ItemSearch slot={this.data.slot} onChange={this.onChangeSearch} onSelect={this.onSelectSearch} />
                ) : ''}
              </div>
              <div className="col-xs-2">
                {this.operations()}
              </div>
            </div>
          </div>
        </div>

        {this.data.bonuses.slice(0, crafted ? 5 : 10).map(function(bonus, i){
          if(crafted && i == 4){
            return <EnhancedBonus _id={bonus._id} meta={this.props.meta} slot={this.data.slot} key={i} />;
          } else {
            return <Bonus _id={bonus._id} meta={this.props.meta} slot={this.data.slot} imbue={imbue.arr[i]} key={i} />;
          }
        }.bind(this))}

        <div className="enhanced-actions">
          {crafted ? (
            <button className="btn btn-default" onClick={this.onClickEnhanced}>Enhanced Bonus</button>
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
                    return !this.data.slot.crafted || (this.data.slot.crafted && slot.id >= 9) ? (
                      <li onClick={op.cb.bind(this, slot)} key={j}>
                        <a href="#">{slot.id == 4 || slot.id == 6 ? 'L. ' : ''} {slot.id == 5 || slot.id == 7 ? 'R. ' : ''} {slot.slot}</a>
                      </li>
                    ) : '';
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
    Slots.update({ id: this.props.id }, { $set: GetDefaultSlot(this.data.slot) });
    Bonuses.find({ slotid: this.props.id }).map(function(bonus){
      Bonuses.update({ _id: bonus._id }, { $set: GetDefaultBonus(this.data.slot.id, bonus.index) });
    }.bind(this));
  },

  copy: function(slot) {
    Slots.update({ id: this.props.id }, { $set: _.omit(this.data, 'id', 'id', 'name') });
    Bonuses.find({ slotid: this.props.id }).map(function(bonus){
      Bonuses.update({ slotid: this.props.id, index: bonus.index }, { $set: _.omit(bonus, 'id', 'slotid') });
    });
    this.props.onClickSlot(slot.id);
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

  onChangeCrafted: function(e) {
    Slots.update({ id: this.props.id }, { $set: { crafted: $(e.target).prop('checked') } });
  },

  onChangeEquipped: function(e) {
    Slots.update({ id: this.props.id }, { $set: { equipped: $(e.target).prop('checked') } });
  },

  onChangeLevel: function(e) {
    Slots.update({ id: this.props.id }, { $set: { level: Math.min(51, Math.max(1, parseInt($(e.target).val(), 10) || 1)) } });
  },

  onClickEnhanced: function(e) {
    this.props.onClickEnhanceItem();
  }

});