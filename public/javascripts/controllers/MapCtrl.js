angular.module('app')
	.controller('MapCtrl', ['$scope', '$rootScope', '$state', 'leafletData', 'GeoSvc', 'PostsSvc', function($scope, $rootScope, $state, leafletData, GeoSvc, PostsSvc){
		L.Icon.Default.imagePath = './stylesheets/images/';
		angular.extend($scope, {
			center: {
				lat: 53.9,
				lng: 27.56,
				zoom: 15,
				autoDiscover: true
			}
		});
		$scope.address = "";
		$scope._markers = {};
		$scope.posts = [];
		$scope.getData = function(){
			leafletData.getMap().then(function(map) {
				console.dir(map);
			});
		};
		$scope.searchAddress = function() {
			//GeoSvc.getGeoData($scope.address, 'Минск') google geocoding vs Nominatim
			GeoSvc.getGeoData($scope.address, '53.79619,27.39029|54.008172,27.734298')
				.success(function(data){
					console.log(data);
				})
				.error(function(error){
					$scope.error = error;
				})
		};
		$scope.getPlace = function() {
			leafletData.getMap().then(function(map) {
				let center = map.getCenter();
				GeoSvc.getPlaceData(center.lat,center.lng)
					.success(function(data){
						console.log(data.results[0].address_components[2].long_name);
					})
					.error(function(error){
						$scope.error = error;
					})
			});
		};
		$scope.showMarkers = function(){
			leafletData.getMap().then(function(map) {
				for (var i in $scope.posts) {
					L.marker([$scope.posts[i].coordinates.lat, $scope.posts[i].coordinates.lng], {
						title: $scope.posts[i].title
					}).addTo(map);
				}
			})
		};
		$scope.$on('leafletDirectiveMap.load', function(event){
			$scope.showMarkers();
		});
		$scope.getAllPosts = function () {
			PostsSvc.getAll()
				.success( (data) => {
					$scope.posts = data.postArray;
					$scope.showMarkers();
					console.dir($scope.posts);
				})
				.error ( (err) => {
					console.log(err);
				})
		};
		$scope.getAllPosts();
	}]);
