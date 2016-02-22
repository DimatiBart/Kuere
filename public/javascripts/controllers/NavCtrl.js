angular.module('app')
	.controller('NavCtrl', [
		'$scope',
		'AuthSvc',
		function ($scope, AuthSvc) {
			//$scope.logout = AuthSvc.logout;  //подумал хз зачем
			$scope.isLoggedIn = AuthSvc.isLoggedIn;
		}
	]);
