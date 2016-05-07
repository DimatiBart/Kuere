angular.module('app')
  .directive('signUpForm', function () {
    return {
      bindToController: {},
      controller: 'SignUpFormCtrl',
      controllerAs: 'vm',
      scope: {},
      restrict: 'EA',
      templateUrl: 'javascripts/components/signUpForm/signUpForm.tpl.html',
    };
  })
  .controller('SignUpFormCtrl', [
    '$scope',
    function ($scope) {
      var vm = this;

      vm.submit = function () {

      };
    },
  ]);
