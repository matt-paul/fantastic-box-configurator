app.factory('calculateFactory', function() {
  return {
    area: function(width, height, length) {
      return width * length * height;
    }
  };
});
