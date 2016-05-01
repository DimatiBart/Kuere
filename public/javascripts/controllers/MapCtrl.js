angular.module('app')
	.controller('MapCtrl', ['$scope', '$rootScope', '$state', 'leafletData', 'GeoSvc', function($scope, $rootScope, $state, leafletData, GeoSvc){
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
		$scope.getData = function(){
			leafletData.getMap().then(function(map) {
				console.dir(map);
			});
		};
		$scope.addMarker = function(){
			leafletData.getMap().then(function(map) {
				let center = map.getCenter();
				L.marker([center.lat, center.lng], {
					draggable: true,
					title: 'HB!'
				}).addTo(map);
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
		}
	}]);
