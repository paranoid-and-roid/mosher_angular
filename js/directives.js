app.directive("showMessageWhenHovered", function() {
	return {
		restrict: "A",
		link: function(scope, element, attrs) {
			var originalMessage = scope.message;
			
			element.bind("mouseenter", function() {
				scope.message = attrs.message;
				scope.$apply();
			});
			element.bind("mouseleave", function(){
				scope.message = originalMessage;
				scope.$apply();
			});
		}
	};
});
