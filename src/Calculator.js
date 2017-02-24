class Calculator {
    constructor() {
        this.operators = {};
    }

    register(operatorName, operator) {
        this.operators[operatorName] = operator;
    }

    calculate(operatorName, a, b) {
        if (!this.operators[operatorName]) throw new Error();
        this.operators[operatorName].run(a, b);
    }
}
module.exports = Calculator;