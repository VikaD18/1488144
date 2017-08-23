angular.module('shop', [] )
    .service('Shop', ['$http','$q','Phones',function ($http,$q,Phones) {
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
           if(items.length){
               return $q(function(resolve, reject) {
                   resolve(items);
               });
           }
            return $http({
               method:'Get',
                url:'/data/phones.json'
            }).then(function successCallback(response){
               //this callback will be called asynchronously
                //when the response is available
                items=response.data;
                return items.map(function (item) {
                    return new Phones(item.title,item.text, item.color, item.price)
                });
            },function errorCallback(response) {
               console.error(response);
            });
        };
        return new Shop();
    }])
    .factory('Phones', [function() {
   function Phones(title,text, color, price) {
this.title=title;
this.text=text;
this.color=color;
this.price=price;
   }
   return Phones;
}]);