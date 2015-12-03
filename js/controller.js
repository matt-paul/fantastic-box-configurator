app.controller('Controller', ['calculateFactory', function(calculateFactory) {

  var self = this;

  this.calculateArea = function(width, length, height) {
    return width * length * height;
  };
}]);
