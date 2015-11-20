angular.module("productStore")
    .constant("dataUrl", "http://proangularjslearn.azurewebsites.net/testdata/Products.json")
    .constant("productColumns", ["name","price","description"])
    .controller("MainCtrl", function ($scope, $http, dataUrl, productColumns) {
        $scope.data = {};
        $scope.productColumns = productColumns;

        $http.get(dataUrl)
        .success(function (products) {
            $scope.data.products = products;
        })
        .error(function (error) {
            $scope.data.error = error;
        })

    });