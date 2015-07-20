ReportCrafting = ReactMeteor.createClass({

  templateName: 'ReportCrafting',

  mixins: [ReportMixin],

  getMeteorState: function() {
    var gemArr = [];
    var state = Session.get('meta');
    state.slots = Slots.find({ crafted: true }).fetch().map(function(slot) {
      slot.bonuses = Bonuses.find({ slot: slot.id, amountIndex: { $gt: 0 } }).fetch();
      return slot;
    });
    state.gems = {};
    state.dusts = {};
    state.liquids = {};

    _.flatten(_.pluck(state.slots, 'bonuses')).map(function(bonus) {
      var gem = GemsOrdered[bonus.amountIndex - 1];
      if(gem){
        gemArr.push(gem);
        var gem = GetGemName(bonus.type, bonus.effect, bonus.amountIndex, true);
        if(gem && gem.length == 3){
          var mult = [];
          var qty = 0;
          var dust = Dusts[gem[2]];
          var liquid = Liquids[gem[1]];

          mult = DustMultiplier[bonus.effect] || DustMultiplier[bonus.type];
          qty = ((bonus.amountIndex - 1) * mult[0]) + mult[1];
          state.dusts[dust] = state.dusts[dust] ? state.dusts[dust] + qty : qty;

          mult = LiquidMultiplier[bonus.effect] || LiquidMultiplier[bonus.type];
          qty = ((bonus.amountIndex - 1) * mult[0]) + mult[1];
          Liquids[gem[1]].map(function(liquid){
            state.liquids[liquid] = state.liquids[liquid] ? state.liquids[liquid] + qty : qty;
          });
        }
      }
    });

    gemArr.map(function(gem){
      state.gems[gem] = state.gems[gem] ? state.gems[gem] + 1 : 1;
    });

    return state;
  },

  render: function() {
    return (
      <div>
        <br/>
        <a className="btn btn-default" href={this.getMojoURI()}>Export to Mojo</a>
        <br/>
        <br/>
        <p><b>Items</b></p>
        {this.state.slots.map(function(slot, i) {
          if(slot.bonuses.length){
            return (
              <div key={i}>
                <p>{slot.name} - {slot.craftedItemName}</p>
                {slot.bonuses.map(function(bonus) {
                  return <p>{GetGemName(bonus.type, bonus.effect, bonus.amountIndex)}</p>
                })}
                <br />
              </div>
            );
          }
        })}
        <p><b>Materials</b></p>
        {GemsOrdered.map(function(g, i) {
          return this.state.gems[g] ? <p key={i}>{this.state.gems[g]} {g}</p> : '';
        }.bind(this))}
        <br/>
        {DustsOrdered.map(function(d, i) {
          return this.state.dusts[d] ? <p key={i}>{this.state.dusts[d]} {d}</p> : '';
        }.bind(this))}
        <br/>
        {LiquidsOrdered.map(function(l, i) {
          return this.state.liquids[l] ? <p key={i}>{this.state.liquids[l]} {l}</p> : '';
        }.bind(this))}
      </div>
    );
  },

  getMojoURI: function() {
    var uri = 'mojo.daoc:gems sc.excidio.net R' + this.state.realm.toUpperCase();
    var params = [];
    this.state.slots.map(function(slot) {
      if(slot.bonuses.length){
        params.push('L' + slot.name);
        slot.bonuses.map(function(bonus) {
          params.push('G' + GetGemName(bonus.type, bonus.effect, bonus.amountIndex));
        });
      }
    });

    return params.length ? (uri + ':' + params.join(':')) : '';
  }

});