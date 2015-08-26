Loading = React.createClass({

  render: function() {
    return (
      <div id="loading">
        <div id="xLoader">
          <div className="google-spin-wrapper">
            <div className="google-spin"></div>
          </div>
        </div>
        <p>Loading</p>
      </div>
    );
  }

});