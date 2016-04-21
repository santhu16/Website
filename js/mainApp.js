/**
 * Created by sirisha on 4/18/2016.
 */
var mainApp=angular.module("mainApp",['ngRoute','ngAnimate','ui.bootstrap']);
console.log("hello");

mainApp.config([ '$routeProvider', function($routeProvider) {
    $routeProvider.when('/Home',{
        templateUrl:'../views/home.html',
    }).when('/Login', {
        templateUrl : '../views/login.html',
    }).when('/List', {
        templateUrl : '../views/list.html',
        Controller: 'listController',
    }).when('/Post', {
        templateUrl : '../views/post.html',
    }).when('/About', {
        templateUrl : '../views/about.html',
    }).otherwise('/Home',{
        templateUrl:'../views/home.html',
    });
    //$locationProvider.html5Mode(true);

}]);