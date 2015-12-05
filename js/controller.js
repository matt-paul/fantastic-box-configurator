app.controller('Controller', ['calculateFactory', function() {

  var self = this;

  this.width = 0.0;
  this.height = 0.0;
  this.length = 0.0;
  this.quantity = 0.0;

  this.discount = false;

  this.totalCost = 0.0;

  var total = {
    dim: 0,
    card: 0,
    print: 0,
    extras: 0,
  };

  this.calculateArea = function(width, height, length, quantity) {
    var area = width * height * length * quantity;
    total.dim = area;
    console.log(total);
    return area;
  };

  this.cardboardGradeCalc = function(grade, area) {
    switch (grade) {
      case 'A':
        return 0.20 * area;
      case 'B':
        return 0.10 * area;
      case 'C':
        if (area > 2) throw new Error("Grade C box must be below 2m squared");
        return 0.05 * area;
    }
  };

  this.printQuality = function(print, area) {
    switch (print) {
      case '3C':
        return 0.20 * area;
      case '2C':
        return 0.10 * area;
      case 'BL':
        return 0.05 * area;
      case 'NO':
        return 0;
      case 'FB':
        return "Discount = true";
    }
  };

}]);
