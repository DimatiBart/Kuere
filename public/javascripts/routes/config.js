angular.module('app')
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state ('index',{
					url: '/',
					templateUrl: 'templates/index.html',
					controller: 'AuthCtrl',
					onEnter: [ '$state', 'AuthSvc', function ($state, AuthSvc) {
						if (AuthSvc.isLoggedIn()) {
							$state.go('home');
						};
					}]
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
				.state('create_post', {
					url: '/create_post',
					templateUrl: 'templates/create_post.html',
					onEnter: ['$state', 'AuthSvc', function($state, AuthSvc) {

						if (!AuthSvc.isLoggedIn()) {
							$state.go('index');
						}
					}]
				})
				$urlRouterProvider.otherwise('/');
		}
	])
