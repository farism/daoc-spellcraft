ReportGb = ReactMeteor.createClass({

  templateName: 'ReportGb',

  mixins: [ReportMixin],

  getDefaultProps: function() {
    return {
      expand: false
    }
  },

  'Stat': function(effect) {
    return <div><label>{effect} : </label><span>{this.state.totals['Stat ' + effect]} / </span>z</div>;
  },

  'Cap Increase': function(effect) {
    return <div><label>{effect} Cap : </label><span>{this.state.totals['Cap Increase ' + effect]}</span><span></span></div>;
  },

  'Resist': function(effect) {
    var racial = GetRacialResist(this.state.character.realm, this.state.character.race, effect);
    return <div><label>{effect} Resist: </label><span>{this.state.totals['Resist ' + effect]}</span><span>{racial}</span></div>;
  },

  'Other Bonus': function(effect) {
    return <div><label>{effect} : </label><span>{this.state.totals['Other Bonus ' + effect]}</span></div>;
  },

  'Skill': function(effect) {
    return <div><label>{effect}: </label><span>{this.state.totals['Skill ' + effect]}</span></div>;
  },

  output: function(type, effect){
    return this.state.totals[type + ' ' + effect] ? this[type](effect) : '';
  },

  render: function() {
    return (
      <div>
        <p>DAOC Spellcraft Template Report</p>
        <p>Configuration Name : {this.state.character.name}</p>
        <p>Character Class : ({this.state.character.realm}) {this.state.character.class}</p>
        <p>Character Level : {this.state.character.level}</p>
        <p>Race : {this.state.character.race}</p>
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
        {Slots.find().map(function(slot){
          var bonuses = Bonuses.find({ slotid: slot._id, amount: { $gt: 0 } });
          if(bonuses.count()){
            return (
              <div>
                <p>( {slot.name} ) : {slot.crafted ? slot.craftedItemName : slot.itemName}</p>
                {bonuses.map(function(bonus){
                  return <p>{bonus.amount} {bonus.effect}</p>;
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