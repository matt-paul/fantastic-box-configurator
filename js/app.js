var app = angular.module('FantasticBoxOrder',['ngRoute']);

angular.module('FantasticBoxOrder').config(function($routeProvider){
  $routeProvider.when('/step-1', {
      templateUrl: 'partials/dimensions.html'
    }).when('/step-2', {
      templateUrl: 'partials/cardboardGrade.html'
    }).when('/step-3', {
      templateUrl: 'partials/printQuality.html'
    }).when('/step-4', {
      templateUrl: 'partials/extras.html'
    }).when('step-5', {
      templateUrl: 'partials/total.html'
    });
});

