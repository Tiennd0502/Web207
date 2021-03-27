(function() {
    let myApp = angular.module('myApp', []);
    myApp.controller('ParentCtrl', ($rootScope)=>{
        $rootScope.students = [
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
    // form add
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
        }
    });
    //  table
    myApp.controller('ShowCtrl', function($scope){
        $scope.id = '';
        $scope.edit = (index)=>{
            $scope.fullName = $scope.students[index].fullName;
            $scope.birthday = $scope.students[index].birthday;
            $scope.mark = $scope.students[index].mark;
            $scope.id = index;
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
    }); 
 
})()