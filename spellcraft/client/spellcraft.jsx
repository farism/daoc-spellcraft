Meta = new ReactiveVar();

Slots = new Meteor.Collection(null);

Bonuses = new Meteor.Collection(null);

var initialize = function(){
  Slots.remove({});
  Bonuses.remove({});
  Meta.set({ realm: 'Albion', class: 'Armsman', race: 'Avalonian', level: 50, newstats: true, public: 0 });
  AllSlots.map(function(slot){
    var slot = GetDefaultSlot(slot);
    Slots.insert(slot);
    _.range(0,10).map(function(i){
      Bonuses.insert(GetDefaultBonus(slot.id, i));
    });
  });
};

initialize();

Spellcraft = React.createClass({

  mixins: [ReactMeteorData, React.addons.LinkedStateMixin],

  getDefaultProps: function() {
    return {
      _id: FlowRouter.getParam('_id')
    }
  },

  getInitialState: function() {
    return {
      loaded: false,
      fromCeiling: true,
      slot: Slots.findOne({ id: 9 })
    };
  },

  getMeteorData: function() {
    if(this.props._id && !this.state.loaded){
      if(FlowRouter.subsReady('template')){
        var template = Templates.findOne({ _id: this.props._id }, { fields: { _id: 0, createdAt: 0 }, reactive: false });
        if(template){
          this.load(template);
        } else {
          FlowRouter.go('scnew');
        }
      } else {
        return { loading: true };
      }
    }

    return {
      user: Meteor.userId(),
      meta: Meta.get(),
      slots: Slots.find().fetch(),
      bonuses: Bonuses.find().fetch(),
      favorite: Favorites.findOne({ user: Meteor.userId(), template: this.props._id })
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if(nextProps._id != this.props._id){
      this.setState({ loaded: false });
      initialize();
    }
  },

  render: function() {
    if(this.data.loading){
      return <Loading />;
    }

    var usr = this.data.user;
    var owner = this.data.meta.owner == usr;
    var fav = this.data.favorite;
    var public = this.data.meta.public;
    var newstats = this.data.meta.newstats;
    var level = this.data.meta.level;
    var realm = this.data.meta.realm;
    var clss = this.data.meta.class;
    var race = this.data.meta.race;
    var castStat = GetCastStatByClass(realm, clss);
    var skills = GetSkillsByClass(realm, clss);
    var totals = {};

    this.data.bonuses.map(function(bonus){
      if(bonus.type && bonus.effect && bonus.amount >= 0){
        var key = bonus.type + ' ' + bonus.effect;
        if(castStat && castStat == bonus.effect && AcuityStats.indexOf(bonus.effect) >= 0){
          key = bonus.type + ' Acuity';
        }
        totals[key] ? totals[key] += bonus.amount : totals[key] = bonus.amount;
      }
    });

    return (
      <div id="app">
        <Nav ref="nav" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <div id="actions">
                <button onClick={this.onClickReport} title="View Report">
                  <span className="glyphicon glyphicon-list-alt" />
                </button>
                <button onClick={this.onClickLoad} title="Load">
                  <span className="glyphicon glyphicon-folder-open" />
                </button>
                {!this.props._id || owner ? (
                  <button onClick={this.onClickSave} title="Save">
                    <span className="glyphicon glyphicon-floppy-disk" />
                  </button>
                ) : ''}
                {this.props._id ? (
                  <button onClick={this.onClickDuplicate} title="Duplicate">
                    <span className="glyphicon glyphicon-duplicate" />
                  </button>
                ) : ''}
                {!this.props._id ? (
                  <button onClick={this.onClickNewStats} title={newstats ? 'Use Old Stats' : 'Use New Stats'}>
                    <span className={'glyphicon ' + (newstats ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down')} />
                  </button>
                ) : ''}
                {usr && this.props._id && !owner ? (
                  <button onClick={this.onClickFavorite} title={fav ? 'Unfavorite' : 'Favorite'}>
                    <span className={'glyphicon ' + (fav ? 'glyphicon-heart' : 'glyphicon-heart-empty')} />
                  </button>
                ) : ''}
                {this.props._id && owner ? (
                  <button onClick={this.onClickPublic} title={public ? 'Make Private' : 'Make Public'}>
                    <span className={'glyphicon ' + (public ? 'glyphicon-eye-open' : 'glyphicon-eye-close')} />
                  </button>
                ) : ''}
              </div>
              <div id="meta">
                <input ref="name" type="text" placeholder="Name" value={this.data.meta.name} onChange={this.onChangeName} />
                <input type="number" min="1" max="50" maxLength="2" value={this.data.meta.level} onChange={this.onChangeLevel} />
                <select value={realm} onChange={this.onChangeRealm}>
                  {Realms.map(function(realm, i){
                    return <option value={realm.name} key={i}>{realm.name}</option>
                  })}
                </select>
                <select value={clss} onChange={this.onChangeClass}>
                  {GetClassesByRealm(realm).map(function(clss, i){
                    return <option value={clss.name} key={i}>{clss.name}</option>
                  })}
                </select>
                <select value={race} onChange={this.onChangeRace}>
                  {GetRacesByClass(realm, clss).map(function(realm, i){
                    return <option value={realm.name} key={i}>{realm.name}</option>
                  })}
                </select>
              </div>
              <div id="summary">
                <hr/>
                <label className="from-ceiling"><input type="checkbox" checkedLink={this.linkState('fromCeiling')} /> Distance from cap</label>
                <hr/>
                <div className="row">
                  <div className="col-xs-6 stats">
                    {['Strength', 'Constitution', 'Quickness', 'Dexterity', 'Acuity', 'Hits'].map(function(effect, i){
                      return (
                        <div key={i}>
                          <label>{effect.length <= 4 ? effect : effect.substr(0,3)}: </label>
                          <span>{this.displayCeiling(totals, level, 'Stat', effect)}</span>
                          <span>({this.displayCeiling(totals, level, 'Cap Increase', effect)})</span>
                        </div>
                      );
                    }.bind(this))}
                    <div>
                      <label>Pow: </label>
                      <span>{this.displayCeiling(totals, level, 'Other Bonus', '% Power Pool')}</span>
                      <span>({this.displayCeiling(totals, level, 'Cap Increase', 'Power')})</span>
                    </div>
                  </div>
                  <div className="col-xs-6 resists">
                    {BonusResist.map(function(effect, i){
                      return (
                        <div key={i}>
                          <label>{effect}: </label>
                          <span>{this.displayCeiling(totals, level, 'Resist', effect)}</span>
                          <span>{GetRacialResist(realm, race, effect)}</span>
                        </div>
                      );
                    }.bind(this))}
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-xs-12 variant">
                    {skills.map(function(effect, i){
                      return totals['Skill ' + effect] ? (
                        <div key={i}>
                          <label>{effect}: </label>
                          <span>{this.displayCeiling(totals, level, 'Skill', effect)}</span>
                        </div>
                      ) : '';
                    }.bind(this))}
                    <br/>
                    {BonusOther.map(function(effect, i){
                      return totals['Other Bonus ' + effect] ? (
                        <div key={i}>
                          <label>{effect}: </label>
                          <span>{this.displayCeiling(totals, level, 'Other Bonus', effect)}</span>
                        </div>
                      ) : '';
                    }.bind(this))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-9">
              <div id="slots">
                <ul id="tabs" className="nav nav-pills">
                  {this.data.slots.map(function(slot, i){
                    return (
                      <li className={this.state.slot.id == slot.id ? 'active' : ''} onClick={this.onClickSlot.bind(this, slot.id)} key={i}>
                        <a>{slot.slot}</a>
                      </li>
                    );
                  }.bind(this))}
                </ul>
                <br/>
                {this.data.slots.map(function(slot, i){
                  if(slot.id == this.state.slot.id){
                    return <Slot ref="slot" meta={this.data.meta} id={slot.id} onClickEnhanceItem={this.onClickEnhanceItem} key={i} />;
                  }
                }.bind(this))}
              </div>
            </div>
          </div>
        </div>
        <ModalReport ref="report" meta={this.data.meta} totals={totals} skills={skills} />
        <ModalDuplicate ref="duplicate" />
        <ModalLoad ref="load" />
        <ModalEnhanced ref="enhance" meta={this.data.meta} slot={this.state.slot} onSelect={this.onSelectEnhanced} />
      </div>
    );
  },

  onClickReport: function(e) {
    this.refs.report.show();
  },

  onClickLoad: function(e) {
    this.refs.load.show();
  },

  onClickSave: function(e) {
    Meteor.user() ? this.save() : this.refs.nav.refs.login.show(0, this.save);
  },

  onClickDuplicate: function(e) {
    Meteor.user() ? this.duplicateSelectName() : this.refs.nav.refs.login.show(0, this.duplicateSelectName);
  },

  onClickNewStats: function(e) {
    Meta.set(_.extend(Meta.get(), { newstats: !Meta.get().newstats }));
  },

  onClickPublic: function(e) {
    var public = this.data.meta.public ? 0 : 1;
    Meta.set(_.extend(Meta.get(), { public: public }));
    if(this.props._id){
      Templates.update({ _id: this.props._id }, { $set: { public:  public } });
    }
  },

  onClickFavorite: function(e) {
    Meteor.user() ? this.favorite() : this.refs.nav.refs.login.show(0, this.favorite);
  },

  load: function(template) {
    Meta.set(_.omit(template, 'slots'));
    template.slots.map(function(slot){
      Slots.update({ id: slot.id }, { $set: _.omit(slot, 'bonuses') });
      slot.bonuses.map(function(bonus, i){
        if(bonus.amount){
          Bonuses.update({ slotid: slot.id, index: i }, { $set: bonus });
        }
      });
    });
    this.setState({ loaded: true });
  },

  save: function() {
    var template = Meta.get();

    template.slots = Slots.find({}, { fields: { _id: 0 } }).map(function(slot){
      slot.bonuses = Bonuses.find({ slotid: slot.id }, { fields: { _id: 0 } }).fetch();
      return slot;
    });

    if(this.props._id){
      Templates.update({ _id: this.props._id }, { $set: template });
    } else {
      template.name = template.name || 'New Template';
      template.owner = Meteor.userId();
      var _id = Templates.insert(template);
      if(_id){
        FlowRouter.go('/spellcraft/edit/' + _id);
      }
    }
  },

  duplicateSelectName: function() {
    this.refs.duplicate.show(Meta.get().name, this.duplicate);
  },

  duplicate: function(name) {
    var temp = Templates.findOne({ _id: this.props._id });
    if(temp){
      temp.owner = Meteor.userId();
      temp.name = name;
      temp.public = 0;
      var _id = Templates.insert(_.omit(temp, '_id', 'createdAt'));
      if(_id){
        FlowRouter.go('/spellcraft/edit/' + _id);
      }
    }
  },

  favorite: function() {
    if(this.data.favorite){
      Favorites.remove({ _id: this.data.favorite._id });
    } else {
      Favorites.insert({ user: Meteor.userId(), template: this.props._id });
    }
  },

  onChangeName: function(e) {
    Meta.set(_.extend(Meta.get(), { name: e.target.value }));
  },

  onChangeRealm: function(e) {
    var realm = e.target.value;
    var clss = GetClassesByRealm(realm)[0].name;
    var race = GetRacesByClass(realm, clss)[0].name;
    var state = { realm: realm, class: clss, race: race };
    Meta.set(_.extend(Meta.get(), state));
  },

  onChangeClass: function(e) {
    var clss = e.target.value;
    var state = { class: clss, race: GetRacesByClass(this.data.meta.realm, clss)[0].name };
    Meta.set(_.extend(Meta.get(), state));
  },

  onChangeRace: function(e) {
    var state = { race: e.target.value };
    Meta.set(_.extend(Meta.get(), state));
  },

  onChangeLevel: function(e) {
    var state = { level: Math.min(50, Math.max(1, parseInt(e.target.value, 10))) };
    Meta.set(_.extend(Meta.get(), state));
  },

  displayCeiling: function(totals, level, type, effect) {
    var amount = totals[type + ' ' + effect] || 0;
    var ceil = GetCeiling(totals, level, type, effect);
    return this.state.fromCeiling ? ceil - amount : amount;
  },

  onClickSlot: function(id) {
    this.setState({ slot: Slots.findOne({ id: id }) });
  },

  onClickEnhanceItem: function() {
    this.refs.enhance.show();
  },

  onSelectEnhanced: function(name, bonus) {
    var id = this.state.slot.id;
    Slots.update({ id: id }, { $set: { craftedItemName: name } });
    Bonuses.update({ slotid: this.state.slot.id, index: 4 }, { $set: bonus });
  }

});