angular.module('app')
  .controller('PostCtrl', [
    '$scope',
    '$stateParams',
    'PostsSvc',
    function ($scope, $stateParams, PostsSvc) {
      var vm = this;

      vm.post;

      PostsSvc.getPost($stateParams.id)
        .then(function (post) {
          vm.post = post;
        });
    },
  ]);
