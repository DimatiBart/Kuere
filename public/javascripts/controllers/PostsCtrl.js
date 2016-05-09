angular.module('app')
	.controller('PostsCtrl', ['$scope', '$rootScope', '$state', 'leafletData', 'GeoSvc', 'PostsSvc', '$cookies',
		function($scope, $rootScope, $state, leafletData, GeoSvc, PostsSvc, $cookies){
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
				$scope.post = {};

				$scope.$on("leafletDirectiveMarker.dragend", function(event, args){
					$scope._markers.m1.lat = args.model.lat;
					$scope._markers.m1.lng = args.model.lng;
				});

				$scope.addMarker = function(){
					leafletData.getMap().then(function(map) {
						let center = map.getCenter();
						$scope._markers.m1 = {
								lat: center.lat,
								lng: center.lng,
								message: "Был здесь!",
								draggable: true
						};
					})
				};
				$scope.get = function(){
					console.dir($scope._markers.m1);
				};
				$scope.searchAddress = function() {
					//GeoSvc.getGeoData($scope.address, 'Минск') google geocoding vs Nominatim
					GeoSvc.getGeoData($scope.address, '53.79619,27.39029|54.008172,27.734298')
						.success(function(data){
<<<<<<< HEAD
							if (data.results.length == 0 ) {
								alert('Извините, мы не нашли такого места');
								return;
							}
							var pos = data.results[0].geometry.location;
							leafletData.getMap().then(function(map) {
								map.panTo(new L.LatLng(pos.lat, pos.lng)).setZoom(15);
							})
=======
							console.log(data);
>>>>>>> account
						})
						.error(function(error){
							$scope.error = error;
						})
				};
				$scope.submitNewPost = function(){
					$scope.post.lat = $scope._markers.m1.lat;
					$scope.post.lng = $scope._markers.m1.lng;
					PostsSvc.createPost({user:{id: $cookies.get('id')}, post: $scope.post}) //TODO route to main map page and show some shitty message(s)
					.success(function(data){
						alert('Успех!');
					})
					.error(function(){
						alert('ХБ!');
					})
					.then(function(){

					})
				}
			}]);
