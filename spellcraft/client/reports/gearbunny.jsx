ReportGearBunny = ReactMeteor.createClass({

  templateName: 'ReportGearBunny',

  mixins: [ReportMixin],

  getDefaultProps: function() {
    return {
      expand: false
    }
  },

  getMeteorState: function() {
    var state = Session.get('meta');
    state.slots = Slots.find({ equipped: true }).fetch().map(function(slot) {
      slot.bonuses = Bonuses.find({ slot: slot.id, amount: { $gt: 0 } }).fetch();
      return slot;
    });
    state.skills = GetSkillsByClass(state.realm, state.class);
    var bonuses = _.flatten(_.pluck(state.slots, 'bonuses'));
    _.extend(
      state,
      this.getEffectTotals('Stat', BonusStat, bonuses), 
      this.getEffectTotals('Skill', state.skills, bonuses), 
      this.getEffectTotals('Cap Increase', BonusStatCap, bonuses), 
      this.getEffectTotals('Resist', BonusResist, bonuses), 
      this.getEffectTotals('Other Bonus', BonusOther, bonuses)
    );
    return state;
  },

  render: function() {
    return (
      <div>
        <p>DAOC Spellcraft Template Report</p>
        <p>Configuration Name : {this.state.name}</p>
        <p>Character Class : ({this.state.realm}) {this.state.class}</p>
        <p>Character Level : {this.state.level}</p>
        <p>Race : {this.state.race}</p>
        <br/>
        <p>&lt;-- Stats --&gt;</p>
        {this.output('Stat', 'Strength')}
        {this.output('Stat', 'Constitition')}
        {this.output('Stat', 'Dexterity')}
        {this.output('Stat', 'Quickness')}
        {this.output('Stat', 'Acuity')}
        {this.output('Stat', 'Hits')}
        {this.output('Stat', 'Power')}
        <br />
        <p>&lt;-- Stat Cap Increases --&gt;</p>
        {this.output('Cap Increase', 'Strength')}
        {this.output('Cap Increase', 'Constitition')}
        {this.output('Cap Increase', 'Dexterity')}
        {this.output('Cap Increase', 'Quickness')}
        {this.output('Cap Increase', 'Acuity')}
        {this.output('Cap Increase', 'Hits')}
        {this.output('Cap Increase', 'Power')}
        <br/>
        <p>&lt;-- Resists --&gt;</p>
        {this.output('Resist', 'Crush')}
        {this.output('Resist', 'Slash')}
        {this.output('Resist', 'Thrust')}
        {this.output('Resist', 'Heat')}
        {this.output('Resist', 'Cold')}
        {this.output('Resist', 'Matter')}
        {this.output('Resist', 'Energy')}
        {this.output('Resist', 'Body')}
        {this.output('Resist', 'Spirit')}
        <br/>
        <p>&lt;-- ToA Bonuses --&gt;</p>
        {this.output('Other Bonus', 'Archery and Casting Speed')}
        {this.output('Other Bonus', 'Archery and Spell Range')}
        {this.output('Other Bonus', 'Archery and Spell Damage')}
        {this.output('Other Bonus', 'Melee Combat Speed')}
        {this.output('Other Bonus', 'Melee Damage')}
        {this.output('Other Bonus', 'Style Damage')}
        {this.output('Other Bonus', 'Resist Pierce')}
        {this.output('Other Bonus', 'AF')}
        {this.output('Other Bonus', 'Stat Buff Effectiveness')}
        {this.output('Other Bonus', 'Stat Debuff Effectiveness')}
        {this.output('Other Bonus', 'Healing Effectiveness')}
        {this.output('Other Bonus', 'Duration of Spells')}
        {this.output('Other Bonus', '% Power Pool')}
        {this.output('Other Bonus', 'Fatigue')}
        <br/>
        <p>&lt;-- Skills --&gt;</p>
        {this.state.skills.map(function(effect, i){
          return this.output('Skill', effect, i);
        }.bind(this))}
        <br/>
        <p>&lt;== Equipment Info ==&gt;</p>
        <br/>
        {this.state.slots.map(function(slot){
          if(slot.bonuses.length){
            return (
              <div>
                <p>( {slot.name} ) : {slot.crafted ? slot.craftedItemName : slot.itemName}</p>
                {slot.bonuses.map(function(bonus){
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