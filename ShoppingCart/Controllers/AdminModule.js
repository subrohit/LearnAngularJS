angular.module("AdminModule", ["ngRoute", "ngAnimate"])
.config(function ($routeProvider) {
    $routeProvider.when("/main", {
        templateUrl: "../Views/Admin.html",
        caseInsensitiveMatch: true
    });
    $routeProvider.otherwise({
        templateUrl: "../Views/Admin.html",
        caseInsensitiveMatch: true
    });
})