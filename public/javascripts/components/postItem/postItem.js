require('./postItem.css');

angular.module('app')
  .directive('postItem', function () {
    return {
      bindToController: {
        item: '<',
      },
      controller: 'PostItemCtrl',
      controllerAs: 'vm',
      restrict: 'EA',
      scope: {},
      templateUrl: 'javascripts/components/postItem/postItem.tpl.html',
    };
  })
  .controller('PostItemCtrl', [
    '$scope',
    function ($scope) {
      var vm = this;
    },
  ]);
