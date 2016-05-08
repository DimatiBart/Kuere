angular.module('app')
	.controller('AuthCtrl', [
		'$scope',
		'$state',
		'AuthSvc',
		'$rootScope',
		function ($scope, $state, AuthSvc, $rootScope) {
			$scope.user = {};
			$scope.register = function () {
				if ($scope.user.password !== $scope.user.repPassword) {
					$scope.error = {message: 'Пароли должны совпадать '};
					return;
				}
				AuthSvc.register($scope.user)
				.success(function(data){
					if ($scope.error) {
						delete $scope.error;
					}
					$rootScope.success = "Регистрация прошла успешно";
				})
				.error(function(error){
					$scope.error = error;
				})
				.then (function (){
					$state.go('home');
				})
			};
			$scope.logIn = function () {
				if ($rootScope.success) {
					delete $rootScope.success;
				}
				AuthSvc.login($scope.user)
				.success (function (data){
					AuthSvc.setUserCookie(data.id);
					$state.go('home');
					if ($scope.error) {
						delete $scope.error;
					}
					if ($rootScope.success) {
						delete $rootScope.success;
					}
				})
				.error(function(error){
					$scope.error = error.err;
				})
			}
		}
	]);
