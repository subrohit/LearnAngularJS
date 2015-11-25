angular.module("productStore")
    .constant("dataUrl", "http://proangularjslearnapi.azurewebsites.net/api/GetAllProducts")
    .constant("orderUrl", "http://proangularjslearnapi.azurewebsites.net/api/PostProducts")
    .constant("productColumns", ["Name","Price","Description"])
    .controller("MainCtrl", function ($scope, $http, $location, dataUrl, orderUrl, productColumns, cart) {
        $scope.data = {};
        $scope.productColumns = productColumns;

        $http.get(dataUrl)
        .success(function (products) {
            $scope.data.products = products;
        })
        .error(function (error) {
            $scope.data.error = error;
        })

        $scope.sendOrder = function (shippingDetails) {            
            var order = angular.copy(shippingDetails);
            order.Products = cart.getProducts();
            console.log(order);
            $http.post(orderUrl, order)
            .success(function (data) {
                $scope.data.orderId = data.id;
                cart.getProducts().length = 0;
            })
            .error(function (error) {
                $scope.data.orderError = error;
            }).finally(function () {
                $location.path("/complete");
            });
        };    
    });