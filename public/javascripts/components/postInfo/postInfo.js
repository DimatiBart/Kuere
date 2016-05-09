require('./postInfo.css');

angular.module('app')
  .directive('postInfo', function () {
    return {
      bindToController: {
        post: '<',
      },
      controller: 'PostInfoCtrl',
      controllerAs: 'vm',
      scope: {},
      restrict: 'EA',
      templateUrl: 'javascripts/components/postInfo/postInfo.tpl.html',
    };
  })
  .controller('PostInfoCtrl', [
    '$scope',
    function ($scope) {
      var vm = this;
    },
  ]);
