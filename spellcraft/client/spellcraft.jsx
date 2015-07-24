Slots = new Meteor.Collection(null);

Bonuses = new Meteor.Collection(null);

Session.set('template', {
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


var SpellcraftEdit = ReactMeteor.createClass({

  templateName: 'SpellcraftEdit',

  getMeteorState: function() {
    return {
      template: TemplatesNew.findOne({ _id: Router.current().params._id })
    }
  },

  render: function() {
    return <Spellcraft template={this.state.template} />
  }

});

var Spellcraft = ReactMeteor.createClass({

  templateName: 'Spellcraft',

  getInitialState: function() {
    this.load(this.props.template);

    return {
      activeSlot: Slots.findOne({ id: 9 })
    };
  },

  getMeteorState: function() {
    var state = {};

    if(this.props.template){
      state.favorite = Favorites.findOne({ ownerId: Meteor.userId(), templateId: this.props.template._id }) || null;
      state.owner = this.props.template.owner == Meteor.userId();
      state.newstats = this.props.template.newstats;
    }

    return state;
  },

  componentWillReceiveProps: function(nextProps) {
    if(nextProps.template._id != this.props.template._id){
      this.load(nextProps.template);
    }
  },

  render: function() {
    var usr = Meteor.userId();
    var temp = this.props.template;
    var owner = this.state.owner;
    var fav = this.state.favorite;

    return (
      <div id="app">
        <Nav ref="nav" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <div id="actions">
                <button onClick={this.onClickReport} className="View Report"><span className="glyphicon glyphicon-list-alt" /></button>
                <button onClick={this.onClickLoad} title="Load"><span className="glyphicon glyphicon-folder-open" /></button>
                {owner ? <button onClick={this.onClickSave} title="Save"><span className="glyphicon glyphicon-floppy-disk" /></button> : ''}
                {temp ? <button onClick={this.onClickDuplicate} title="Duplicate"><span className="glyphicon glyphicon-transfer" /></button> : ''}
                {owner ? (
                  <button onClick={this.onClickPublic} className={temp.public ? '' : 'private'} title={temp.public ? 'Make Private' : 'Make Public'}>
                    <span className="glyphicon glyphicon-lock" />
                  </button>
                ) : ''}
                {usr && temp && !owner ? (
                  <button onClick={this.onClickFavorite} className={fav ? 'favorite' : ''} title={fav ? 'Unfavorite' : 'Favorite'}>
                    <span className="glyphicon glyphicon-heart" />
                  </button>
                ) : ''}
                {temp && !owner ? <button onClick={this.onClickRate} title="Rate"><span className="glyphicon glyphicon-star" /></button> : ''}
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
                        <a>{slot.slot}</a>
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
        <ModalDuplicate ref="duplicate" />
        <ModalEnhanced ref="enhance" slot={this.state.activeSlot} onSelect={this.onSelectEnhanced} />
      </div>
    );
  },

  onClickReport: function(e) {
    this.refs.report.show();
  },

  onClickLoad: function(e) {
    this.refs.load.show();
  },

  load: function(template) {
    if(!template){
      return;
    }

    Session.set('template', template);

    template.slots.map(function(slot, i){
      var _id = Slots.findOne({ id: i })._id;
      Slots.update({ _id: _id }, { $set: slot });
      slot.bonuses.map(function(bonus, i){
        Bonuses.update({ slotid: _id, index: i }, { $set: bonus });
      });
    });
  },

  onClickSave: function(e) {
    Meteor.user() ? this.save() : this.refs.nav.refs.login.show(0, this.save);
  },

  save: function() {
    console.log('save temp', this.state);
  },

  onClickDuplicate: function(e) {
    Meteor.user() ? this.onDuplicateLogin() : this.refs.nav.refs.login.show(0, this.onDuplicateLogin);
  },

  onDuplicateLogin: function() {
    this.refs.duplicate.show(this.props.template.name, this.duplicate);
  },

  duplicate: function(name) {
    console.log('duplicate temp', name);
  },

  onClickFavorite: function(e) {
    Meteor.user() ? this.favorite() : this.refs.nav.refs.login.show(0, this.favorite);
  },

  favorite: function() {
    if(this.state.favorite){
      Favorites.remove({ _id: this.state.favorite._id });
    } else {
      Favorites.insert({ ownerId: Meteor.userId(), templateId: this.props.template._id });
    }
  },

  onClickRate: function(e) {
    console.log(this.props.template._id);
  },

  rate: function(){

  },

  onClickPublic: function(e) {
    var _id = this.props.template._id;
    var public = Templates.findOne({ _id: _id }).public;
    Templates.update({ _id: _id }, { $set: { public: public ? 0 : 1 } });
  },

  onClickSlot: function(_id) {
    this.setState({ activeSlot: Slots.findOne({ _id: _id }) });
  },

  onClickEnhanceItem: function() {
    this.refs.enhance.show();
  },

  onSelectEnhanced: function(name, bonus) {
    var _id = this.state.activeSlot._id;
    Slots.update({ _id: _id }, { $set: { craftedItemName: name } });
    Bonuses.update({ slotid: _id, index: 4 }, { $set: bonus });
  }

});