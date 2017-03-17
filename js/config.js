var app = angular.module('connect', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/login.html',
		controller: 'loginCtrl'
	});

	$routeProvider.when('/home', {
		templateUrl: 'views/Home.html',
		controller: 'homeCtrl'
	});

	$routeProvider.when('/cadastros', {
		templateUrl: 'views/cadastros/Cadastros.html',
	});

	$routeProvider.when('/listaBeneficios', {
		templateUrl: 'views/ListaDeBeneficios.html',
		controller: 'beneficiosCtrl'
	});

	$routeProvider.when('/cadastroBeneficios', {
		templateUrl: 'views/Beneficios.html',
		controller: 'beneficiosCtrl'
	});

	$routeProvider.when('/detalhesBeneficios/:_id', {
		templateUrl: 'views/detalhesBeneficios.html',
		controller: 'beneficioCtrl'
	});

	$routeProvider.when('/cadastroCasa', {
		templateUrl: 'views/cadastros/Moradia.html'
	});

	$routeProvider.when('/cadastroFamilia', {
		templateUrl: 'views/cadastros/CadastrosFamilia.html'
	});

	$routeProvider.when('/cadastroAgua', {
		templateUrl: 'views/cadastros/Agua.html'
	});

	$routeProvider.when('/cadastroEnergia', {
		templateUrl: 'views/cadastros/Energia.html'
	});

	$routeProvider.when('/cadastroEducacao', {
		templateUrl: 'views/cadastros/Educacao.html',
	});

	$routeProvider.when('/cadastroSaude', {
		templateUrl: 'views/cadastros/Saude.html',
	});

	$routeProvider.when('/cadastroFinancas', {
		templateUrl: 'views/cadastros/Financas.html'
	});

	$routeProvider.when('/cadastroSaneamento', {
		templateUrl: 'views/cadastros/Saneamento.html'
	});

	$routeProvider.when('/cadastroProfissao', {
		templateUrl: 'views/cadastros/Profissao.html'
	});

	$routeProvider.when('/cadastroLazer', {
		templateUrl: 'views/cadastros/Lazer.html'
	});

	$routeProvider.when('/cadastroAgricultura', {
		templateUrl: 'views/cadastros/Agricultura.html'
	});

	$routeProvider.when('/buscaCadastro', {
		templateUrl: 'views/searchCadastro.html'
	});


	/*
		Rotas para Estátisticas
	*/

	$routeProvider.when('/estatisticas', {
		templateUrl: 'views/estatisticas/estatitisca.html'
	});


	$routeProvider.when('/stats/casas', {
		templateUrl: 'views/estatisticas/Casas.html'
	});

	$routeProvider.when('/stats/agua', {
		templateUrl: 'views/estatisticas/Agua.html'
	});

	$routeProvider.when('/stats/energia', {
		templateUrl: 'views/estatisticas/Energia.html'
	});

	$routeProvider.when('/stats/educacao', {
		templateUrl: 'views/estatisticas/Educacao.html'
	});

	$routeProvider.when('/stats/saude', {
		templateUrl: 'views/estatisticas/Saude.html'
	});

	$routeProvider.when('/stats/financas', {
		templateUrl: 'views/estatisticas/Financas.html'
	});

	$routeProvider.when('/stats/familia', {
		templateUrl: 'views/estatisticas/Familia.html'
	});	

	$routeProvider.when('/stats/esgoto', {
		templateUrl: 'views/estatisticas/Esgoto.html'
	});	

	$routeProvider.when('/stats/lazer', {
		templateUrl: 'views/estatisticas/Lazer.html'
	});

	$routeProvider.when('/stats/profissao', {
		templateUrl: 'views/estatisticas/Profissao.html'
	});

	$routeProvider.when('/stats/agricultura', {
		templateUrl: 'views/estatisticas/Agricultura'
	});

});
