FlowRouter.subscriptions = function() {
  this.register('templates', Meteor.subscribe('templates'));
  this.register('favorites', Meteor.subscribe('favorites'));
};

FlowRouter.route('/', {
  triggersEnter: [function(context, redirect) {
    redirect('/spellcraft/new');
  }]
});

FlowRouter.route('/spellcraft', {
  triggersEnter: [function(context, redirect) {
    redirect('/spellcraft/new');
  }]
});

FlowRouter.route('/spellcraft/new', {
  name: 'scnew',
  action: function(params, queryParams) {
    React.render(<Spellcraft />, document.body);
  }
});

FlowRouter.route('/spellcraft/edit/:_id', {
  name: 'scedit',
  subscriptions: function(params, queryParams) {
    this.register('template', Meteor.subscribe('template', params._id));
  },
  action: function(params, queryParams) {
    React.render(<Spellcraft _id={params._id} />, document.body);
  }
});

FlowRouter.route('/damage-calculator', {
  name: 'dmgcalc',
  action: function(params, queryParams) {
    React.render(<DamageCalculator />, document.body);
  }
});

Meteor.startup(function(){

  /*Router.route('/', function () {
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
      Meteor.subscribe('templates'),
      Meteor.subscribe('items')
    ]);

    this.render(this.ready() ? 'Spellcraft' : 'Loading');
  });

  Router.route('/spellcraft/edit/:_id', function () {
    Meteor.call('getItemCount', function(err, res){
      //Session.setState('itemCount', res);
    });

    this.wait([
      Meteor.subscribe('template', this.params._id),
      Meteor.subscribe('templates'),
      Meteor.subscribe('favorites'),
      Meteor.subscribe('items')
    ]);

    this.render(this.ready() ? 'SpellcraftEdit' : 'Loading');
  });

  Router.route('/item-search', function () {
    this.render('ItemSearch');
  });*/

});