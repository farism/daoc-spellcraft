Loading = ReactMeteor.createClass({

  templateName: 'Loading',

  componentWillMount: function() {
    Meteor.call('getItemCount', function(err, res){
      this.setState({ totalItems: res });
    }.bind(this));
    Meteor.call('getTemplateCount', function(err, res){
      this.setState({ totalTemplates: res });
    }.bind(this));
  },

  getInitialState: function(){
    return {
      totalItems: 1,
      totalTemplates: 1
    };
  },

  getMeteorState: function() {
    return {
      itemProgress: Math.min(100, (Items.find().count() / this.state.totalItems) * 100),
      templateProgress: Math.min(100, (Templates.find().count() / this.state.totalTemplates) * 100)
    };
  },

  render: function() {
    return (
      <div id="loading">
        <div id="xLoader">
          <div className="google-spin-wrapper">
            <div className="google-spin"></div>
          </div>
          <div className="progress-bars">
            Items - {this.state.totalItems}
            <div>
              <div className="bar" style={{ width: this.state.itemProgress + '%' }} />
            </div>
            Templates - {this.state.totalTemplates}
            <div>
              <div className="bar" style={{ width: this.state.templateProgress + '%' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

});