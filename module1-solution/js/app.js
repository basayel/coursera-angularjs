(function(){
'use strict';
angular.module("LunchChecker", [])
			 .controller("LunchCheckerController", LunchCheckerController);
LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope){
	$scope.checkIfTooMuch = function(){
		$scope.msgColor = "#999";
		if($scope.menu === undefined || $scope.menu === "" || /^\s*$/.test($scope.menu)){ //empty input value or has spaces only
			$scope.message = "Please enter data first";
			$scope.msgColor = "red";
		}else{
			var list = $scope.menu.split(",");
			$scope.message = (list.length <= 3) ? "Enjoy!" : "Too much!";
			$scope.msgColor = "green";
		}
	};
}

})();