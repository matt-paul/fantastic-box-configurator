describe('Controller', function() {
  beforeEach(module('FantasticBoxOrder'));

  var ctrl;
  // var a;

  beforeEach(inject(function($controller) {
    ctrl = $controller('Controller');
  }));

  it('calculates the area of a box', function() {
    expect(ctrl.calculateArea(2,2,2)).toEqual(8);
  });

  describe('cardboard grade calculation', function() {

    it('correctly calculates the price of a grade A box', function() {
      expect(ctrl.cardboardGradeCalc('A', 2)).toEqual(0.40);
    });

    it('correctly calculates the cost of a grade B box', function() {
      expect(ctrl.cardboardGradeCalc('B', 2)).toEqual(0.20);
    });

    it('correctly calculares the cost of a grade C box', function() {
      expect(ctrl.cardboardGradeCalc('C', 2)).toEqual(0.10);
    });

    it('errors if grade C box larger than 2m is requested', function() {
      expect( function(){ ctrl.cardboardGradeCalc('C', 2.1); } ).toThrow(new Error("Grade C box must be below 2m squared"));
    });

  });
});
