ReportModal = ReactMeteor.createClass({

  templateName: 'ReportModal',

  getInitialState: function() {
    return {
      style: 0,
      visible: false
    }
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.modal)).modal({ show: false });
  },

  render: function() {
    return (
      <div ref="modal" className="modal fade report-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
              <label><input type="radio" name="style" value="0" checked={this.state.style == 0} onChange={this.onChangeStyle} />GearBunny</label>
              <label><input type="radio" name="style" value="1" checked={this.state.style == 1} onChange={this.onChangeStyle} />LOKI</label>
              <label><input type="radio" name="style" value="2" checked={this.state.style == 2} onChange={this.onChangeStyle} />Korts</label>
              <ul className="nav nav-tabs">
                <li className="active"><a href="#item" data-toggle="tab">Item Report</a></li>
                <li><a href="#craft" data-toggle="tab">Craft Report</a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="item">
                  {this.displayReport()}
                </div>
                <div className="tab-pane" id="craft">
                  
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  show: function() {
    $(this.getDOMNode()).modal('show');
    this.setState({ visible: true });
  },

  hide: function() {
    $(this.getDOMNode()).modal('hide');
    this.setState({ visible: false });
  },

  onChangeStyle: function(e){
    var val = parseInt($(e.target).val(), 10);
    this.setState({ style: val });
  },

  displayReport: function() {
    if(this.state.visible){
      if(this.state.style == 0){
        return <ReportGearBunny />
      } else if(this.state.style == 1){
        return <ReportLoki />
      } else if(this.state.style == 2){
        return <ReportKorts />
      }
    }

    return '';
  }

});