angular.module('app')
	.factory('PostsSvc', ['$http', function ($http){
		return {
			createPost: function(data) {
				return $http.post('/posts/create', data);
			},
			editPost: function(data) { //data.postId + data.updatedPost
				return $http.post('posts/edit', data)
			},
			getPost: function(id) {
				return $http.get('posts/' + id);
			},
			deletePost: function (id) {
				return $http.delete('posts/delete' + id);
			},
			closePost: function (id) {
				return $http.get('posts/close/' + id);
			},
			getAll: function(){
				return $http.get('posts/get_all');
			}
		}
	}]);
