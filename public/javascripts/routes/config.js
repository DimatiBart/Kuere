angular.module('app')
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'templates/index.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'AuthSvc', unauthorizedOnly],
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        onEnter: ['$state', 'AuthSvc', unauthorizedOnly],
      })
      .state('register', {
        url:'/register',
        templateUrl: 'templates/register.html',
        onEnter: ['$state', 'AuthSvc', unauthorizedOnly],
      })
      .state('home', {
        url:'/home',
        templateUrl: 'templates/home.html',
        onEnter: ['$state', 'AuthSvc', authorizedOnly],
      })
      .state('charts', {
        url:'/charts',
        templateUrl: 'templates/charts.html',
        onEnter: ['$state', 'AuthSvc', authorizedOnly],
      })
      .state('logout', {
        url:'/logout',
        onEnter: [
          '$state',
          'AuthSvc',
          function ($state, AuthSvc) {
            if (AuthSvc.isLoggedIn()) {
              AuthSvc.logout();
            }

            $state.go('index');
          },
        ],
      })
      .state('create_post', {
        url: '/create_post',
        templateUrl: 'templates/_post.html',
        onEnter: ['$state', 'AuthSvc', authorizedOnly],
      })
      .state('posts', {
        url: '/posts',
        templateUrl: 'templates/posts.html',
        onEnter: ['$state', 'AuthSvc', authorizedOnly],
      })
      .state('post', {
        url: '/post/:id',
        templateUrl: 'templates/post.html',
        onEnter: ['$state', 'AuthSvc', authorizedOnly],
      })
      .state('account', {
        url: '/account',
        templateUrl: 'templates/account.html',
      });
      $urlRouterProvider.otherwise('/');
    },
  ]);

function authorizedOnly($state, AuthSvc) {
  if (!AuthSvc.isLoggedIn()) {
    $state.go('index');
  }
}

function unauthorizedOnly($state, AuthSvc) {
  if (AuthSvc.isLoggedIn()) {
    $state.go('home');
  }
}
