angular.module("productStore")
.controller("cartSummaryController", function ($scope, cart) {
    $scope.cartData = cart.getProducts();
    $scope.total = function () {
        var total = 0;
        for (var i = 0; i < $scope.cartData.length; i++) {
            total += $scope.cartData[i].price;
        }
        return total;
    }
    $scope.remove = function (product) {
        cart.removeProduct(product.id);
        product.isAddedToCart = false;
    }
});