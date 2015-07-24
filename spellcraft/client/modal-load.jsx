ModalLoad = ReactMeteor.createClass({

  templateName: 'ModalLoad',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      selected: -1,
      cb: function(){}
    }
  },

  getMeteorState: function() {
    var select = {};
    if(this.state.user) select['ownerId'] = Meteor.userId();
    if(this.state.class) select['character.class'] = { $regex: '^' + this.state.class + '.*', $options: 'i' };
    if(this.state.level) select['character.level'] = parseInt(this.state.level);

    return {
      templates: Templates.find(select).fetch()
    }
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.modal)).modal({ show: false });
  },

  render: function() {
    return (
      <div ref="modal" id="modal-load" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Load Template</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-xs-4">
                  <input type="text" valueLink={this.linkState('class')} placeholder="Class" />
                </div>
                <div className="col-xs-4">
                  <input type="number" valueLink={this.linkState('level')} placeholder="Level" />
                </div>
                {Meteor.userId() ? (
                  <div className="col-xs-4">
                    <label><input type="checkbox" checkedLink={this.linkState('user')} />My Templates</label>
                  </div>
                ) : ''}
              </div>
              <br/>
              <table>
                <tbody>
                  <tr>
                    <th width="50%">Template Name</th>
                    <th width="25%">Level</th>
                    <th width="25%">Class</th>
                  </tr>
                  {this.state.templates.map(function(template, i) {
                    var _id = template._id;
                    return (
                      <tr className={this.state.selected == _id ? 'selected' : ''} onClick={this.onClick.bind(this, _id)}  onDoubleClick={this.onDoubleClick.bind(this, _id)} key={i}>
                        <td>{template.name}</td>
                        <td>{template.character.level}</td>
                        <td>{template.character.class}</td>
                      </tr>
                    );
                  }.bind(this))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  },

  onClick: function(_id) {
    this.setState({ selected: _id });
  },

  onDoubleClick: function(_id) {
    Router.go('/spellcraft/edit/' + _id);
    this.hide();
  },

  show: function(cb) {
    this.setState({ selected: -1, cb: cb || function(){} });
    $(this.getDOMNode()).modal('show');
  },

  hide: function() {
    $(this.getDOMNode()).modal('hide');
  }

});