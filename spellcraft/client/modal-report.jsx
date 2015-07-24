ModalReport = ReactMeteor.createClass({

  templateName: 'ModalReport',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      style: 0,
      visible: false,
      expand: false
    }
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.modal)).modal({ show: false });
  },

  render: function() {
    return (
      <div ref="modal" id="modal-report" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Template Report</h4>
            </div>
            <div className="modal-body">
              <label><input type="radio" name="style" value="0" checked={this.state.style == 0} onChange={this.onChangeStyle} />GearBunny</label>
              <label><input type="radio" name="style" value="1" checked={this.state.style == 1} onChange={this.onChangeStyle} />LOKI</label>
              <label><input type="radio" name="style" value="2" checked={this.state.style == 2} onChange={this.onChangeStyle} />Korts</label>
              <label><input type="checkbox" checkedLink={this.linkState('expand')}/>Expand dropped bonuses</label>
              <br/>
              <ul className="nav nav-tabs">
                <li className="active"><a href="#item" data-toggle="tab">Item Report</a></li>
                <li><a href="#craft" data-toggle="tab">Craft Report</a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="item">
                  <br/>
                  {this.displayReport()}
                </div>
                <div className="tab-pane" id="craft">
                  {this.displayReportCrafting()}
                </div>
              </div>
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
        return <ReportGb expand={this.state.expand} />
      } else if(this.state.style == 1){
        return <ReportLoki expand={this.state.expand} />
      } else if(this.state.style == 2){
        return <ReportKorts expand={this.state.expand} />
      }
    }

    return '';
  },

  displayReportCrafting: function(){
    if(this.state.visible){
      return <ReportCrafting />
    }
  }

});