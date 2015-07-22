Nav = ReactMeteor.createClass({

  templateName: 'Nav',

  getMeteorState: function() {
    return {
      user: Meteor.user(),
      loggingIn: Meteor.loggingIn()
    }
  },

  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">daoctoolkit</a>
          </div>
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              {/*<li><a href="/charplan">Charplan</a></li>*/}
              <li className="active"><a href="/spellcraft">Spellcraft</a></li>
              <li><a href="/item-search">Item Search</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span className="glyphicon glyphicon-user" />
                  <span className="caret" />
                </a>
                {this.dropdown()}
              </li>
            </ul>
          </div>
        </div>
        <ModalLogin ref="login" />
        <ModalRegister ref="register" />
      </nav>
    );
  },

  onClickLogin: function(e) {
    this.refs.login.show();
  },

  onClickRegister: function(e) {
    this.refs.register.show();
  },

  onClickLogout: function(e) {
    Meteor.logout();
  },

  dropdown: function() {
    if(this.state.user){
      return (
        <ul className="dropdown-menu">
          <li><a href="#">{Meteor.user().emails[0].address}</a></li>
          <li><a href="/my-characters">My Characters</a></li>
          <li><a href="/my-templates">My Templates</a></li>
          <li><a href="#" onClick={this.onClickLogout}>Sign Out</a></li>
        </ul>
      );
    } else if(this.state.loggingIn){

    } else {
      return (
        <ul className="dropdown-menu">
          <li><a href="#" onClick={this.onClickLogin}>Sign In</a></li>
          <li><a href="#" onClick={this.onClickRegister}>Register</a></li>
        </ul>
      );
    }
  }

});