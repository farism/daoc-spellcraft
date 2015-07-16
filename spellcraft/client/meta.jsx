Meta = ReactMeteor.createClass({

  templateName: 'Meta',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function(){
    return Session.get('meta');
  },

  componentDidUpdate: function(){
    Session.set('meta', this.state);
  },

  render: function() {
    return (
      <div className="meta">

        <input type="text" placeholder="Name" valueLink={this.linkState('name')} />

        <select value={this.state.realm} onChange={this.onChangeRealm}>
          {Realms.map(function(realm, i){
            return <option value={realm.name} key={i}>{realm.name}</option>
          })}
        </select>

        <select value={this.state.class} onChange={this.onChangeClass}>
          {GetClassesByRealm(this.state.realm).map(function(realm, i){
            return <option value={realm.name} key={i}>{realm.name}</option>
          })}
        </select>

        <select value={this.state.race} onChange={this.onChangeRace}>
          {GetRacesByClass(this.state.realm, this.state.class).map(function(realm, i){
            return <option value={realm.name} key={i}>{realm.name}</option>
          })}
        </select>

        <input type="number" min="1" max="50" maxLength="2" valueLink={this.linkState('level')} />

        <input type="text" valueLink={this.linkState('name')} />

      </div>
    );
  },

  onChangeRealm: function(e) {
    var state = {};
    state.realm = $(e.target).val();
    state.class = GetClassesByRealm(state.realm)[0].name;
    state.race = GetRacesByClass(state.realm, state.class)[0].name;
    this.setState(state);
  },

  onChangeClass: function(e) {
    var state = {};
    state.class = $(e.target).val();
    state.race = GetClassesByRealm(this.state.realm, state.class)[0];
    this.setState(state);
  },

  onChangeRace: function(e) {
    this.setState({ race: $(e.target).val() });
  }

});