angular.module('app')
  .directive('searchbox', function () {
    return {
      bindToController: {},
      controller: 'SearchboxCtrl',
      controllerAs: 'vm',
      link: function ($scope, $element, $attrs) {},
      restrict: 'EA',
      scope: {},
      templateUrl: 'javascripts/components/searchbox/searchbox.tpl.html',
    };
  })
  .controller('SearchboxCtrl', [
    '$scope',
    function ($scope) {
      var vm = this;

      vm.model = '';
      vm.options = {
        country: 'ca',
        types: '(cities)',
      };

      vm.details = '';
    }
  ]);

/*
 * TODO: https://github.com/wpalahnuk/ngAutocomplete
*/
