ModalLoad = ReactMeteor.createClass({

  templateName: 'ModalLoad',

  getInitialState: function() {
    return {
      cb: function(){}
    }
  },

  getMeteorState: function() {
    return {
      templates: Templates.find().fetch()
    }
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.modal)).modal({ show: false });
  },

  render: function() {
    return (
      <div ref="modal" id="load-modal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Load Template</h4>
            </div>
            <div className="modal-body">
              <table>
                <tr>
                  <th width="50%">Template Name</th>
                  <th width="25%">Level</th>
                  <th width="25%">Class</th>
                </tr>
                {this.state.templates.map(function(template, i) {
                  return (
                    <tr onDoubleClick={this.onDoubleClickTemplate.bind(this, template._id)} key={i}>
                      <td>{template.name}</td>
                      <td>{template.character.level}</td>
                      <td>{template.character.class}</td>
                    </tr>
                  );
                }.bind(this))}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  },

  onDoubleClickTemplate: function(id) {
    this.state.cb(id);
    this.hide();
  },

  show: function(cb) {
    this.setState({ cb: cb || function(){} });
    $(this.getDOMNode()).modal('show');
  },

  hide: function() {
    $(this.getDOMNode()).modal('hide');
  }

});