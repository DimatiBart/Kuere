angular.module('app')
	.controller('MapCtrl', ['$scope', '$rootScope', '$state', 'leafletData', function($scope, $rootScope, $state, leafletData){
		L.Icon.Default.imagePath = './stylesheets/images/';
		angular.extend($scope, {
			center: {
				lat: 53.9,
				lng: 27.56,
				zoom: 15,
				autoDiscover: true
			}
		});
		$scope._markers = {};
		$scope.getData = function(){
			leafletData.getMap().then(function(map) {
				console.dir(map);
			});
		}
		$scope.addMarker = function(){
			leafletData.getMap().then(function(map) {
				let center = map.getCenter();
				L.marker([center.lat, center.lng], {
					draggable: true,
					title: 'HB!'
				}).addTo(map);
			});
		}
	}]);
