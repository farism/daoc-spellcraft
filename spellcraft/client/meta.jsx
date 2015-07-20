Meta = ReactMeteor.createClass({

  templateName: 'Meta',

  mixins: [React.addons.LinkedStateMixin],

  render: function() {
    return (
      <div id="meta">
        <input type="text" placeholder="Name" value={this.props.name} onChange={this.onChangeName} />
        <input type="number" min="1" max="50" maxLength="2" value={this.props.level} onChange={this.onChangeLevel} />
        <select value={this.props.realm} onChange={this.onChangeRealm}>
          {Realms.map(function(realm, i){
            return <option value={realm.name} key={i}>{realm.name}</option>
          })}
        </select>
        <select value={this.props.class} onChange={this.onChangeClass}>
          {GetClassesByRealm(this.props.realm).map(function(clss, i){
            return <option value={clss.name} key={i}>{clss.name}</option>
          })}
        </select>
        <select value={this.props.race} onChange={this.onChangeRace}>
          {GetRacesByClass(this.props.realm, this.props.class).map(function(realm, i){
            return <option value={realm.name} key={i}>{realm.name}</option>
          })}
        </select>
      </div>
    );
  },

  onChangeRealm: function(e) {
    var state = Session.get('template');
    var realm = $(e.target).val();
    state.character.realm = realm;
    state.character.class = GetClassesByRealm(realm)[0].name;
    state.character.race = GetRacesByClass(realm, state.character.class)[0].name;
    Session.set('template', state);
  },

  onChangeClass: function(e) {
    var state = Session.get('template');
    var clss = $(e.target).val();
    state.character.class = clss;
    state.character.race = GetRacesByClass(state.character.realm, clss)[0].name;
    Session.set('template', state);
  },

  onChangeRace: function(e) {
    var state = Session.get('template');
    state.character.race = $(e.target).val();
    Session.set('template', state);
  },

  onChangeLevel: function(e) {
    var state = Session.get('template');
    state.character.level = parseInt($(e.target).val(), 10);
    Session.set('template', state);
  }

});