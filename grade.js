var app = angular.module("myApp",[]);
app.controller("control",function($scope){
    $scope.add = function() {
        var d1 =parseInt($scope.data1);  
        var d2=parseInt($scope.data2);
        var d3 =parseInt($scope.data3);  
        var d4=parseInt($scope.data4);
        var d5 =parseInt($scope.data5);  
        var avg = (d1 + d2 + d3 + d4 + d5)/5;
        $scope.avgmarks = avg;
        if(avg > 95){
            $scope.grade = "S";
        }
        else if(avg > 85 && avg<95){
            $scope.grade = "A";
        }
        else if(avg > 75 && avg<85){
            $scope.grade = "B";
        }
        else if(avg > 65 && avg<75){
            $scope.grade = "C";
        }
        else if(avg > 50 && avg<65){
            $scope.grade = "P";
        }
        else{
            $scope.grade = "F";
        }
    }
});