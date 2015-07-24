Meta = ReactMeteor.createClass({

  templateName: 'Meta',

  mixins: [React.addons.LinkedStateMixin],

  getMeteorState: function() {
    return Session.get('template');
  },

  render: function() {
    return (
      <div id="meta">
        <input type="text" placeholder="Name" valueLink={this.linkState('name')} />
        <input type="number" min="1" max="50" maxLength="2" value={this.state.level} onChange={this.onChangeLevel} />
        <select value={this.state.realm} onChange={this.onChangeRealm}>
          {Realms.map(function(realm, i){
            return <option value={realm.name} key={i}>{realm.name}</option>
          })}
        </select>
        <select value={this.state.class} onChange={this.onChangeClass}>
          {GetClassesByRealm(this.state.realm).map(function(clss, i){
            return <option value={clss.name} key={i}>{clss.name}</option>
          })}
        </select>
        <select valueLink={this.linkState('race')}>
          {GetRacesByClass(this.state.realm, this.state.class).map(function(realm, i){
            return <option value={realm.name} key={i}>{realm.name}</option>
          })}
        </select>
      </div>
    );
  },


  onChangeRealm: function(e) {
    var realm = $(e.target).val();
    var clss = GetClassesByRealm(realm)[0].name;
    var race = GetRacesByClass(realm, clss)[0].name;
    var state = { realm: realm, class: clss, race: race };
    Session.set('template', _.extend(Session.get('template'), state));
  },

  onChangeClass: function(e) {
    var clss = $(e.target).val();
    var state = { class: clss, race: GetRacesByClass(this.state.realm, clss)[0].name };
    Session.set('template', _.extend(Session.get('template'), state));
  },

  onChangeRace: function(e) {
    var state = { race: $(e.target).val() };
    Session.set('template', _.extend(Session.get('template'), state));
  },

  onChangeLevel: function(e) {
    var state = { level: Math.min(50, Math.max(1, parseInt($(e.target).val(), 10))) };
    Session.set('template', _.extend(Session.get('template'), state));
  }

});