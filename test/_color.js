/* jshint node: true */

var color = {
  red:     [31, 39],
  green:   [32, 39],
  yellow:  [33, 39],
  blue:    [34, 39],
  magenta: [35, 39],
  cyan:    [36, 39],
  white:   [37, 39],
  gray:    [90, 39],
  dim:     [2, 22]
};

module.exports = {};

function applyColor(key) {
  var col = '\u001b[' + color[key][0] + 'm';
  var reset = '\u001b[' + color[key][1] + 'm';

  module.exports[key] = function(str){
    return col + str + reset;
  };
}

for (var key in color) {
  applyColor(key);
}
