app.controller('Controller', ['calculateFactory', function() {

  var self = this;

  self.width = 0.0;
  self.height = 0.0;
  self.length = 0.0;
  self.quantity = 0.0;
  self.discount = false;

  self.totalCost = 0.0;

  var total = {
    dim: 0,
    card: 0,
    print: 0,
    extras: 0,
  };

  self.calculateArea = function(width, height, length, quantity) {
    var area = width * height * length * quantity;
    total.dim = area;
    return area;
  };

  self.cardboardGradeCalc = function(grade, area) {
    switch (grade) {
      case 'A':
        grade = 0.20;
        break;
      case 'B':
        grade = 0.10;
        break;
      case 'C':
        if (area > 2) throw new Error("Grade C box must be below 2m squared");
        grade = 0.05;
    }
    var cardCost =  grade * area;
    total.card = cardCost;
    return cardCost;
  };

  self.printQuality = function(print, area) {
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
