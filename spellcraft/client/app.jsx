App = ReactMeteor.createClass({

  templateName: 'App',

  startMeteorSubscriptions: function() {
    Meteor.subscribe('templates');
  },

  getMeteorState: function() {
    return Templates.find().fetch()[0] || {};
  },

  render: function() {
    return (
      <div className="app">
        <input placeholder="Name" />
        <select>
          {Realms.map(function(realm, i){
            return <option value={realm.name} key={i}>{realm.name}</option>
          })}
        </select>
        <select>

        </select>
        <select>
        </select>
        {AllSlots.map(function(slot, i){
          return <Slot slot={slot} key={i} />;
        }.bind(this))}
      </div>
    );
  },

  onChangeBonus: function(){

  }

});