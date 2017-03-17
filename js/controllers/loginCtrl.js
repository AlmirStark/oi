var app = angular.module('connect');

app.controller('loginCtrl', function ($scope, $http, $rootScope, $location, Connect) {

	$scope.login = function (user) {
		$http.post('http://192.168.0.129:8800/login', $scope.user).success(function (res) {
			if(res.type) {
				$rootScope.token = res.data[0]._id;
				$location.path('/home');
				$rootScope.dado = res.data[0].name;
				Connect.isUser = true;
			}
			else if(!res.type) {
				swal(res.msg);
			}
		}).error(function (err) {
			swal(res.result);
		});
	};

});