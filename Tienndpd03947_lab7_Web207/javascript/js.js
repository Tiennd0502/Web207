(function() {
    let myApp = angular.module('myApp', []);
    // bài 1
    myApp.controller('FormCtrl', ($scope, $http) => {
        $scope.products = list;
    });
    // bài 2
    myApp.filter('percentage', ($filter) => {
        return (input, decimals) => {
            return $filter('number')(input * 100, decimals) + "%";
        };
    });
    // Bài 4
    myApp.controller('FilterCtrl', ($scope) => {
        $scope.pageSize = 8;
        $scope.products = list;
        $scope.sort = "name";
        $scope.begin = 0;
        $scope.pageCount = Math.ceil($scope.products.length / $scope.pageSize);
        $scope.sortBy = (sort) => {
            $scope.sort = sort;
            return false;
        };
        $scope.first = () => {
            $scope.begin = 0;
            return false;
        };
        $scope.prev = () => {
            if ($scope.begin > 0) {
                $scope.begin -= $scope.pageSize;
            }
            return false;
        };
        $scope.next = () => {
            if ($scope.begin < ($scope.pageCount - 1) * $scope.pageSize) {
                $scope.begin += $scope.pageSize;
            }
            return false;
        };
        $scope.first = () => {
            $scope.begin = ($scope.pageCount - 1) * $scope.pageSize;
            return false;
        };
    });
    // bài 5
    myApp.controller('HttpCtrl', ($scope, $http) => {
        $scope.pageSize = 8;
        $scope.products = [];
        $http.get("javascript/prods.json")
            .then((response) => {
                $scope.products = response.data;
                $scope.pageCount = Math.ceil($scope.products.length / $scope.pageSize);
            })
            .catch((err) => {
                console.log(err);
            });
        $scope.sort = "name";
        $scope.begin = 0;
        $scope.pageCount = Math.ceil($scope.products.length / $scope.pageSize);
        $scope.sortBy = (sort) => {
            $scope.sort = sort;
            return false;
        };
        $scope.first = () => {
            $scope.begin = 0;
            return false;
        };
        $scope.prev = () => {
            if ($scope.begin > 0) {
                $scope.begin -= $scope.pageSize;
            }
            return false;
        };
        $scope.next = () => {
            if ($scope.begin < ($scope.pageCount - 1) * $scope.pageSize) {
                $scope.begin += $scope.pageSize;
            }
            return false;
        };
        $scope.first = () => {
            $scope.begin = ($scope.pageCount - 1) * $scope.pageSize;
            return false;
        };
    });


})()