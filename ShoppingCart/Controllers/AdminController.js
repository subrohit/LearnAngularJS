angular.module("AdminModule")
.controller("AdminController",function ($scope) {
    var menuItems = ["Products", "Orders"];
    $scope.selectedMenuItem = 1;

    $scope.getMenuItems = function () {
        return menuItems;
    }
    $scope.setSelectedMenuItem = function (menuItemIndex) {
        $scope.selectedMenuItem = menuItemIndex;
    }

    $scope.getScreen = function () {
        return $scope.selectedMenuItem == 0 ? "../Views/Partials/AdminProducts.html" : "../Views/Partials/AdminOrders.html";
    };

})