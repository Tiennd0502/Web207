(function() {
    var myApp = angular.module('myApp', []);
    myApp.controller('myInfoCtrl', myInfoCtrl);
    myInfoCtrl.$inject = ['$scope'];

    function myInfoCtrl($scope) {
        // bài 1
        $scope.fullName = "Nguyễn Văn Tèo";
        $scope.birthday = "30-02-2003";
        $scope.gender = "Nam";
        $scope.photo = "1006.jpg";
        $scope.mark = 8.5;
        // Bài 2
        $scope.student = {
                fullName: "Võ Thị C",
                birthday: "21-01-2000",
                gender: "Nữ",
                photo: "1111.jpg",
                mark: 9
            }
            // BÀI 3
        $scope.students = [{
                    fullName: "Võ Thị C",
                    birthday: "06-01-2000",
                    gender: "Nữ",
                    photo: "1006.jpg",
                    mark: 9
                },
                {
                    fullName: "Trần Hữu Tín",
                    birthday: "21-01-2000",
                    gender: "Nữ",
                    photo: "1111.jpg",
                    mark: 10
                },
                {
                    fullName: "Nguyen Van A",
                    birthday: "21-12-2000",
                    gender: "Nam",
                    photo: "1111.jpg",
                    mark: 5
                }

            ]
            //  Bài 4
        $scope.length = "";
        $scope.width = "";
        $scope.Calculate = () => {
            let width = parseInt($scope.width);
            let length = parseInt($scope.length);
            $scope.acreage = width * length;
            $scope.primeter = (width + length) * 2;
        }
    }

})()