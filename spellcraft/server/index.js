try {
  Credentials = JSON.parse(Assets.getText('credentials.json'));
} catch(e){
  Credentials = {};
  console.log(e);
}

Meteor.startup(function () {

  Meteor.publish('items', function () {
    return Items.find();
  });

  Meteor.publish('templates', function () {
    return Templates.find();
  });

  if(Credentials){
    if(Credentials.smtp){
      smtp = Credentials.smtp.gmail || {};
      process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    }
  }

});

Meteor.methods({

  getItemCount: function() {
    return Items.find().count();
  },

  getTemplateCount: function() {
    return Templates.find().count();
  }

});