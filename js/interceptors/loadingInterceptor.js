var app = angular.module('connect');

app.factory('loading', function ($q, $rootScope) {

	return {
		request: function (config) {
			$rootScope.loader = true;
			return config;
		},
		requestError: function (rejection) {			
			$rootScope.loader = false;
			return $q.reject(rejection);
		},
		response: function (response) {
			$rootScope.loader = false;				
			return response;
		},

		responseError: function (rejection) {
			$rootScope.loader = false;
			return $q.reject(rejection);
		}
	};

});