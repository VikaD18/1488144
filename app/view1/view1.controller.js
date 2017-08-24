angular.module('myApp.view1')
    .controller('View1Ctrl', ['$scope','Shop','Phone',function($scope, Shop,Phone) {
    $scope.home="home";
        $scope.phone=new Phone('g', '555');
        $scope.addItem=function (item) {
            Shop.addOrder(item);
        };
        Shop.getAllItems();
}])
    .controller('View1ACtrl', [function() {

    }])
    .controller('View1A1Ctrl', ['$scope','Shop',function($scope,Shop) {

    }]);