ModalLoad = React.createClass({

  mixins: [ReactMeteorData, React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      userOnly: Boolean(Cookie.get('userOnly')),
      selected: null,
      cb: function(){}
    }
  },

  getMeteorData: function() {
    var select = {};
    var userid = Meteor.userId();
    if(this.state.userOnly) select['owner'] = userid;
    if(this.state.class) select['class'] = { $regex: '^' + this.state.class + '.*', $options: 'i' };
    if(this.state.level) select['level'] = parseInt(this.state.level);

    return {
      templates: Templates.find(select, {
        transform: function(doc){
          doc.favorite = Favorites.find({ user: userid, template: doc._id }).count();
          return doc;
        }
      }).fetch()
    }
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.modal)).modal({ show: false });
  },

  render: function() {
    var userid = Meteor.userId();
    var template = Templates.findOne({ _id: this.state.selected }) || {};

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
                    <label><input type="checkbox" checked={this.state.userOnly} onChange={this.onChangeUserOnly} />My Templates</label>
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
                  {this.data.templates.map(function(template, i) {
                    var _id = template._id;
                    return (
                      <tr className={this.state.selected == _id ? 'selected' : ''} onClick={this.onClick.bind(this, _id)}  onDoubleClick={this.onDoubleClick.bind(this, _id)} key={i}>
                        <td>{template.name} {template.favorite ? <span className="glyphicon glyphicon-heart" /> : ''}</td>
                        <td>{template.level}</td>
                        <td>{template.class}</td>
                      </tr>
                    );
                  }.bind(this))}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              {this.state.selected && (template.owner == userid) ? (
                <button type="button" className="pull-left btn btn-danger" onClick={this.onClickDelete}>Delete Selected</button>
              ) : ''}
              {this.state.selected ? (
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.onClickLoad}>Load Selected</button>
              ) : ''}
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  onChangeUserOnly: function(e) {
    Cookie.set('userOnly', e.target.checked);
    this.setState({ userOnly: e.target.checked });
  },

  onClick: function(_id) {
    this.setState({ selected: _id });
  },

  onDoubleClick: function(_id) {
    FlowRouter.go('/spellcraft/edit/' + _id);
    this.hide();
  },

  onClickDelete: function() {
    if(confirm('Are you sure you want to delete this template?')){
      Templates.remove({ _id: this.state.selected });
      this.setState({ selected: null });
    }
  },

  onClickLoad: function() {
    FlowRouter.go('/spellcraft/edit/' + this.state.selected);
  },

  show: function(cb) {
    this.setState({ selected: null, cb: cb || function(){} });
    $(this.getDOMNode()).modal('show');
  },

  hide: function() {
    $(this.getDOMNode()).modal('hide');
  }

});