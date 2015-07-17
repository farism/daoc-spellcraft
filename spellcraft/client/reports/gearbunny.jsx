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
    var slots = Slots.find({ equipped: true }).fetch();
    var bonuses = Bonuses.find({ slot: { $in: _.pluck(slots, 'id') } }).fetch();
    var stats = this.getEffectTotals('Stat', BonusStat, bonuses);
    var statcaps = this.getEffectTotals('Cap Increase', BonusStatCap, bonuses);
    var resists = this.getEffectTotals('Resist', BonusResist, bonuses);
    var other = this.getEffectTotals('Other Bonus', BonusOther, bonuses);
    _.extend(state, stats, statcaps, resists, other);
    state.slots = slots;
    state.bonuses = bonuses;
    return state;
  },

  render: function() {
    return (
      <div>
        <br/>
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
        <br/>
        <p>&lt;== Equipment Info ==&gt;</p>
        <br/>
        <p>Weapons Equipped</p>
        <br/>
        <p>&lt;== Total Spellcraft Materials Needed ==&gt;</p>
        <br/>
        <p>&lt;== End Report ==&gt;</p>
      </div>
    );
  }

});