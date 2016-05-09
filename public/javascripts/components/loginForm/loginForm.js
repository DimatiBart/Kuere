require('./loginForm.css');

angular.module('app')
  .directive('loginForm', function () {
    return {
      bindToController: {},
      controller: 'LoginFormCtrl',
      controllerAs: 'vm',
      scope: {},
      restrict: 'EA',
      templateUrl: 'javascripts/components/loginForm/loginForm.tpl.html',
    };
  })
  .controller('LoginFormCtrl', [
    '$scope',
    '$rootScope',
    '$state',
    'AuthSvc',
    function ($scope, $rootScope, $state, AuthSvc) {
      var vm = this;

      vm.submit = function () {
        if ($rootScope.success) {
          $rootScope.success = undefined;
        }

        AuthSvc.login({ email: vm.username, password: vm.password })
          .success(function (data) {
            AuthSvc.setUserCookie(data.id);
            $state.go('home');
          })
          .error(function (response) {
            vm.error = response.err.message;
          });
      };
    },
  ]);
