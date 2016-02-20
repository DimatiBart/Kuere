angular.module('app').factory('AuthSvc', ['$http', '$cookies', function($http, $cookies){
    return {
        isLoggedIn: isLoggedIn,
        getUserId: getUserId,
        login: login,
        logout: logout,
        register: register,
        setUserCookie: setUserCookie,
    };

    function setUserCookie (id) {
        $cookies.put('id', id)
    }
    function isLoggedIn() {
        return $cookies.get('id') ? true : false;
    };
    function getUserId() {
        return $cookies.get('id');
    };
    function login(userData) {
        return $http.post('auth/login', userData);
    };
    function logout() {
        $cookies.remove('id');
        $http.get('auth/logout');
    };
    function register(userData){
        return $http.post('auth/register', userData);
    };
}]);