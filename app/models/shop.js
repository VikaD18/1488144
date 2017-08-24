angular.module('shop', [] )
    .service('Shop', ['$http','Phone',function ($http,Phone) {
        var orders=[];
        var items=[];
        function Shop() {
            console.log('constructor') ;
        }
        Shop.prototype.getOrders=function() {
         return orders;
         };
         Shop.prototype.addOrders=function(order) {
         return orders.push(order);
         };
        Shop.prototype.getAllItems=function () {
            return $http({
                method:'Get',
                url:'/data/phone.json'
            }).then(function successCallback(response){
                //this callback will be called asynchronously
                //when the response is available
               console.log(response);
            },function errorCallback(response) {
                console.error(response);
            });

            };
    return new Shop();
    }])
    .factory('Phone', [function() {
    function Phone(color, price) {
        this.color=color;
        this.price=price;
    }
    return Phone;
}]);