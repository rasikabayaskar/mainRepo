var app = angular.module('jsbin', []);

app.controller('DemoCtrl', function($scope,$http) {
  
	   $scope.city = null;
	  var URL = 'http://api.openweathermap.org/data/2.5/forecast';
  
$scope.getUpdate =  function()
	{
		
				  var request = {
					method: 'GET',  
				url: URL,  
				params: {
					 q: $scope.city,
					 appid: 'cc24e953f11b0a634e5a692460d23e3a'
					}
				  };
				  $http(request)
					.then(function(response) {
					 $scope.data = response.data;
					$scope.daysObtained = $scope.data.list;
					var allDays = [];
					var requiredPreviousDate = null;  
					var arry = [];
					

				 

				var daysObtained = $scope.daysObtained ;  
				//alert(daysObtained);
					}).
					catch(function(response) {
						   var userInput = $scope.city;
						   $scope.daysObtained = null;  
						   alert(userInput +" Is not a valid. Please enter a valid city");
						   
						 
					});
		}
	
	
});
