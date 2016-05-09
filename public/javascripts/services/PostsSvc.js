angular.module('app')
	.factory('PostsSvc', ['$http', function ($http){
		return {
			createPost: function(data) {
				return $http.post('/pos/create', data);
			},
			editPost: function(data) { //data.postId + data.updatedPost
				return $http.post('pos/edit', data)
			},
			getPost: function(id) {
				return $http.get('pos/' + id);
			},
			deletePost: function (id) {
				return $http.delete('pos/delete' + id);
			},
			closePost: function (id) {
				return $http.get('pos/close/' + id);
			},
			getAll: function(){
				return $http.get('pos/get_all');
			}
		}
	}]);
