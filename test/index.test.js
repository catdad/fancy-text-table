/* jshint node: true, mocha: true */

var expect = require('chai').expect;

var table = require('../');

describe('[index]', function () {
  describe('#row', function () {
    it('takes an array and renders items as individual cells', function () {
      var tbl = table();

      tbl.row([1, 2, 3]);

      var str = tbl.render();

      expect(str).to.match(/^1\s{2}2\s{2}3$/);
    });

    it('aligns multiple rows', function () {
      var tbl = table();

      tbl.row([11, 22, 33]);
      tbl.row([1, 2, 3]);

      var str = tbl.render();

      expect(str).to.match(/^11\s{2}22\s{2}33\n1\s{3}2\s{3}3$/);
    });
  });

  describe('#title', function () {
    it('takes a string and renders it as output', function () {
      var tbl = table();
      var TITLE = 'this is a title';

      tbl.title(TITLE);

      var str = tbl.render();

      expect(str).to.equal(TITLE);
    });

    it('renders the title as a single cell spanning the entire table', function () {
      var tbl = table();
      var TITLE = 'this is a title';
      var ROW = ['one', 'two', 'three', 'four'];

      tbl.title(TITLE);
      tbl.row(ROW);

      var str = tbl.render();

      expect(str).to.equal(TITLE + '\n' + ROW.join('  '));
    });
  });

  describe('#line', function () {
    it('renders as a new line', function () {
      var tbl = table();

      tbl.line();
      tbl.line();
      tbl.line();

      var str = tbl.render();

      expect(str).to.equal('\n\n');
    });

    it('adds breaks to the table and maintains alignment', function () {
      var tbl = table();
      var ROW1 = [1, 1, 1];
      var ROW2 = ['one', 'one', 'one'];

      tbl.row(ROW1);
      tbl.line();
      tbl.row(ROW2);

      var str = tbl.render();
      var expected = ROW1.join('    ') + '\n\n' + ROW2.join('  ');

      expect(str).to.equal(expected);
    });
  });

  describe('#render', function () {
    it('returns a string');

    it('can handle terminal colors');
  });
});
