ModalRegister = ReactMeteor.createClass({

  templateName: 'ModalRegister',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.modal)).modal({ show: false });
  },

  render: function() {
    return (
      <div ref="modal" id="login-modal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Register</h4>
            </div>
            <div className="modal-body clearfix">
              <input type="email" placeholder="Email" required valueLink={this.linkState('register_email')} />
              <input type="password" placeholder="Password" required valueLink={this.linkState('register_password')} />
              <input type="password" placeholder="Confirm Password" required valueLink={this.linkState('register_password_2')} onKeyDown={this.onKeyDown} />
              <button type="button" className="btn btn-default pull-right" onClick={this.onClickRegister}>Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  },

  onClickRegister: function(e) {
    if(this.state.register_password != this.state.register_password_2){
      alert('Passwords do not match');
      return;
    }

    Accounts.createUser({ email: this.state.register_email, password: this.state.register_password }, function(err){
      if(err){
        alert(err.reason);
      } else {
        this.setState({ register_email: '', register_password: '', register_password_2: '' });
        this.hide();
      }
    }.bind(this));
  },

  onKeyDown: function(e) {
    if(e.keyCode == 13) this.onClickRegister();
  },

  show: function() {
    $(this.getDOMNode()).modal('show');
  },

  hide: function() {
    $(this.getDOMNode()).modal('hide');
  }

});