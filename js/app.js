var app = angular.module('FantasticBoxOrder',['ngRoute']);

angular.module('FantasticBoxOrder').config(function($routeProvider){
  $routeProvider.when('/step-1', {
      templateUrl: 'partials/dimensions.html',
      controller: 'ctrl'
    }).when('/step-2', {
      templateUrl: 'partials/cardboardGrade.html',
      controller: 'ctrl'
    }).when('/step-3', {
      templateUrl: 'partials/printQuality.html',
      controlller: 'ctrl'
    }).when('/step-4', {
      templateUrl: 'partials/extras.html',
      controller: 'ctrl'
    }).when('/total-cost', {
      templateUrl: 'partials/total.html',
      controller: 'ctrl'
    });
});

