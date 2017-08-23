angular.module('myApp.view1')
    .controller('View1Ctrl', ['$scope','Shop',function ($scope,Shop) {
        $scope.kuku = "kuku";

        $scope.addItem=function (item) {
            Shop.addOrders(item);
        };
        $scope.phone=[];
        Shop.getAllItems().then(function (_items) {
            $scope.phone=_items;
        });
    }]);