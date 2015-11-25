angular.module("customDirectives", [])
.directive("viewAll", function () {
    return {
        restrict: "E",
        scope: {
            isviewall: "=isviewall"
        },
        templateUrl: '../Views/Directives/ViewAll.html',
        controller: function ($scope) {
            $scope.getViewAllClass = function () {
                return $scope.isviewall ? "btn-danger" : "btn-success";
            }
        }
    };
})
.directive("sortAll", function () {
    return {
        restrict: "E",
        scope: {
            columns: "=sortcolumns",
            optionselected: "=selectedoption"
        },
        templateUrl: '../Views/Directives/SortAll.html',
        controller: function ($scope) {
            $scope.sortOptions = [];
            var asc = 'Ascending';
            var desc = 'Descending';
            $scope.getSortOptions = function () {
                angular.forEach($scope.columns, function (item) {
                    $scope.sortOptions.push({ name: item + '-' + asc, value: asc });
                    $scope.sortOptions.push({ name: item + '-' + desc, value: desc });
                });
                $scope.optionselected = $scope.sortOptions[0];
                return $scope.sortOptions;
            }
        }
    };
})
.directive("cartSummary", function (cart) {
    return {
        restrict: "E",
        templateUrl: "../Views/Directives/CartSummary.html",
        controller: function ($scope) {
            var cartData = cart.getProducts();
            $scope.total = function () {
                var total = 0;
                for (var i = 0; i < cartData.length; i++) {
                    total += cartData[i].Price;
                }
                return total;
            }
            $scope.itemCount = function () {                
                return cartData.length;
            }
        }
    };
});