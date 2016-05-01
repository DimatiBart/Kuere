angular.module('app')
	.factory('GeoSvc', ['$http', function ($http){
		return {
			getGeoData: function (address, limit){
				return $http.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA6cw0mhw4eoNDbSwkLzKI7Y-qcWZeJqWU&address=${encodeURI(address)}&bounds=${limit}`);
			}
		}
	}]);
