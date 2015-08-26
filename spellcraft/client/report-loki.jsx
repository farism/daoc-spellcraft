ReportLoki = React.createClass({

  getDefaultProps: function() {
    return {
      expand: false,
      totals: {},
      meta: {}
    }
  },

  'Stat': function(effect, i) {
    return <div key={i}>{effect}: {this.props.totals['Stat ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Stat', effect)}</div>;
  },

  'Cap Increase': function(effect, i) {
    return <div key={i}>{effect}: {this.props.totals['Cap Increase ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Cap Increase', effect)}</div>;
  },

  'Resist': function(effect, i) {
    var racial = GetRacialResist(this.props.meta.realm, this.props.meta.race, effect);
    return <div key={i}>{effect}: {this.props.totals['Resist ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Resist', effect)}</div>;
  },

  'Other Bonus': function(effect, i) {
    return <div key={i}>{effect}: {this.props.totals['Other Bonus ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Other Bonus', effect)}</div>;
  },

  'Skill': function(effect, i) {
    return <div key={i}>{effect}: {this.props.totals['Skill ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Skill', effect)}</div>;
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
        <p>Statistic</p>
        {BonusStat.map(this.output.bind(this, 'Stat'))}
        <br />
        <p>Skill</p>
        {this.props.skills.map(this.output.bind(this, 'Skill'))}
        <br/>
        <p>Resistance</p>
        {BonusResist.map(this.output.bind(this, 'Resist'))}
        <br/>
        <p>TOA Bonuses</p>
        {BonusOther.map(this.output.bind(this, 'Other Bonus'))}
        <br/>
        <p>Cap Increase</p>
        {BonusStat.map(this.output.bind(this, 'Cap Increase'))}
        <br/>
        <br/>
        {Slots.find().map(function(slot, i){
          var bonuses = Bonuses.find({ slotid: slot.id, amount: { $gt: 0 } }).fetch();
          if(bonuses.length){
            var imbue = CalculateSlotImbue(bonuses);
            return (
              <div key={i}>
                <p>{slot.slot}  ({slot.crafted ? slot.craftedItemName : slot.itemName}): </p>
                {slot.crafted ? (
                  <p>Imbue: {imbue.points.toFixed(1)} / {GetImbueCeiling(slot.level).toFixed(1)}</p>
                ) : ''}
                {bonuses.map(function(bonus, i){
                  if(slot.crafted || (!slot.crafted && this.props.expand)){
                    return <p key={i}>{bonus.amount} {bonus.effect} {bonus.type == 'Resist' ? 'Resist' : ''} {bonus.type == 'Cap Increase' ? 'Cap' : ''}</p>;
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