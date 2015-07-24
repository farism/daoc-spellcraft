Router.route('/', function () {
  this.redirect('/spellcraft/new');
});

Router.route('/charplan', function () {
  this.render('Charplan');
});

Router.route('/spellcraft', function () {
  this.redirect('/spellcraft/new');
});

Router.route('/spellcraft/new', function () {
  this.wait([
    Meteor.subscribe('templatesnew'),
    Meteor.subscribe('items')
  ]);

  // this.render(this.ready() ? 'Spellcraft' : 'Loading');
  this.render('Spellcraft');
});

Router.route('/spellcraft/edit/:_id', function () {
  this.wait([
    Meteor.subscribe('templatenew', this.params._id),
    Meteor.subscribe('templatesnew'),
    Meteor.subscribe('favorites'),
  ]);

  Meteor.subscribe('items');

  if(this.ready()){
    this.render('SpellcraftEdit');
  } else {
    this.render('Loading');
    // this.render('Spellcraft  Edit');
  }
});

Router.route('/item-search', function () {
  this.render('ItemSearch');
});