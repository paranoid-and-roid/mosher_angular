var app = angular.module("myApp", ["ngRoute"])

.config(function($routeProvider) {
	$routeProvider
	
		.when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'LoginCtrl'
		})
		.when('/home', {
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})
		.otherwise(
			{redirectTo: '/'}
		);
});
