angular.module('myApp.view1')
    .controller('View1Ctrl', ['$scope','Shop','Phone',function($scope, Shop,Phone) {
    $scope.home="home";
        $scope.phone=new Phone('g', '555');
        $scope.addItem=function (item) {
            Shop.addOrder(item);
        };
        $scope.phones=[];
        Shop.getAllItems().then(function (_items) {
            $scope.phones=_items;

        });
}]);