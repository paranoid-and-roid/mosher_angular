app

.controller("LoginCtrl", ["$scope", "AuthenticationService", function($scope, AuthenticationService){
	
	$scope.credentials = {username: "", password: ""};
	
	$scope.login = function() {
		AuthenticationService.login($scope.credentials);
	};
}])

.controller("HomeCtrl", ["$scope", "AuthenticationService", function($scope, AuthenticationService){
	$scope.title = "Home";
	$scope.message = "Watch me change when you hover over the images";
	
	$scope.logout = function() {
		AuthenticationService.logout();
	};
}]);