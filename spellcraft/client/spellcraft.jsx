Slots = new Mongo.Collection(null);

Bonuses = new Mongo.Collection(null);

Session.set('template', {
  name: '',
  character: {
    realm: 'Albion',
    class: 'Armsman',
    race: 'Avalonian',
    level: 50,
    rank: '1L1'
  },
  slots: AllSlots.map(function(slot){
    Slots.insert(GetDefaultSlot(slot));

    var s = GetDefaultSlot(slot);
    s.bonuses = [];
    _.range(0, 10).map(function(i){
      s.bonuses.push(GetDefaultBonus(s.id));
    });
    return s;
  })
});



Spellcraft = ReactMeteor.createClass({

  templateName: 'Spellcraft',

  getInitialState: function() {
    return {
      activeSlot: 9
    }
  },

  getMeteorState: function() {
    return {
      template: Session.get('template')
    }
  },

  componentDidMount: function() {
    window.onbeforeunload = function() {
      //return "Data will be lost if you leave the page, are you sure?";
    };
  },

  render: function() {
    var character = this.state.template.character || {};
    var slot = _.findWhere(this.state.template.slots, { id: this.state.activeSlot }) || {};

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
              <Meta name={this.state.template.name} {...this.state.template.character} />
            </div>
            <div className="col-sm-9">
              <div id="slots">
                <ul id="tabs" className="nav nav-pills">
                  {AllSlots.map(function(slot, i){
                    return (
                      <li className={this.state.activeSlot == slot.id ? 'active' : ''} onClick={this.onClickSlot.bind(this, slot.id)} key={i}>
                        <a>{slot.name}</a>
                      </li>
                    );
                  }.bind(this))}
                </ul>
                <br/>
                <div id="slots">
                  <Slot character={character} slot={slot} onClickEnhanceItem={this.props.onClickEnhanceItem} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalReport ref="report" />
        <ModalLoad ref="load" />
        <ModalEnhanced ref="enhance" {...this.state.template.character} slot={this.state.activeSlot} />
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

  onClickEnhanceItem: function(slot) {
    this.refs.enhance.show();
  },

  onClickSlot: function(id) {
    console.log(id);
    this.setState({ activeSlot: id });
  }

});