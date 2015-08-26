ModalDuplicate = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      visible: false,
    }
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.modal)).modal({ show: false });
  },

  render: function() {
    return (
      <div ref="modal" id="modal-duplicate" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Duplicate Template</h4>
            </div>
            <div className="modal-body clearfix">
              <input ref="input" type="text" autofocus valueLink={this.linkState('name')} onKeyDown={this.onKeyDown} placeholder="New template name" />
              <button className="btn btn-default" onClick={this.onClickSubmit}>Save Template</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  onKeyDown: function(e) {
    if(e.keyCode == 13) this.onClickSubmit();
  },

  onClickSubmit: function(e) {
    this.state.cb(this.state.name);
    this.hide();
  },

  show: function(name, cb) {
    this.setState({ name: name + ' Copy', cb: cb || function(){} });
    $(this.getDOMNode()).modal('show');
  },

  hide: function() {
    $(this.getDOMNode()).modal('hide');
  },

});