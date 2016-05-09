angular.module('app')
  .controller('PostCtrl', [
    '$scope',
    '$stateParams',
    'PostsSvc',
    function ($scope, $stateParams, PostsSvc) {
      var vm = this;

      vm.post;
      debugger;
      PostsSvc.getPost($stateParams.id)
        .then(function (post) {
          debugger;
          vm.post = post;
        });
    },
  ]);
