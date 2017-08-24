angular.module('myApp.view2')
    .controller('View2Ctrl', ['$scope','Shop','Phone',function($scope, Shop,Phone) {
        $scope.home="home";

        $scope.addItem=function (item) {
            Shop.addOrder(item);
        };
        $scope.phones=[];
        Shop.getAllItems().then(function (_items) {
            $scope.phones=_items;

        });
    }]);