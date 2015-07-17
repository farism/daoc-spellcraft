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
    name: slot.name,
    crafted: slot.id >= 9,
    itemName: '',
    craftedItemName: 'Crafted',
    equipped: true,
    level: 51,
    imbueArr: [0,0,0,0],
    imbuePoints: 0,
    imbueTotal: 32
  });

  _.range(0, 10).map(function(i){
    Bonuses.insert({
      slot: slot.id,
      index: i,
      type: '',
      effect: '',
      amount: 0,
      imbue: 0,
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
        <button onClick={this.onClickReport}>Report</button>
        <div className="tabs">
          {Slots.find().map(function(slot, i){
            return <button className={i == 9 ? 'break' : ''} onClick={this.onClickSlot.bind(this, i)} key={i}>{slot.name}</button>;
          }.bind(this))}
        </div>
        <div className="slots">
          {Slots.find().map(function(slot, i){
            if(slot.id == this.state.active){
              return <Slot id={slot.id} onClickEnhancedBonus={this.onClickEnhancedBonus} key={i} />;
            }
          }.bind(this))}
        </div>
        <ReportModal ref="report" />
        <EnhancedModal ref="enhancedbonus" slot={this.state.active} />
      </div>
    );
  },

  onClickSlot: function(i) {
    this.setState({ active: i });
  },

  onClickReport: function() {
    this.refs.report.show();
  },

  onClickEnhancedBonus: function(slot) {
    this.refs.enhancedbonus.show();
  },

});