Router.route('/', function () {
  this.layout('Layout');
  this.render('Spellcraft');
});

Router.route('/charplan', function () {
  this.layout('Layout');
  this.render('Charplan');
});

Router.route('/spellcraft', function () {
  this.layout('Layout');
  this.render('Spellcraft');
});

Router.route('/item-search', function () {
  this.layout('Layout');
  this.render('ItemSearch');
});