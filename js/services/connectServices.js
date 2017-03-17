var app = angular.module('connect');

app.factory('Connect', function ($http, $location) {
	
	var service = {
	     isUser: false,
	     check: checkUser,
	     //create: _create,
	     excluir: _excluir,
	    //Api: 'http://localhost:8800/'
        Api: '192.168.0.129:8800/'
	}; 

	return service;

	function checkUser (user) {
		if(!user) {
		   $location.path('/');
		}
	}
	/*
	function _create (route, data) {
		return $http.post('/api/' + route, data );
	}*/

	function _excluir (route, id) {
		return $http.delete('/api/' + route + id);
	} 
});