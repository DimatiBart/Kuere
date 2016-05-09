require('./postList.css');

angular.module('app')
  .directive('postList', function () {
    return {
      controller: 'PostListCtrl',
      controllerAs: 'vm',
      restrict: 'EA',
      scope: {},
      templateUrl: 'javascripts/components/postList/postList.tpl.html',
    };
  })
  .controller('PostListCtrl', [
    '$scope',
    '$state',
    'PostsSvc',
    function ($scope, $state, PostsSvc) {
      var vm = this;

      vm.isLoading = true;
      vm.posts;

      vm.openPost = function (post) {
        $state.go('post', {
          id: post.id,
        });
      };

      PostsSvc.getAll().then(function (response) {
        vm.posts = response.data.postArray;
        vm.isLoading = false;
      });
    },
  ]);
