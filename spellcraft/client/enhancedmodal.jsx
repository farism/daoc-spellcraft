EnhancedModal = ReactMeteor.createClass({

  templateName: 'EnhancedModal',

  getDefaultProps: function() {
    return {
      slot: null
    }
  },

  getInitialState: function() {
    return {
      selected: -1
    }
  },

  getMeteorState: function() {
    var state = Session.get('meta');
    state.gear = GetEnhancedBonusesBySlot(state.realm, state.class, this.props.slot);
    return state;
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.modal)).modal({ show: false });
  },

  render: function() {
    return (
      <div ref="modal" className="modal fade enhanced-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Select Enhanced Bonus</h4>
            </div>
            <div className="modal-body">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Bonus</th>
                  </tr>
                  {this.state.gear.map(function(gear, i){
                    return (
                      <tr className={this.state.selected == i ? 'selected' : ''} onClick={this.onClickGear.bind(this, i)} onDoubleClick={this.onDoubleClickGear.bind(this, i)} key={i}>
                        <td>{gear.name}</td>
                        <td>{gear.value}</td>
                      </tr>
                    );
                  }.bind(this))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.onClickUse}>Use Selected</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  show: function() {
    $(this.getDOMNode()).modal('show');
  },

  hide: function() {
    $(this.getDOMNode()).modal('hide');
    this.setState({ selected: -1 });
  },

  onClickGear: function(i, e){
    this.setState({ selected: i });
  },

  onDoubleClickGear: function(i, e){
    this.setEnhancedBonus(this.state.gear[i]);
    this.hide();
  },

  onClickUse: function(e){
    this.setEnhancedBonus(this.state.gear[this.state.selected]);
  },

  setEnhancedBonus: function(gear){
    var arr = gear.value.split(' ');
    var type = '';
    var amount = parseInt(arr[0], 10);
    var effect = arr.slice(1).join(' ').replace(' Cap', '');

    if(amount == 15){
      type = 'Stat';
    } else if(amount == 3){
      type = 'Skill';
    } else if(amount == 2 || amount == 5 || amount == 10){
      type = gear.value.indexOf('Cap') >= 0 ? 'Cap Increase' : 'Other Bonus';
    } else if(amount == 40){
      type = gear.value.indexOf('Cap') >= 0 ? 'Cap Increase' : 'Stat';
    }

    Slots.update({ id: this.props.slot }, { $set: { enhanced: true } });
    Bonuses.update({ slot: this.props.slot, index: 4 }, { $set: { type: type, effect: effect, amount: amount } });
  }

});