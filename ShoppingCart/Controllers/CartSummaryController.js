angular.module("productStore")
.controller("cartSummaryController", function ($scope, cart) {
    $scope.cartData = cart.getProducts();
    $scope.total = function () {
        var total = 0;
        for (var i = 0; i < $scope.cartData.length; i++) {
            total += $scope.cartData[i].Price;
        }
        return total;
    }
    $scope.remove = function (product) {
        console.log(product);
        cart.removeProduct(product.Id);
        product.isAddedToCart = false;
    }
});