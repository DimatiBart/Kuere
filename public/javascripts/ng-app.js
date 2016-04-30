/*
 * Module dependencies
 */

require('angular');
require('angular-ui-router');
require('ui-leaflet');
require('angular-simple-logger');
require ('leaflet');

/*
 * Expose
 */

// Initializing app
angular.module('app', ['ui.router', require('angular-cookies'), 'ui-leaflet']);

// Configs
require('./routes/config.js');

// Directives


// Controllers
require('./controllers/AuthCtrl.js');
require('./controllers/NavCtrl.js');

// Services
require('./services/AuthSvc.js');
