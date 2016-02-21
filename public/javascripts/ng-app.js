/*
 * Module dependencies
 */

require('angular');
require('angular-ui-router');

/*
 * Expose
 */

// Initializing app
angular.module('app', ['ui.router', require('angular-cookies')]);

// Configs
require('./routes/config.js');

// Directives


// Controllers
require('./controllers/AuthCtrl.js');
require('./controllers/NavCtrl.js');

// Services
require('./services/AuthSvc.js');
