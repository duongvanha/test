const assert = require('chai').assert;
const describe = require('mocha').describe;
const it = require('mocha').it;
const Addition = require('./../src/operators/Addition');

describe('Addition oporater', function () {
    let addition = new Addition();

    it('with 6, 3 should returns 9', function () {
        assert.equal(addition.run(6, 3), 9);
    });
});