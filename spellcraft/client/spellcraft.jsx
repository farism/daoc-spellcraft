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
                <button onClick={this.onClickFavorite} title="Favorite"><span className="glyphicon glyphicon-heart" /></button>
                <button onClick={this.onClickRate} title="Rate"><span className="glyphicon glyphicon-star" /></button>
              </div>
              <Meta />
              <Summary />
            </div>
            <div className="col-sm-9">
              <div id="slots">
                <ul id="tabs" className="nav nav-pills">
                  {Slots.find().map(function(slot, i){
                    return (
                      <li className={this.state.activeSlot._id == slot._id ? 'active' : ''} onClick={this.onClickSlot.bind(this, slot._id)} key={i}>
                        <a>{slot.name}</a>
                      </li>
                    );
                  }.bind(this))}
                </ul>
                <br/>
                {Slots.find().map(function(slot, i){
                  if(slot._id == this.state.activeSlot._id){
                    return <Slot ref="slot" _id={slot._id} onClickSlot={this.onClickSlot} onClickEnhanceItem={this.onClickEnhanceItem} key={i} />;
                  }
                }.bind(this))}
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

  onClickReport: function(e) {
    this.refs.report.show();
  },

  save: function() {
    console.log('save temp', this.state);
  },

  onClickSave: function(e) {
    Meteor.user() ? this.save() : this.refs.nav.refs.login.show(this.save);
  },

  duplicate: function() {
    console.log('duplicate temp', this.state);
  },

  onClickDuplicate: function(e) {
    Meteor.user() ? this.save() : this.refs.nav.refs.login.show(this.duplicate);
  },

  load: function(id) {
    console.log('sc load', id);
  },

  onClickLoad: function(e) {
    this.refs.load.show(this.load);
  },

  favorite: function(){

  },

  onClickFavorite: function(e) {
    Meteor.user() ? this.favorite() : this.refs.nav.refs.login.show(this.favorite);
  },

  rate: function(){

  },

  onClickRate: function(e) {

  },

  onClickSlot: function(_id) {
    this.setState({ activeSlot: Slots.findOne({ _id: _id }) });
  },

  onClickEnhanceItem: function(slot) {
    this.refs.enhance.show();
  },

  onSelectEnhanced: function(name, bonus) {
    this.refs.slot.setState({ craftedItemName: name });
    this.refs.slot.refs.bonus4.setState(bonus);
  }

});