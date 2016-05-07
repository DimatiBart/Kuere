/*
 * Module dependencies
 */

require('angular');
require('angular-ui-router');
require('ui-leaflet');
require('angular-simple-logger');
require('leaflet');
require('angular-ui-bootstrap');
require('chart.js');
require('angular-chart.js');

/*web
 * Expose
 */

// Initializing app
angular.module('app', ['ui.router', require('angular-cookies'), 'ui-leaflet', 'chart.js']);

// Configs
require('./routes/config.js');

// Directives


// Controllers
require('./controllers/AuthCtrl.js');
require('./controllers/NavCtrl.js');
require('./controllers/MapCtrl.js');
require('./controllers/PieCtrl.js');


// Services
require('./services/AuthSvc.js');
require('./services/GeoSvc.js');
