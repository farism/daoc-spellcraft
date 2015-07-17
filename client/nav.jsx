Nav = ReactMeteor.createClass({

  templateName: 'Nav',

  getMeteorState: function() {
    return { user: Meteor.user() }
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
              <li className="active"><a href="/charplan">Charplan</a></li>
              <li><a href="/spellcraft">Spellcraft</a></li>
              <li><a href="/item-search">Item Search</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <span className="glyphicon glyphicon-user" />
                  <span className="caret" />
                </a>
                {this.state.user ? (
                  <ul className="dropdown-menu">
                    <li><a href="/my-characters">My Characters</a></li>
                    <li><a href="/my-templates">My Templates</a></li>
                    <li><a href="/sign-out">Sign Out</a></li>
                  </ul>
                ) : (
                  <ul className="dropdown-menu">
                    <li><a href="/sign-in">Sign In</a></li>
                    <li><a href="/register">Register</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

});