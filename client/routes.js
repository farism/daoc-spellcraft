Router.route('/', function () {
  this.wait([Meteor.subscribe('items'), Meteor.subscribe('templates')]);
  // this.render(this.ready() ? 'Spellcraft' : 'Loading');
  this.render('Spellcraft');
});

Router.route('/charplan', function () {
  this.render('Charplan');
});

Router.route('/spellcraft', function () {
  this.wait([Meteor.subscribe('items'), Meteor.subscribe('templates')]);
  // this.render(this.ready() ? 'Spellcraft' : 'Loading');
  this.render('Spellcraft');
});

Router.route('/item-search', function () {
  this.render('ItemSearch');
});