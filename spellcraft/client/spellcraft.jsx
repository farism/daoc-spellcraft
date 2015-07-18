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
  Slots.insert(GetDefaultSlot(slot));
  _.range(0, 10).map(function(i){
    Bonuses.insert(GetDefaultBonus(slot, i));
  });
});

Spellcraft = ReactMeteor.createClass({

  templateName: 'Spellcraft',

  getInitialState: function() {
    return {
      active: 9
    }
  },


  componentDidMount: function() {
    window.onbeforeunload = function() {
      //return "Data will be lost if you leave the page, are you sure?";
    };
  },

  render: function() {
    return (
      <div id="app">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <div id="actions">
                <button className="btn btn-default" onClick={this.onClickReport}>Report</button>
                <button className="btn btn-default" onClick={this.onClickSave}>Save</button>
              </div>
              <Meta />
              <Summary />
            </div>
            <div className="col-sm-9">
              <ul id="tabs" className="nav nav-pills">
                {JewelSlots.map(function(slot, i){
                  return (
                    <li className={this.state.active == slot.id ? 'active' : ''} onClick={this.onClickSlot.bind(this, slot.id)} key={i}>
                      <a>{slot.name}</a>
                    </li>
                  );
                }.bind(this))}
                <div className="clear" />
                {CraftedSlots.map(function(slot, i){
                  return (
                    <li className={this.state.active == slot.id ? 'active' : ''} onClick={this.onClickSlot.bind(this, slot.id)} key={i}>
                      <a>{slot.name}</a>
                    </li>
                  );
                }.bind(this))}
              </ul>
              <br/>
              <div id="slots">
                {Slots.find().map(function(slot, i){
                  if(slot.id == this.state.active){
                    return <Slot id={slot.id} onClickEnhanceItem={this.onClickEnhanceItem} key={i} />;
                  }
                }.bind(this))}
              </div>
            </div>
          </div>
        </div>
        <ReportModal ref="report" />
        <EnhancedModal ref="enhance" slot={this.state.active} />
      </div>
    );
  },

  onClickReport: function() {
    this.refs.report.show();
  },

  onClickSave: function(e) {

  },

  onClickSlot: function(id) {
    this.setState({ active: id });
  },

  onClickEnhanceItem: function(slot) {
    this.refs.enhance.show();
  },

});