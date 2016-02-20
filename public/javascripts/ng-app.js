require('angular');
require('angular-ui-router');

angular.module('app', ['ui.router', require('angular-cookies')]);

require('./routes/config.js');

require('./controllers/AuthCtrl.js');
require('./controllers/NavCtrl.js');

require('./services/AuthSvc.js');