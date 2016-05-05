angular.module('app')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/index.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
      })
      .state('search', {
        url: '/search',
        templateUrl: 'templates/search.html',
      })









      .state ('register',{
        url:'/register',
        templateUrl: 'templates/register.html',
        controller: 'AuthCtrl',
        onEnter: [ '$state', 'AuthSvc', function ($state, AuthSvc) {
          if (AuthSvc.isLoggedIn()) {
            $state.go('home');
          };
        }]
      })
      .state ('home',{
        url:'/home',
        templateUrl: 'templates/home.html',
        onEnter: [ '$state', 'AuthSvc', function($state, AuthSvc) {
          if (!AuthSvc.isLoggedIn()) {
            $state.go('index');
          }
        }],
      })
      .state ('logout',{
        url:'/logout',
        onEnter: ['$state', 'AuthSvc', function($state, AuthSvc) {
          if (!AuthSvc.isLoggedIn()) {
            $state.go('index');
          }
          else {
            AuthSvc.logout();
            $state.go('index');
          }
        }]
      })
      $urlRouterProvider.otherwise('/');
    }
  ]);
