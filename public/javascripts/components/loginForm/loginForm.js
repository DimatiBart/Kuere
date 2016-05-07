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
    function ($scope) {
      var vm = this;

      vm.submit = function () {

      };
    },
  ]);
