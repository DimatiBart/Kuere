angular.module('app')
	.factory('GeoSvc', ['$http', function ($http){
		return {
			getGeoData: function (address, city){
				return $http.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA6cw0mhw4eoNDbSwkLzKI7Y-qcWZeJqWU&address=${encodeURI(address)}&bounds=${city}`);
				//return $http.get(`http://nominatim.openstreetmap.org/search/${encodeURI(address + " ")}${encodeURI(city)}?format=json`);
			},
			getPlaceData: function (lat, lng){
				return $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+","+lng+'&location_type=ROOFTOP&result_type=street_address&key=AIzaSyA6cw0mhw4eoNDbSwkLzKI7Y-qcWZeJqWU');
			}
		}
	}]);
