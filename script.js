angular.module('myapp', [])
	.controller('MainController', ['$scope', function ($scope) {
		$scope.users = [
			{
				"name": "masashi hisatsugu",
				"age": 4,
				"gendar": "male"
			},
			{
				"name": "masako hisatsugu",
				"age": 16,
				"gendar": "female"
			},
			{
				"name": "kirara hisatsugu",
				"age": 6,
				"gendar": "female"
			}
		];
	}]);
