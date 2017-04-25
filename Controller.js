var app = angular.module('jsbin', []);

app.controller('DemoCtrl', function($scope,$http) {
  
  $scope.city = null;
  $scope.isCelcius = false;
  $scope.showConverter = false;
 var URL = 'http://api.openweathermap.org/data/2.5/forecast';
  $scope.getScale =  function(input)
	{

	var tableLength = document.getElementById("displayTable").rows.length;
	  if($scope.isCelcius == true)
	   {
			for(var i=1; i< tableLength; i++)
			{
				var show = document.getElementById("displayTable").rows[i].cells[0].innerHTML;
				var tempToFaren= parseInt(show,10) + 32 + String.fromCharCode(176) +"F";
				document.getElementById("displayTable").rows[i].cells[0].innerHTML = tempToFaren;
			}
			$scope.isCelcius = false;
	   }
	   else
	   {
			for(var i=1; i< tableLength; i++)
			{
				var show = document.getElementById("displayTable").rows[i].cells[0].innerHTML;
				var tempToFaren= parseInt(show,10) - 32 + String.fromCharCode(176) +"C";
				document.getElementById("displayTable").rows[i].cells[0].innerHTML = tempToFaren;
			}
			$scope.isCelcius = true;
	   }
}
  	$scope.getUpdate =  function()
	{
		$scope.showConverter = true;
		$scope.isCelcius = true;
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
		
		$scope.getUpdateFromEnter = function(keyEvent)
	{
		if (keyEvent.which === 13 )
		{
			$scope.getUpdate();
		}

	}
	
});
app.filter('convertToCel',function(){
return function( input ) {
var cel = input - 273.15;
var cel = cel.toFixed(2) +String.fromCharCode(176) + "C";
return cel;
}
});