var tiers = ['Cloth','Leather','Studded','Chain','Plate'];

ModalEnhanced = React.createClass({

  getInitialState: function() {
    return {
      selected: null,
      gear: GetEnhancedBonusesBySlot(this.props.meta.realm, this.props.meta.class, this.props.slot.id)
    }
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.modal)).modal({ show: false });
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      gear: GetEnhancedBonusesBySlot(nextProps.meta.realm, nextProps.meta.class, nextProps.slot.id)
    })
  },

  render: function() {
    return (
      <div ref="modal" id="modal-enhanced" className="modal fade">
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
                      <tr className={('tier-' + gear.tier) + (i == this.state.selected ? ' selected' : '')} onClick={this.onClick.bind(this, i)} onDoubleClick={this.onDoubleClick.bind(this, i)} key={i}>
                        <td>{tiers[gear.tier]}</td>
                        <td>{gear.name}</td>
                        <td>{gear.value}</td>
                      </tr>
                    );
                  }.bind(this))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              {this.state.selected ? (
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.onClickUse}>Use Selected</button>
              ) : ''}
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  show: function() {
    this.setState({ selected: null });
    $(this.getDOMNode()).modal('show');
  },

  hide: function() {
    $(this.getDOMNode()).modal('hide');
  },

  onClick: function(i, e){
    this.setState({ selected: i });
  },

  onDoubleClick: function(i, e){
    this.setEnhancedBonus(this.state.gear[i]);
    this.hide();
  },

  onClickUse: function(e){
    this.setEnhancedBonus(this.state.gear[this.state.selected]);
  },

  setEnhancedBonus: function(gear){
    if(!gear){
      return;
    }

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

    this.props.onSelect(gear.name, { type: type, effect: effect, amount: amount });
  }

});