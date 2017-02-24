class Division {
    run(a, b) {
        if (b == 0) throw new Error('E_CALC: Division by zero');
        return a / b;
    }
}
module.exports = Division;