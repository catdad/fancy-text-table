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
    it('takes a string');

    it('renders the title as a single cell spanning the entire table');
  });

  describe('#line', function () {
    it('renders as a break in the table');
  });

  describe('#render', function () {
    it('returns a string');
  });
});
