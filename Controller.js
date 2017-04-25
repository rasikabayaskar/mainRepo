var app = angular.module('jsbin', []);

app.controller('DemoCtrl', function($scope,$http) {
  
  
	  var URL = 'http://api.openweathermap.org/data/2.5/forecast';
  
  var request = {
    method: 'GET',  
	 url: URL,  
	params: {
     id: '524901',
     appid: 'cc24e953f11b0a634e5a692460d23e3a'
    }
  };
  $http(request)
    .then(function(response) {
     $scope.data = response.data;
	 $scope.name="SANNNN";
	 $scope.daysObtained = $scope.data.list; 
	 var daysObtained = $scope.daysObtained ;  
    }).
    catch(function(response) {
      vm.data = response.data;
	
    });
	
	
});