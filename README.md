Fancy Text Table

[![Build][1]][2]
[![Test Coverage][3]][4]
[![Code Climate][5]][6]
[![Downloads][7]][8]
[![Version][9]][8]
[![Dependency Status][10]][11]

[1]: https://travis-ci.org/catdad/fancy-text-table.svg?branch=master
[2]: https://travis-ci.org/catdad/fancy-text-table

[3]: https://codeclimate.com/github/catdad/fancy-text-table/badges/coverage.svg
[4]: https://codeclimate.com/github/catdad/fancy-text-table/coverage

[5]: https://codeclimate.com/github/catdad/fancy-text-table/badges/gpa.svg
[6]: https://codeclimate.com/github/catdad/fancy-text-table

[7]: https://img.shields.io/npm/dm/fancy-text-table.svg
[8]: https://www.npmjs.com/package/fancy-text-table
[9]: https://img.shields.io/npm/v/fancy-text-table.svg

[10]: https://david-dm.org/catdad/fancy-text-table.svg
[11]: https://david-dm.org/catdad/fancy-text-table

You know, it's like [text-table](), but kinda fancier. It features mostly the same functionality, but conveniently handles titles spanning all table cells, table breaks, and colors in all cells.

## Example

```javascript
var table = require('fancy-text-table');

var tbl = table();

tbl.title('numbers');
tbl.row([1, 2, 3, 4]);
tbl.line();
tbl.title('letters');
tbl.row(['a', 'b', 'c', 'd']);

var str = tbl.render();

console.log(str);

// numbers
// 1  2  3  4
//
// letters
// a  b  c  d
```
