angular.module("productStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productPageSize", 3)
    .constant("productViewAll", false)
    .controller("ProductListCtrl", function ($scope, $filter, productListActiveClass, productPageSize, productViewAll) {

        var selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = productPageSize;
        $scope.viewAll = productViewAll;
        $scope.productsFilteredByCategoryCount = 0;
        $scope.reverse = true;

        $scope.selectCategory = function (category) {
            selectedCategory = category;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.filteredProductsByCategory = function () {            
            var filteredResults = $filter('filter')($scope.data.products, selectedCategory);            

            if(angular.isArray(filteredResults))
                $scope.productsFilteredByCategoryCount = filteredResults.length;

            return filteredResults;
        }

        $scope.selectedcategoryClass = function (category) {
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }

    });