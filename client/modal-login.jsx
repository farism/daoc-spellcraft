ModalLogin = ReactMeteor.createClass({

  templateName: 'ModalLogin',

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      view: 0, //0 for login, 1 for forgot pw, 2 for register
      cb: function(){}
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
    var title = '';
    var body = '';

    if(this.state.view == 0){
      title = 'Login';
      body = (
        <div className="clearfix">
          <input type="email" placeholder="Email" required valueLink={this.linkState('login_email')} />
          <input type="password" placeholder="Password" required valueLink={this.linkState('login_password')} onKeyDown={this.onKeyDown} />
          <button type="button" className="btn btn-default pull-right" disabled={this.state.loggingIn} onClick={this.onClickSubmit}>Login</button>
        </div>
      );
    } else if(this.state.view == 1){
      title = 'Forgot Password';
      body = (
        <div className="clearfix">
          <input type="email" placeholder="Enter email address" valueLink={this.linkState('forgot_password_email')} onKeyDown={this.onKeyDown} />
          <button type="button" className="btn btn-default pull-right" onClick={this.onClickSubmit}>Get password reset link</button>
        </div>
      );
    } else if(this.state.view == 2){
      title = 'Register'
      body = (
        <div className="clearfix">
          <input type="email" placeholder="Email" required valueLink={this.linkState('register_email')} />
          <input type="password" placeholder="Password" required valueLink={this.linkState('register_password')} />
          <input type="password" placeholder="Confirm Password" required valueLink={this.linkState('register_password_2')} onKeyDown={this.onKeyDown} />
          <button type="button" className="btn btn-default pull-right" onClick={this.onClickSubmit}>Register</button>
        </div>
      );
    }

    return (
      <div ref="modal" id="login-modal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{title}</h4>
            </div>
            <div className="modal-body">
              {body}
            </div>
            <div className="modal-footer">
              {this.state.view == 1 || this.state.view == 2 ? <a href="#" onClick={this.onClickToggleView.bind(this, 0)}>Back to Login</a> : ''}
              {this.state.view == 0 || this.state.view == 2 ? <a href="#" onClick={this.onClickToggleView.bind(this, 1)}>Forgot Password</a> : ''}
              {this.state.view == 0 || this.state.view == 1 ? <a href="#" onClick={this.onClickToggleView.bind(this, 2)}>Register</a> : ''}
            </div>
          </div>
        </div>
      </div>
    );
  },

  onClickToggleView: function(i, e) {
    this.replaceState({ view: i });
  },

  onClickSubmit: function(e) {
    if(this.state.view == 0){
      Meteor.loginWithPassword(this.state.login_email, this.state.login_password, function(err) {
        if(err){
          alert(err.reason);
        } else {
          this.state.cb();
          this.hide();
        }
      }.bind(this));
    }

    if(this.state.view == 1){
      Accounts.forgotPassword({ email: this.state.forgot_password_email }, function(err){
        if(err){
          this.hide();
        }
      }.bind(this));
    }

    if(this.state.view == 2){
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
    }
  },

  onKeyDown: function(e) {
    if(e.keyCode == 13) this.onClickSubmit();
  },

  show: function(view, cb) {
    this.setState({ view: view, login_email: '', login_password: '', cb: cb || function(){} });
    $(this.getDOMNode()).modal('show');
  },

  hide: function() {
    $(this.getDOMNode()).modal('hide');
  }

});