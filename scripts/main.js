// Instantiate a new module
var bitcoinCalculator = angular.module('bitcoinCalculator', []);

// Bind the controller with the view
bitcoinCalculator.controller('bitcoinController', ['$scope', function($scope) {
    // Attach the number ‘0’ to the DOM
    $scope.somenumber = 0;
}]);