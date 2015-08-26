ReportGb = React.createClass({

  getDefaultProps: function() {
    return {
      expand: false,
      totals: {},
      meta: {}
    }
  },

  'Stat': function(effect, i) {
    return <div key={i}>{effect} : {this.props.totals['Stat ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Stat', effect)}</div>;
  },

  'Cap Increase': function(effect, i) {
    return <div key={i}>{effect} Cap : {this.props.totals['Cap Increase ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Cap Increase', effect)}</div>;
  },

  'Resist': function(effect, i) {
    var racial = GetRacialResist(this.props.meta.realm, this.props.meta.race, effect);
    return <div key={i}>{effect} Resist : {this.props.totals['Resist ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Resist', effect)}</div>;
  },

  'Other Bonus': function(effect, i) {
    return <div key={i}>{effect} : {this.props.totals['Other Bonus ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Other Bonus', effect)}</div>;
  },

  'Skill': function(effect, i) {
    return <div key={i}>{effect} : {this.props.totals['Skill ' + effect]} / {GetCeiling(this.props.totals, this.props.meta.level, 'Skill', effect)}</div>;
  },

  output: function(type, effect, i){
    return this.props.totals[type + ' ' + effect] ? this[type](effect, i) : '';
  },

  render: function() {
    return (
      <div>
        <p>daocspellcraft.com Template Report</p>
        <p>Configuration Name : {this.props.meta.name}</p>
        <p>Class : ({this.props.meta.realm}) {this.props.meta.class}</p>
        <p>Level : {this.props.meta.level}</p>
        <p>Race : {this.props.meta.race}</p>
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
        {this.props.skills.map(this.output.bind(this, 'Skill'))}
        <br/>
        <p>&lt;== Equipment Info ==&gt;</p>
        <br/>
        {Slots.find().map(function(slot, i){
          var bonuses = Bonuses.find({ slotid: slot.id, amount: { $gt: 0 } }).fetch();
          if(bonuses.length){
            return (
              <div key={i}>
                <p>( {slot.slot} ) : {slot.crafted ? slot.craftedItemName : slot.itemName}</p>
                {bonuses.map(function(bonus, i){
                  var effectSuffix = bonus.type == 'Cap Increase' ? '(Cap Increase)' : '';
                  var amountSuffix = bonus.type == 'Resist' ? '%' : '';
                  var gem = GetGemName(bonus.type, bonus.effect, bonus.amountIndex);
                  if(slot.crafted){
                    return <p key={i}>{bonus.effect} {effectSuffix}: {bonus.amount}{amountSuffix} ( {gem} )</p>;
                  } else if(this.props.expand){
                    return <p key={i}>{bonus.effect} {effectSuffix}: {bonus.amount}{amountSuffix}</p>;
                  }
                }.bind(this))}
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