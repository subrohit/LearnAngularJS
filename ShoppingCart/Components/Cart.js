angular.module("cart", [])
.factory("cart", function () {
    var cartData = [];
    return {
        addProduct: function (product) {            
            cartData.push(product);
        },
        removeProduct: function (id) {
            for (var i = 0; i < cartData.length; i++) {
                if (cartData[i].Id == id) {
                    cartData.splice(i, 1);
                    break;
                }
            }
        },
        getProducts: function () {
            return cartData;
        }
    }
});