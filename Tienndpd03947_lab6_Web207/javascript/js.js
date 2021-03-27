(function() {
    let myApp = angular.module('myApp', []);
    // bài 1
    myApp.controller('FormCtrl',($scope)=>{
    	// $scope.fullName = "";
    	$scope.salary = 0;
    	$scope.gender = "Nam";
    	$scope.ages = [
            {
                age: "Dưới 25 tuổi",
                rate: 0.07
            },
            {
                age: "Từ 25-40 tuổi",
                rate: 0.1
            },
            {
                age: "Trên 40 tuổi",
                rate: 0.15
            }
        ];
        $scope.age = $scope.ages[0];
        $scope.gender = "Nam";

        $scope.getBonus = ()=>{
            let bonus = parseInt($scope.salary)* $scope.age.rate;
            if($scope.gender == 'Nữ'){
                bonus+= 200000;
            }
            return bonus;
        }
    });

    //  bài 2
    myApp.controller('TableCtrl',($scope)=>{
        $scope.products = [
            {
                name: "Nước ngọt",
                price: 10000
            },
            {
                name: "Cafe đen",
                price: 12000
            },
            {
                name: "Thuốc lá",
                price: 18000
            }
        ];
        $scope.getTotal = ()=>{
            let total = 0;
            let length = $scope.products.length;
            for (let i = 0; i < length; i++) {
                if($scope.products[i].buy){
                    total += $scope.products[i].amount * $scope.products[i].price;
                }
            };
            return total;
        };
    });
    // Bài 3
    myApp.controller('ValidFormCtrl', ($scope)=>{
        $scope.salary = 0;
        $scope.gender = "Nam";
        $scope.ages = [
            {
                age: "Dưới 25 tuổi",
                rate: 0.07
            },
            {
                age: "Từ 25-40 tuổi",
                rate: 0.1
            },
            {
                age: "Trên 40 tuổi",
                rate: 0.15
            }
        ];
        $scope.age = $scope.ages[0];
        $scope.gender = "Nam";

        $scope.getBonus = ()=>{
            let bonus = parseInt($scope.salary)* $scope.age.rate;
            if($scope.gender == 'Nữ'){
                bonus+= 200000;
            }
            return bonus;
        }
    });
    // Bài 4
    myApp.controller('ValidInfoCtrl', ($scope)=>{
        $scope.Save = () =>{
           
        };
    })
    // Bài 4

    myApp.directive('polyNumber', ()=>{
        return {
            require: "ngModel",
            link: (scope, el, attr, mCtrl)=>{
                mCtrl.$parsers.push((value)=>{
                    let number = parseInt(value);
                    if(number%2== 0 && number%9 ==0){
                        mCtrl.$setValidity("charE", true);
                    }else{
                        mCtrl.$setValidity("charE", false);
                    }
                    return value;
                })
            }
        };
    });
    myApp.controller('CustomValCtrl',($scope,)=>{
        // $scope.Check =()=>{

        // };
    });

})()