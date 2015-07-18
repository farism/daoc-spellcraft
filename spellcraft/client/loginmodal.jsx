LoginModal = ReactMeteor.createClass({

  templateName: 'LoginModal',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      login: true
    }
  },

  getMeteorState: function() {
    return {
      user: Meteor.user(),
      loggingIn: Meteor.loggingIn()
    }
  },

  componentDidMount: function() {
    $(React.findDOMNode(this.refs.modal)).modal({ show: false });
  },

  componentDidUpdate: function() {
    if(this.state.user){
      this.hide();
    }
  },

  render: function() {
    return (
      <div ref="modal" id="login-modal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{this.state.forgotPassword ? 'Forgot Password' : 'Login'}</h4>
            </div>
            <div className="modal-body">
              {this.state.login ? (
                <div className="clearfix">
                  <input type="email" placeholder="Email" required valueLink={this.linkState('login_email')} />
                  <input type="password" placeholder="Password" required valueLink={this.linkState('login_password')} onKeyDown={this.onKeyDownLogin} />
                  <a href="#" onClick={this.onClickToggleView}>Forgot Password</a>
                  <button type="button" className="btn btn-primary pull-right" disabled={this.state.loggingIn} onClick={this.onClickLogin}>Login</button>
                </div>
              ) : (
                <div className="clearfix">
                  <input type="email" placeholder="Enter email address" valueLink={this.linkState('forgot_password_email')} onKeyDown={this.onKeyDownForgotPassword} />
                  <a href="#" onClick={this.onClickToggleView}>Back to login</a>
                  <button type="button" className="btn btn-primary pull-right" onClick={this.onClickForgotPassword}>Get password reset link</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },

  onClickToggleView: function(e) {
    this.replaceState({ login: !this.state.login });
  },

  onKeyDownLogin: function(e) {
    if(e.keyCode == 13) this.onClickLogin();
  },

  onClickLogin: function(e) {
    Meteor.loginWithPassword(this.state.login_email, this.state.login_password, function(err) {
      if(err){
        alert(err.reason);
      } else {
        this.replaceState({ login: true });
        this.hide();
      }
    }.bind(this));
  },

  onClickForgotPassword: function(e) {
    Accounts.forgotPassword({ email: this.state.forgot_password_email }, function(err){
      if(err){
        this.replaceState({ login: true });
        this.hide();
      }
    }.bind(this));
  },

  onKeyDownForgotPassword: function(e) {
    if(e.keyCode == 13) this.onClickForgotPassword();
  },

  show: function() {
    $(this.getDOMNode()).modal('show');
  },

  hide: function() {
    $(this.getDOMNode()).modal('hide');
  }

});