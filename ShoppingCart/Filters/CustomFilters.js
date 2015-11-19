angular.module("customFilters", [])
.filter("unique", function () {
    return function (data, propertyName) {
        if (angular.isArray(data) && angular.isString(propertyName)) {
            var results = [];
            var keys = {};
            for (var i = 0; i < data.length; i++) {
                var val = data[i][propertyName];
                if (angular.isUndefined(keys[val])) {
                    keys[val] = true;
                    results.push(val);
                }
            }
            return results;
        } else {
            return data;
        }
    }
})
.filter("range", function ($filter) {
    return function (data, page, size, isViewAll) {
        if (angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size) && !isViewAll) {
            var start_index = (page - 1) * size;
            if (data.length < start_index) {
                return [];
            } else {
                return $filter("limitTo")(data.splice(start_index), size);
            }
        } else {
            return data;
        }
    }
})
.filter("pageCount", function () {
    return function (data, size, isViewAll) {
        if (angular.isArray(data) && !isViewAll) {
            var result = [];
            for (var i = 0; i < Math.ceil(data.length / size) ; i++) {
                result.push(i);
            }
            return result;
        } else {
            return 0;
        }
    }
})
.filter("sort", function ($filter) {
    return function (data, sortOption) {
        
        if (angular.isArray(data) && angular.isObject(sortOption)) {
            var options = sortOption["name"].split('-');
            var xc = options[1] == 'Ascending' ? false : true;
            return $filter("orderBy")(data, options[0], xc);
        } else {
            return [];
        }
    }
});