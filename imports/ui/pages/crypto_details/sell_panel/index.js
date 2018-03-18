import './sell_panel.html';

import { Template } from 'meteor/templating';
import { Crypto } from '../../../../api/crytocurrency/crytocurrency';
import { Meteor } from 'meteor/meteor';

Template.sell_panel.onCreated(function() {
  //On créé une variable reactive qui va etre utilisé dans le template pour afficher le total en dollar de la valeur saisie à la vente
  // On l'affichera simplement avec le helper saleValue
  this.theSaleValue = new ReactiveVar(0);
});

Template.sell_panel.helpers({
  saleValue() {
    return Template.instance().theSaleValue.get() * Crypto.findOne({ code: FlowRouter.getParam('code') }).dollarValue;
  },
});

Template.sell_panel.events({
  'submit #sellForm'(event) {
    event.preventDefault();
    let sale = {
      code: FlowRouter.getParam('code'),
      nbCoins: event.target.nbCoins.value,
      dollarValue: Crypto.findOne({ code: FlowRouter.getParam('code') })
        .dollarValue,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    };
    Meteor.call('Sales.sell', sale, (err, res) => {
      if (err) {
        Materialize.toast(err.reason, 4000, 'rounded');
      } else {
        Materialize.toast(
          "Ordre de vente validé, en attente d'achat!",
          4000,
          'rounded'
        );
        event.target.nbCoins.value = '';
      }
    });
  },
  // Lorsque l'on entre un chifre, cela met à jour la variable reactive qui permet de connaitre le prix total en dollar du montant de la monnaie en cours de vente
  'input #nbCoins'(event, template) {
    let value = parseInt(event.target.value, 10) || 0;
    template.theSaleValue.set(
      value
    );
  },

  'click #reset'(event, template) {
    template.theSaleValue.set(0);
  },
});
