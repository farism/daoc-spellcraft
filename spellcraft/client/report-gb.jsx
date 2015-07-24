ReportGb = ReactMeteor.createClass({

  templateName: 'ReportGb',

  mixins: [ReportMixin],

  getDefaultProps: function() {
    return {
      expand: false
    }
  },

  'Stat': function(effect) {
    return <div>{effect} : {this.state.totals['Stat ' + effect]} / {this.getCeiling('Stat', effect)}</div>;
  },

  'Cap Increase': function(effect) {
    return <div>{effect} Cap : {this.state.totals['Cap Increase ' + effect]} / {this.getCeiling('Cap Increase', effect)}</div>;
  },

  'Resist': function(effect) {
    var racial = GetRacialResist(this.state.template.realm, this.state.template.race, effect);
    return <div>{effect} Resist : {this.state.totals['Resist ' + effect]}</div>;
  },

  'Other Bonus': function(effect) {
    return <div>{effect} : {this.state.totals['Other Bonus ' + effect]}</div>;
  },

  'Skill': function(effect) {
    return <div>{effect} : {this.state.totals['Skill ' + effect]}</div>;
  },

  output: function(type, effect){
    return this.state.totals[type + ' ' + effect] ? this[type](effect) : '';
  },

  render: function() {
    return (
      <div>
        <p>DAOC Spellcraft Template Report</p>
        <p>Configuration Name : {this.state.template.name}</p>
        <p>template Class : ({this.state.template.realm}) {this.state.template.class}</p>
        <p>template Level : {this.state.template.level}</p>
        <p>Race : {this.state.template.race}</p>
        <br/>
        <p>&lt;-- Stats --&gt;</p>
        {BonusStat.map(this.output.bind(this, 'Stat'))}
        <br />
        <p>&lt;-- Stat Cap Increases --&gt;</p>
        {BonusStat.map(this.output.bind(this, 'Cap Increase'))}
        <br/>
        <p>&lt;-- Resists --&gt;</p>
        {BonusResist.map(this.output.bind(this, 'Resist'))}
        <br/>
        <p>&lt;-- ToA Bonuses --&gt;</p>
        {BonusOther.map(this.output.bind(this, 'Other Bonus'))}
        <br/>
        <p>&lt;-- Skills --&gt;</p>
        {this.state.skills.map(this.output.bind(this, 'Skill'))}
        <br/>
        <p>&lt;== Equipment Info ==&gt;</p>
        <br/>
        {Slots.find().map(function(slot, i){
          var bonuses = Bonuses.find({ slotid: slot._id, amount: { $gt: 0 } });
          if(bonuses.count()){
            return (
              <div key={i}>
                <p>( {slot.slot} ) : {slot.crafted ? slot.craftedItemName : slot.itemName}</p>
                {bonuses.map(function(bonus, i){
                  return <p key={i}>{bonus.amount} {bonus.effect} {bonus.type == 'Cap Increase' ? 'Cap' : ''}</p>;
                })}
                <br />
              </div>
            );
          }
        }.bind(this))}
        <br/>
        <p>&lt;== End Report ==&gt;</p>
      </div>
    );
  }

});