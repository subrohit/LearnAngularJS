/* Product Module*/
angular.module("productStore", ["customFilters", "customDirectives", "cart", "ngAnimate", "ngRoute"])
.config(function ($routeProvider) {
    $routeProvider.when("/checkout", {
        templateUrl: "../Views/Partials/CheckoutSummary.html",
        caseInsensitiveMatch: true
    });

    $routeProvider.when("/products", {
        templateUrl: "../Views/Partials/ProductList.html",
        caseInsensitiveMatch: true
    });

    $routeProvider.when("/complete", {
        templateUrl: "/../Views/Partials/ThankYou.html",
        caseInsensitiveMatch: true
    });
    $routeProvider.when("/placeorder", {
        templateUrl: "../Views/Partials/PlaceOrder.html",
        caseInsensitiveMatch: true
    });

    $routeProvider.otherwise({
        templateUrl: "../Views/Partials/ProductList.html",
        caseInsensitiveMatch: true
    });
});