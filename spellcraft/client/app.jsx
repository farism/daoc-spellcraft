Slots = new Mongo.Collection(null);

Bonuses = new Mongo.Collection(null);

Session.set('meta', {
  name: '',
  realm: 'Albion',
  class: 'Armsman',
  race: 'Avalonian',
  level: 50,
  rank: '1L1'
});

AllSlots.map(function(slot){
  Slots.insert({
    id: slot.id,
    slot: slot.value,
    crafted: slot.id >= 9,
    itemName: '',
    craftedItemName: 'Crafted',
    equipped: true,
    level: 51,
    imbueTotal: 32
  });

  _.range(0, 10).map(function(i){
    Bonuses.insert({
      slot: slot.id,
      index: i,
      type: '',
      effect: '',
      amount: 0,
      gem: ''
    });
  });
});

App = ReactMeteor.createClass({

  templateName: 'App',

  getInitialState: function() {
    return {
      active: 9
    }
  },

  render: function() {
    return (
      <div className="app">
        <Meta />
        <Summary />
        {Slots.find().map(function(slot, i){
          return <button onClick={this.onClickSlot.bind(this, i)} key={i}>{slot.slot}</button>;
        }.bind(this))}
        {Slots.find().map(function(slot, i){
          if(slot.id == this.state.active){
            return <Slot id={slot.id} key={i} />;
          }
        }.bind(this))}
      </div>
    );
  },

  onClickSlot: function(i) {
    this.setState({ active: i });
  }

});