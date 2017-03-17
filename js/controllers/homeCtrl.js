var app = angular.module('connect');

app.controller('homeCtrl', function ($scope, Connect, $rootScope) {
// verifica se o user está logado
 Connect.check(Connect.isUser);
	
	console.log($rootScope.dado);
});
