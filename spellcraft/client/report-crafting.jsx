ReportCrafting = React.createClass({

  componentDidMount: function() {
    ZeroClipboard.config({ swfPath: '/ZeroClipboard.swf' });
    this.client = new ZeroClipboard();
    this.client.clip(React.findDOMNode(this.refs.clip));
  },

  render: function() {
    var gemArr = [];
    var gems = {};
    var dusts = {};
    var liquids = {};

    var slots = Slots.find({ crafted: true }).fetch().map(function(slot) {
      slot.bonuses = Bonuses.find({ slotid: slot.id, amountIndex: { $gt: 0 } }).fetch();
      return slot;
    });

    _.flatten(_.pluck(slots, 'bonuses')).map(function(bonus) {
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
          dusts[dust] = dusts[dust] ? dusts[dust] + qty : qty;

          mult = LiquidMultiplier[bonus.effect] || LiquidMultiplier[bonus.type];
          qty = ((bonus.amountIndex - 1) * mult[0]) + mult[1];
          Liquids[gem[1]].map(function(liquid){
            liquids[liquid] = liquids[liquid] ? liquids[liquid] + qty : qty;
          });
        }
      }
    });

    gemArr.map(function(gem){
      gems[gem] = gems[gem] ? gems[gem] + 1 : 1;
    });

    return (
      <div>
        <br/>
        <a ref="clip" className="btn btn-default" onMouseOver={this.onHoverClipboard}>Copy to Clipboard</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a className="btn btn-default" href={this.getMojoURI(slots)}>Export to Mojo</a>
        <br/>
        <br/>
        <div ref="report">
          <p><b>Items</b></p>
          {slots.map(function(slot, i) {
            if(slot.bonuses.length){
              return (
                <div key={i}>
                  <p>{slot.slot} - {slot.craftedItemName}</p>
                  {slot.bonuses.map(function(bonus, j) {
                    return <p key={j}>{GetGemName(bonus.type, bonus.effect, bonus.amountIndex)}</p>
                  })}
                  <br />
                </div>
              );
            }
          })}
          <p><b>Materials</b></p>
          {GemsOrdered.map(function(g, i) {
            return gems[g] ? <p key={i}>{gems[g]} {g}</p> : '';
          }.bind(this))}
          <br/>
          {DustsOrdered.map(function(d, i) {
            return dusts[d] ? <p key={i}>{dusts[d]} {d}</p> : '';
          }.bind(this))}
          <br/>
          {LiquidsOrdered.map(function(l, i) {
            return liquids[l] ? <p key={i}>{liquids[l]} {l}</p> : '';
          }.bind(this))}
        </div>
      </div>
    );
  },

  getMojoURI: function(slots) {
    var uri = 'mojo.daoc:gems sc.excidio.net R' + this.props.meta.realm.toUpperCase();
    var params = [];
    slots.map(function(slot) {
      if(slot.bonuses.length){
        params.push('L' + slot.name);
        slot.bonuses.map(function(bonus) {
          params.push('G' + GetGemName(bonus.type, bonus.effect, bonus.amountIndex));
        });
      }
    });

    return params.length ? (uri + ':' + params.join(':')) : '';
  },

  onHoverClipboard: function() {
    this.client.setText(GetInnerText(React.findDOMNode(this.refs.report)));
  }

});