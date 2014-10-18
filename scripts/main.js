// Instantiate a new module
var bitcoinCalculator = angular.module('bitcoinCalculator', []);

// Bind the controller with the view
bitcoinCalculator.controller('bitcoinController', ['$scope', '$http', function($scope, $http) {

    $scope.currentRate = 1000;
    $scope.initialAmount = 2500;

    $scope.bitcoinsHeld = function() {
        return $scope.initialAmount / $scope.currentRate;
    };

    $scope.newAmount = function(price) {
        return price / $scope.currentRate * $scope.initialAmount;
    };

    $scope.profit = function(price) {
        return price / $scope.currentRate * $scope.initialAmount - $scope.initialAmount;
    };

    $http.get('https://bitpay.com/api/rates')
        .success(function(data) {

            for (var i = 0; i < data.length; i++) {
                if (data[i].code === 'GBP') {
                    $scope.currentRate = data[i]['rate'];
                    break;
                }
            }
        });

}]);