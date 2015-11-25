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
            var orderData = angular.copy(shippingDetails);
            orderData.Products = cart.getProducts();
            console.log(angular.toJson(orderData));
            var req = {
                method: 'POST',
                url: orderUrl,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: angular.toJson(orderData)
            }

            $http(req)
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