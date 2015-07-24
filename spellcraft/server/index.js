CalculateBonusImbue = function(type, effect, amount, amountIndex, newstats){
  amount = parseInt(amount, 10) || 0;
  var imbue = 0;

  if(type == 'Stat'){
    if(effect == 'Hits') {
      imbue = amount / 4;
    } else if(effect == 'Power') {
      imbue = (amount - 1) * 2;
    } else {
      if(newstats){
        imbue = Math.floor(amount / 1.725);
      } else {
        imbue = Math.ceil(amount * 2 / 3);
      }
    }
  } else if(type == 'Resist'){
    imbue = (amount - 1) * 2;
  } else if(type == 'Skill') {
    imbue = (amount - 1) * 5;
  }

  return Math.max(amount == 0 ? 0 : 1, imbue);
}

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

  Meteor.publish('templatesnew', function () {
    return TemplatesNew.find({}, { fields: { _id: 1, name: 1, character: 1 } });
  });

  Meteor.publish('templatenew', function (_id) {
    return TemplatesNew.find({ _id: _id });
  });

  Meteor.publish('favorites', function () {
    return Favorites.find({ ownerId: this.userId });
  });

  if(Credentials){
    if(Credentials.smtp){
      smtp = Credentials.smtp.gmail || {};
      process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    }
  }


  /*TemplatesNew.find().map(function(template){
    template.slots.map(function(slot, i){
      if(slot.crafted){
        slot.bonuses.map(function(bonus, i){
          if(i < 4 && bonus.amount > 0){
            var arr = (CraftedBonusTypeValues[bonus.effect] || CraftedBonusTypeValues[bonus.type]);
            if(arr){
              bonus.amountIndex = arr.indexOf(bonus.amount) + 1;
              bonus.imbue = CalculateBonusImbue(bonus.type, bonus.effect, parseInt(bonus.amount, 10));
              // console.log(bonus);
            }
            // bonus.imbue = CalculateBonusImbue(bonus.type, bonus.effect, parseInt(bonus.amount, 10), bonus.amountIndex) / 2
            // console.log(bonus);
            // console.log(BonusStat);
          }
        })
      }
    });
    TemplatesNew.update({ _id: template._id }, { $set: _.omit(template, '_id') });
  });*/

  /*Templates.find().map(function(template){
    var t = template;
    t = _.extend(t, t.character);
    t.slots.map(function(slot, i){
      slot.id = slot.i;
      slot.bonuses.map(function(bonus){
        bonus.imbue = CalculateBonusImbue(bonus.type, bonus.effect, parseInt(bonus.amount, 10), bonus.amountIndex) / 2;
      });
    })
    TemplatesNew.insert(t);
  });*/

});

Meteor.methods({

  getItemCount: function() {
    return Items.find().count();
  },

  getTemplateCount: function() {
    return TemplatesNew.find().count();
  }

});