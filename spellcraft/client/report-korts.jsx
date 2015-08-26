ReportKorts = React.createClass({

  getDefaultProps: function() {
    return {
      expand: false,
      totals: {},
      meta: {}
    }
  },

  'Stat': function(effect, i) {
    return <div key={i}>{effect.substr(0,3).toUpperCase()}: {this.props.totals['Stat ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Stat', effect)}</div>;
  },

  'Resist': function(effect, i) {
    var racial = GetRacialResist(this.props.meta.realm, this.props.meta.race, effect);
    return <div key={i}>{effect}: {this.props.totals['Resist ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Resist', effect)}</div>;
  },

  'Other Bonus': function(effect, i) {
    return <div key={i}>{this.props.totals['Other Bonus ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Other Bonus', effect)} {effect}</div>;
  },

  'Skill': function(effect, i) {
    return <div key={i}>{this.props.totals['Skill ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Skill', effect)} {effect}</div>;
  },

  output: function(type, effect, i){
    return this.props.totals[type + ' ' + effect] ? this[type](effect, i) : '';
  },

  render: function() {
    return (
      <div>
        <p>daocspellcraft.com Template Report</p>
        <p>Class: {this.props.meta.class}</p>
        <p>Level: {this.props.meta.level}</p>
        <p>Race: {this.props.meta.race}</p>
        <br/>
        <p>Stats</p>
        <p>------------------------------------------------------------------------</p>
        {BonusStat.map(this.output.bind(this, 'Stat'))}
        <br/>
        <p>Resists</p>
        <p>------------------------------------------------------------------------</p>
        {BonusResist.map(this.output.bind(this, 'Resist'))}
        <br/>
        <p>Skills</p>
        <p>------------------------------------------------------------------------</p>
        {this.props.skills.map(this.output.bind(this, 'Skill'))}
        <br/>
        <p>Other Bonuses</p>
        <p>------------------------------------------------------------------------</p>
        {BonusOther.map(this.output.bind(this, 'Other Bonus'))}
        <br/>
        <p>Piece Listing</p>
        <p>------------------------------------------------------------------------</p>
        {Slots.find().map(function(slot, i){
          var bonuses = Bonuses.find({ slotid: slot.id, amount: { $gt: 0 } }).fetch();
          if(bonuses.length){
            var imbue = CalculateSlotImbue(bonuses);
            return (
              <div key={i}>
                <p>{slot.slot}</p>
                <p>Name: {slot.crafted ? slot.craftedItemName : slot.itemName}</p>
                {slot.crafted ? (
                  <p>Imbue Points: {imbue.points.toFixed(1)} of {GetImbueCeiling(slot.level).toFixed(1)}</p>
                ) : ''}
                {bonuses.map(function(bonus, i){
                  var suffix = bonus.type == 'Resist' || bonus.type == 'Cap Increase' ? bonus.effect : '';
                  var gem = GetGemName(bonus.type, bonus.effect, bonus.amountIndex);
                  if(slot.crafted){
                    return <p key={i}>{i < 4 ? 'Gem ' + (i + 1) : 'Slot ' + (i + 1)}: {bonus.amount} {bonus.effect} {suffix} - {gem}</p>;
                  } else if(this.props.expand){
                    return <p key={i}>Slot {i+1}: {bonus.amount} {bonus.effect} {suffix}</p>;
                  }
                }.bind(this))}
                <br />
              </div>
            );
          }
        }.bind(this))}
        <br/>
      </div>
    );
  }

});