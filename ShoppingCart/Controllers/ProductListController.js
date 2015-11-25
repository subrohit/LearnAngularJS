angular.module("productStore")
    .constant("productListActiveClass", "btn-primary")
    .constant("productPageSize", 3)
    .constant("productViewAll", false)
    .controller("ProductListCtrl", function ($scope, $filter, productListActiveClass, productPageSize, productViewAll, cart) {

        $scope.selectedCategory = '';
        $scope.selectedPage = 1;
        $scope.pageSize = productPageSize;
        $scope.viewAll = productViewAll;
        $scope.productsFilteredByCategoryCount = 0;
        $scope.selectedSortOption = { name: "price-Ascending", value: "Ascending" };

        $scope.selectCategory = function (category) {
            $scope.selectedCategory = category;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.filteredProductsByCategory = function () {
            var filteredResults = $filter('filter')($scope.data.products, $scope.selectedCategory);

            if(angular.isArray(filteredResults))
                $scope.productsFilteredByCategoryCount = filteredResults.length;

            return filteredResults;
        }

        $scope.addProductToCart = function (product) {
            cart.addProduct(product);
            product.isAddedToCart = true;
        }

        $scope.removeFromCart = function (product) {
            cart.removeProduct(product.id);
            product.isAddedToCart = false;
        }

    });