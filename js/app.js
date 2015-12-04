var app = angular.module('FantasticBoxOrder', [
  'ngRoute'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/step-1', {
        templateUrl: 'partials/dimensions.html'
      }).
      when('/step-2', {
        templateUrl: 'partials/cardboardGrade.html'
      }).
      when('/step-3', {
        templateUrl: 'partials/printQuality.html'
      }).
      when('/step-4', {
        templateUrl: 'partials/extras.html'
      }).
      when('/total-cost', {
        templateUrl: 'partials/total.html'
      });
}]);

