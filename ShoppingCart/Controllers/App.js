angular.module("productStore", ["customFilters", "customDirectives", "cart", "ngRoute"])
.config(function ($routeProvider) {
    $routeProvider.when("/checkout", {
        templateUrl: "../Views/Partials/CheckoutSummary.html",
        caseInsensitiveMatch: true
    });

    $routeProvider.when("/products", {
        templateUrl: "../Views/Partials/ProductList.html",
        caseInsensitiveMatch: true
    });

    $routeProvider.otherwise({
        templateUrl: "../Views/Partials/ProductList.html",
        caseInsensitiveMatch: true
    });
});