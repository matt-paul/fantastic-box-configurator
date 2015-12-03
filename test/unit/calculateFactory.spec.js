describe('factory: Calculate', function() {

  var proportions = [
    {
      "length": 0.5,
      "width": 1.0,
      "height": 0.2
    }
  ];

  var calculate;

  beforeEach(module('FantasticBoxOrder'));

  beforeEach(inject(function(Calculate) {
    calculate = Calculate;
  }));

  it('returns a price', function() {
    expect(calculate.area).toBeDefined();
  });
});
