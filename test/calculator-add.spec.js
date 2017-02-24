const assert = require('chai').assert;
const describe = require('mocha').describe;
const it = require('mocha').it;
const Calculator = require('./../src/Calculator');
const sinon = require('sinon');

describe('Test Calculator', () => {
    let calculator = new Calculator();
    it('When running an operator', () => {
        let fakeOperator = {
            run: () => {
            }
        };
        let runMethodSpy = sinon.spy(fakeOperator, 'run');
        calculator.register('so', fakeOperator);

        calculator.calculate('so', 1, 2);

        assert(runMethodSpy.calledWith(1, 2));
    });

    it('When running a not existed operator', () => {
        assert.throws(() => {
            calculator.calculate('notExistedOperator', 1, 2);
        })
    })
});