app.controller('Controller', ['calculateFactory', function(calculateFactory) {

  var self = this;

  this.calculateArea = function(width, length, height) {
    return width * length * height;
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
    
    // return grade * area;
  };

}]);
