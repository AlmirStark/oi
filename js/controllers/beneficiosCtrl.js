var app = angular.module('connect');

app.controller('beneficiosCtrl', function ($scope, Connect, $http, $location, $rootScope) {
// verifica se o user está logado
//Connect.check(Connect.isUser);
//console.log($rootScope.dado.nivel)
 $scope.cadastrarBeneficio = function (beneficio) {
 $scope.beneficio.dataCadastro = new Date().toLocaleDateString(); 
$http.post("http://serverconnect.herokuapp.com/api/beneficios/", $scope.beneficio).success( function(data) {
 		$scope.codeBeneficios = "Cadastrado com Sucesso";
 	}).error( function(err) {
 		$scope.codeBeneficios = "Erro ao cadastrar";
 		swal("Erro" + err );
 	}); 
 	console.log(beneficio.passagem);
 };	

$scope.backTo = function () {
	window.location.reload();
	$scope.beneficio  = '';
};

$scope.beneficios = [];
$http.get('http://serverconnect.herokuapp.com/api/beneficios').success(function (data) {
	$scope.beneficios = data;
}).error(function (err) {
	swal("Erro ao buscar dados");
});

/*

$scope.exames = [];
$http.get('http://serverconnect.herokuapp.com/api/exames')
		.success(function (data) {
		$scope.exames = data;
}).error(function(error) {
	alert(error);
}); 

$scope.passagens = [];

$http.get('http://serverconnect.herokuapp.com/api/passagens').success(function (data)  {
	$scope.passagens = data;
}).error(function (error)  {
	alert(error);
});


$scope.remedios = [];
$http.get('http://serverconnect.herokuapp.com/api/remedios').success(function (data)  {
	$scope.remedios = data;
}).error(function (error)  {
	alert(error);
});
    */

$scope.consultas = [];

$http.get('http://serverconnect.herokuapp.com/api/consultas').success(function (data) {
	$scope.consultas = data;
}).error(function (err) {
	swal("Erro ao buscar dados");
});



}); 
app.controller('beneficioCtrl', function ($http, $scope, $routeParams) {
	$scope.beneficio = [];	
	$http.get('http://serverconnect.herokuapp.com/api/beneficios/' + $routeParams._id).success(function (data) {
		$scope.beneficio = data;
	}).error(function (err) {
		swal("Falha ao buscar dados");
	});
});