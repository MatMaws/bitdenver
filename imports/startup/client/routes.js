import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/app.js';
import '../../ui/components/content';
import '../../ui/pages/list_cryptos';
import '../../ui/pages/crypto_details';
import '../../ui/pages/list_sales';

// Page d'accueil
FlowRouter.route('/', {
  name: 'Crypto.showAll',
  action(params, queryParams) {
    console.log('Cryptomonnaies !!');
    BlazeLayout.render('app', { main: 'list_crypto' });
  },
});

// Page de détails d'une crypto monnaie
FlowRouter.route('/crypto/:code', {
  name: 'Crypto.show',
  action(params, queryParams) {
    console.log('Détails de ' + params['code'] + '!!');
    BlazeLayout.render('app', { main: 'crypto_details' });
  },
});

// Page des ordres de ventes 
FlowRouter.route('/sales', {
  name: 'Sales.showAll',
  action(params, queryParams) {
    console.log('Mes ventes');
    BlazeLayout.render('app', { main: 'list_sales' });
  },
});
