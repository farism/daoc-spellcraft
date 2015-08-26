ModalReport = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      style: parseInt(Cookie.get('reportstyle'), 10) || 0,
      expand: Boolean(Cookie.get('expandreport')) || false,
      visible: false,
    }
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.modal)).modal({ show: false }).on('hidden.bs.modal', function(){
      this.setState({ visible: false });
    }.bind(this));

    ZeroClipboard.config({ swfPath: '/ZeroClipboard.swf' });
    this.client = new ZeroClipboard();
    this.client.clip(React.findDOMNode(this.refs.clip));
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
              <label><input type="checkbox" checked={this.state.expand} onChange={this.onChangeExpand} />Expand dropped bonuses</label>
              <br/>
              <ul className="nav nav-tabs">
                <li className="active"><a href="#item" data-toggle="tab">Item Report</a></li>
                <li><a href="#craft" data-toggle="tab">Craft Report</a></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="item">
                  <br/>
                  <a ref="clip" className="btn btn-default" onMouseOver={this.onHoverClipboard}>Copy to Clipboard</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a ref="save" className="btn btn-default" onMouseOver={this.onHoverSave}>Save as txt</a>
                  <br/>
                  <br/>
                  <div ref="report">
                    {this.displayReport()}
                  </div>
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
    Cookie.set('reportstyle', val);
    this.setState({ style: val });
  },

  onChangeExpand: function(e){
    Cookie.set('expandreport', e.target.checked);
    this.setState({ expand: e.target.checked });
  },

  onHoverClipboard: function() {
    this.client.setText(GetInnerText(React.findDOMNode(this.refs.report)));
  },

  onHoverSave: function() {
    var a = React.findDOMNode(this.refs.save);
    var file = new Blob([GetInnerText(React.findDOMNode(this.refs.report))], { type: 'text/plain' });
    a.href = URL.createObjectURL(file);
    a.download = (Session.get('name') || 'template') + '.txt';
  },

  displayReport: function() {
    if(this.state.visible){
      if(this.state.style == 0){
        return <ReportGb {...this.props} expand={this.state.expand} />
      } else if(this.state.style == 1){
        return <ReportLoki {...this.props} expand={this.state.expand} />
      } else if(this.state.style == 2){
        return <ReportKorts {...this.props} expand={this.state.expand} />
      }
    }

    return '';
  },

  displayReportCrafting: function(){
    if(this.state.visible){
      return <ReportCrafting {...this.props} />
    }
  }

});