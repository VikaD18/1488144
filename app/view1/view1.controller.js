angular.module('myApp.view1')
    .controller('View1Ctrl', ['$scope','Phones','Shop',function ($scope,Phones,Shop) {
        $scope.kuku = "kuku";

        $scope.addItem=function (item) {
           // Shop.addOrders(item);
        };
        $scope.phone=[];
        Shop.getAllItems().then(function (_items) {
            $scope.phone=_items;
        });
    }]);