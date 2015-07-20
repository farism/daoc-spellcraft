Slots = new Meteor.Collection(null);

Bonuses = new Meteor.Collection(null);

Session.set('character', {
  name: '',
  realm: 'Albion',
  class: 'Armsman',
  race: 'Avalonian',
  level: 50,
  rank: '1L1'
});

AllSlots.map(function(slot){
  var slot = Slots.insert(GetDefaultSlot(slot));
  _.range(0,10).map(function(i){
    Bonuses.insert(GetDefaultBonus(slot, i));
  });
});

Spellcraft = ReactMeteor.createClass({

  templateName: 'Spellcraft',

  getInitialState: function() {
    return {
      activeSlot: Slots.findOne({ id: 9 })
    }
  },

  render: function() {
    return (
      <div id="app">
        <Nav ref="nav" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <div id="actions">
                <button onClick={this.onClickReport} className="View Report"><span className="glyphicon glyphicon-list-alt" /></button>
                <button onClick={this.onClickSave} title="Save"><span className="glyphicon glyphicon-floppy-disk" /></button>
                <button onClick={this.onClickDuplicate} title="Duplicate"><span className="glyphicon glyphicon-transfer" /></button>
                <button onClick={this.onClickLoad} title="Load"><span className="glyphicon glyphicon-folder-open" /></button>
              </div>
              <Meta />
              <Summary />
            </div>
            <div className="col-sm-9">
              <div id="slots">
                <ul id="tabs" className="nav nav-pills">
                  {Slots.find().fetch().map(function(slot, i){
                    return (
                      <li className={this.state.activeSlot.id == slot.id ? 'active' : ''} onClick={this.onClickSlot.bind(this, slot.id)} key={i}>
                        <a>{slot.name}</a>
                      </li>
                    );
                  }.bind(this))}
                </ul>
                <br/>
                <Slot ref="slot" {...this.state.activeSlot} onClickEnhanceItem={this.onClickEnhanceItem} />
              </div>
            </div>
          </div>
        </div>
        <ModalReport ref="report" />
        <ModalLoad ref="load" />
        <ModalEnhanced ref="enhance" slot={this.state.activeSlot} onSelect={this.onSelectEnhanced} />
      </div>
    );
  },

  save: function() {
    console.log('save temp', this.state);
  },

  duplicate: function() {
    console.log('duplicate temp', this.state);
  },

  load: function(id) {
    console.log('sc load', id);
  },

  onClickReport: function(e) {
    this.refs.report.show();
  },

  onClickSave: function(e) {
    Meteor.user() ? this.save() : this.refs.nav.refs.login.show(this.save);
  },

  onClickDuplicate: function(e) {
    Meteor.user() ? this.save() : this.refs.nav.refs.login.show(this.duplicate);
  },

  onClickLoad: function(e) {
    this.refs.load.show(this.load);
  },

  onClickSlot: function(id) {
    this.setState({ activeSlot: _.findWhere(AllSlots, { id: id }) });
  },

  onClickEnhanceItem: function(slot) {
    this.refs.enhance.show();
  },

  onSelectEnhanced: function(name, bonus) {
    this.refs.slot.setState({ craftedItemName: name });
    console.log(this.refs.slot);
    this.refs.slot.refs.bonus4.setState(bonus);
  }

});