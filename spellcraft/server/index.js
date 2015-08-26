try {
  Credentials = JSON.parse(Assets.getText('credentials.json'));
} catch(e){
  Credentials = {};
  console.log(e);
}

Meteor.startup(function () {

  Meteor.publish('items', function () {
    return Items.find({}, { fields: { itemname: 1 } });
  });

  Meteor.publish('itemsearch', function (loc, val) {
    return Items.find({ location: loc, itemname: new RegExp(val, 'gi') });
  });

  Meteor.publish('templates', function () {
    return Templates.find({ $or: [{ public: 1 }, { owner: this.userId }] }, { fields: { _id: 1, owner: 1, name: 1, level: 1, class: 1 } });
  });

  Meteor.publish('template', function (_id) {
    return Templates.find({ _id: _id, $or: [{ public: 1 }, { owner: this.userId }] });
  });

  Meteor.publish('favorites', function () {
    return Favorites.find({ owner: this.user });
  });

  if(Credentials){
    if(Credentials.smtp){
      smtp = Credentials.smtp.gmail || {};
      process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    }
  }

});