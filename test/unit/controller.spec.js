describe('Controller', function() {
  beforeEach(module('FantasticBoxOrder'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('Controller');
  }));

  it('calculates the area of a box', function() {
    expect(ctrl.calculateArea(2,2,2)).toEqual(8);
  });
});
