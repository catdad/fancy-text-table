/* jshint node: true */

var table = require('text-table');
var unstyle = require('unstyle');

function includes(arr, item) {
  return arr.indexOf(item) >= 0;
}

module.exports = function() {
    var titles = [];
    var rows = [];

    return {
        row: function(values) {
            rows.push(values);
        },
        title: function(value) {
            titles.push(value);
            rows.push([value]);
        },
        line: function() {
            rows.push(['']);
        },
        render: function() {
            return table(rows, {
                stringLength: function(str) {
                    if (includes(titles, str)) {
                        return 0;
                    }

                    return unstyle.string(str).length;
                },
              hsep: '  '
            });
        }
    };
};
