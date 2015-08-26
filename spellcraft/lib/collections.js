Items = new Meteor.Collection('items');
Templates = new Meteor.Collection('templates');
Favorites = new Meteor.Collection('favorites');
Ratings = new Meteor.Collection('ratings');

Templates.allow({
  insert: function (userId, doc) {
    return (userId && doc.owner === userId);
  },
  update: function (userId, doc, fields, modifier) {
    return doc.owner === userId;
  },
  remove: function (userId, doc) {
    return doc.owner === userId;
  },
  fetch: ['owner']
});

Templates.deny({
  insert: function(userId, doc){
    doc.createdAt = new Date();
    return false;
  },
  update: function(userId, doc, fields, modifier){
    doc.updatedAt = new Date();
    return false;
  }
});