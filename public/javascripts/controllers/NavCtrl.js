angular.module('app').controller('NavCtrl', ['$scope', 'AuthSvc', function ($scope, AuthSvc){
    $scope.logout = AuthSvc.logout;
    $scope.isLoggedIn = AuthSvc.isLoggedIn;
}]);