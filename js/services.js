app.factory("AuthenticationService", function($location) {
	
	return {
		login: function(credentials) {
			if(credentials.username === "ralph") {
				$location.path('/home');
			}
		},
		
		logout: function() {
			$location.path('/login');
		}
	};
});
