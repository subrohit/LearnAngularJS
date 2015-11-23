angular.module("productStore")
    .constant("dataUrl", "http://proangularjslearn.azurewebsites.net/testdata/Products.json")
    .constant("orderUrl", "http://proangularjslearn.azurewebsites.net/testdata/Products.json")
    .constant("productColumns", ["name","price","description"])
    .controller("MainCtrl", function ($scope, $http, $location, dataUrl, productColumns) {
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
            $scope.data.orderId = generateUUID();
            $location.path("/complete");
        };

        function generateUUID() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };

    });