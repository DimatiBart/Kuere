require('./registerForm.css');

angular.module('app')
  .directive('registerForm', function () {
    return {
      bindToController: {},
      controller: 'RegisterFormCtrl',
      controllerAs: 'vm',
      scope: {},
      restrict: 'EA',
      templateUrl: 'javascripts/components/registerForm/registerForm.tpl.html',
    };
  })
  .controller('RegisterFormCtrl', [
    '$scope',
    '$state',
    'AuthSvc',
    function ($scope, $state, AuthSvc) {
      var vm = this;

      vm.submit = function () {
        if (vm.password !== vm.passwordRepeat) {
          vm.error = 'Пароли должеы совпадать';
        } else {
          AuthSvc.register({
            username: vm.username,
            email: vm.email,
            password: vm.password,
            phone: vm.phone,
          }).success(function (data) {
            $state.go('login');
          }).error(function (response) {
            vm.error = response.err.message;
          });
        }
      };
    },
  ]);
