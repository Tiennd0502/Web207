(function() {
    let myApp = angular.module('myApp', []);
    myApp.controller('ParentCtrl', ($scope)=>{
        $scope.students = [
            {
                fullName: "Nguyễn Văn Tèo",
                birthday: "20/02/2020",
                mark: 9
            },
            {
                fullName: "Phạm Thị Nở",
                birthday: "12/12/1212",
                mark: 6
            }
        ]; 
    });
    myApp.controller('ShowCtrl', ($scope)=>{
        $scope.id = '';
        $scope.edit = (index)=>{
            $scope.fullName = $scope.students[index].fullName;
            $scope.birthday = $scope.students[index].birthday;
            $scope.mark = $scope.students[index].mark;
            $scope.id = index;
            return false;
        };
        $scope.update = ()=>{
            if($scope.fullName == "" || $scope.birthday == "" || $scope.mark == ""){
                return false;
            }
            $scope.students[$scope.id].fullName = $scope.fullName;
            $scope.students[$scope.id].birthday = $scope.birthday ;
            $scope.students[$scope.id].mark = $scope.mark ;
            $scope.fullName = "";
            $scope.birthday ="";
            $scope.mark = "";
            $("#exampleModal").modal('hide');
        };
        $scope.delete = (index)=>{
            $scope.students.splice(index,1);
            return false;
        }
    }); 
    myApp.controller('FormCtrl',($scope) => {
        
    	$scope.Add = ()=>{
            if($scope.fullName == "" || $scope.birthday == "" ||$scope.mark ==""){
                return false;
            }
            let student = new Object();
            student.fullName = $scope.fullName;
            student.birthday = $scope.birthday;
            student.mark = $scope.mark;
            $scope.students.push(student);
            $scope.fullName = "";
            $scope.birthday ="";
            $scope.mark = "";
        };
        $scope.Cancel = ()=> {
            $scope.fullName = "";
            $scope.birthday ="";
            $scope.mark = "";
        };
    });

    myApp.controller('PrdCtrl',($scope)=>{
        $scope.products= [
            { 
                name: "Đồng hồ thụy sỹ", 
                image: "1001.jpg", 
                price: 1200 
            }, 
            { 
                name: "Dell Star X", 
                image: "1003.jpg", 
                price: 700 
            }, 
            { 
                name: "Sony Vaio 2017", 
                image: "1004.jpg", 
                price: 1700 
            }, 
            { 
                name: "Máy ảnh Canon", 
                image: "1005.jpg", 
                price: 300 
            }, 
            { 
                name: "Vòng cưới France", 
                image: "1009.jpg", 
                price: 7000
            },
            { 
                name: "Motorola thế hệ 5", 
                image: "1011.jpg", 
                price: 900 
            }, 
            { 
                name: "Mũ cao bồi Mexico", 
                image: "1014.jpg", 
                price: 100 
            }, 
            { 
                name: "Nước hoa Korea", 
                image: "1023.jpg", 
                price: 600 
            }  
        ];
    });
    	
 
})()