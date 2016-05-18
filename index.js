/**
 * Created by abc on 17/05/2016.
 */
var app=angular.module("myapp",['checklist-model']);

app.controller("myctrl", function ($scope) {
    $scope.userbook=[];
    $scope.id=1;
    $scope.user={'id':$scope.id};

    $scope.education=['B.Tech', 'B.Com', 'B.Sc', 'BA'];
    $scope.knldg=["a","b","c"];



    $scope.savme=function(){
        $scope.userbook.push($scope.user);
        $scope.id = $scope.id +1 ;
        $scope.user={'id':$scope.id};
    };

    $scope.updatme=function($index){
        $scope.editg=false;
        $scope.user={'id':$scope.id};
    };

    $scope.edtme=function (val) {
        $scope.editg=true;
        $scope.user=$scope.userbook[val];
    };

    $scope.deleteme=function ($index) {
        $scope.userbook.splice($index,1);
    };



});