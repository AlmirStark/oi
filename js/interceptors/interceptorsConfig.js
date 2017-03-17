var app = angular.module('connect');

app.config(function ($httpProvider) {
     $httpProvider.interceptors.push('loading');
});