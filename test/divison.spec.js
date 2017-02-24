const assert = require('chai').assert;
const describe = require('mocha').describe;
const it = require('mocha').it;
const Division = require('./../src/operators/Division');

describe('Division oporater', function () {
    let division = new Division();

    it('with 6, 3 should returns 2', function () {
        assert.equal(division.run(6, 3), 2);
    });

    it('with 1, 0 should throw Error: Division By Zero', function () {
        assert.throws(function () {
            division.run(1, 0);
        }, 'E_CALC: Division by zero')
    })
});