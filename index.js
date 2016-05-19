/**
 * Created by abc on 17/05/2016.
 */
var app=angular.module("myapp",['checklist-model','ngMessages']);

app.controller("myctrl", function ($scope, $http) {

    $scope.userbook=[];
    $scope.pusheducation=[];
    $scope.popeducation=[];
    $scope.unshifteducation=[];
    $scope.shifteducation=[];
    

    $scope.id=1;
    $scope.user={'id':$scope.id};

    $scope.education=['B.Tech', 'B.Com', 'B.Sc', 'BA'];
    $scope.knldg=["a","b","c"];


    $scope.nwpush=function () {
      $scope.education.push($scope.pusheducation);
        $scope.pusheducation=[];
    };

    $scope.nwpop=function () {
        $scope.popeducation.push($scope.education[$scope.education.length - 1]);
        $scope.education.pop();
    };

    $scope.nwunshift=function () {
        $scope.education.unshift($scope.unshifteducation);
        $scope.unshifteducation=[];
    };

    $scope.nwshift=function () {
        $scope.shifteducation.push($scope.education[0]);
        $scope.education.shift();
    };

    $scope.savme=function(){
        $scope.userbook.push($scope.user);
        /*$scope.userbook.name.sort();*/
        $scope.id = $scope.id +1 ;

        $scope.user={'id':$scope.id};
    };

    $scope.predicate = 'email';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };

    /*$scope.sortname=function () {
        $scope.userbook.name.sort(a,b);
    };*/

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