/*
 * Module dependencies
 */

require('angular');
require('angular-ui-router');
require('ng-autocomplete');
require('bootstrap/dist/css/bootstrap.css');

require('../stylesheets/core.css');
require('../stylesheets/fonts.css');
require('../stylesheets/header.css');
require('../stylesheets/home.css');

/*
 * Expose
 */

// Initializing app
angular.module('app', [
  'ui.router',
  'ngAutocomplete',
  require('angular-cookies'),
]);

// Configs
require('./routes/config.js');

// Components
require('./components/searchbox/searchbox.js');

// Controllers
require('./controllers/AuthCtrl.js');
require('./controllers/NavCtrl.js');

// Services
require('./services/AuthSvc.js');
