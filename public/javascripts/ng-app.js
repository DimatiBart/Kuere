/*
 * Module dependencies
 */

require('angular');
require('angular-cookies');
require('angular-chart.js');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-simple-logger');

require('leaflet');
require('ui-leaflet');
require('ng-autocomplete');

require('bootstrap/dist/css/bootstrap');
require('../stylesheets/core');
require('../stylesheets/fonts');
require('../stylesheets/header');
require('../stylesheets/home');
require('../stylesheets/leaflet');

/*
 * Expose
 */

// Initializing app

angular.module('app', [
  'ui.router',
  'ui-leaflet',
  'chart.js',
  'ngAutocomplete',
  'ngCookies',
]);

// Configs
require('./routes/config');

// Components
require('./components/loginForm/loginForm');
require('./components/registerForm/registerForm');
require('./components/searchbox/searchbox');
require('./components/postItem/postItem');
require('./components/postList/postList');
require('./components/postInfo/postInfo');

// Controllers
require('./controllers/AuthCtrl');
require('./controllers/NavCtrl');
require('./controllers/MapCtrl');
require('./controllers/ChartCtrl');
require('./controllers/PostCtrl');
require('./controllers/PostsCtrl');

// Services
require('./services/AuthSvc');
require('./services/GeoSvc');
require('./services/PostsSvc');
