Template.sc.onCreated(function() {
  console.log(Slots)
  console.log('sc created');
});

Template.sc.onRendered(function() {
  console.log('sc rendered');
});

Template.sc.helpers({

  slots: function() {
    return Slots.find().fetch();
  }

});