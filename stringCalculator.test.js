const StringCalculator = require('./stringCalculator');
describe('StringCalculator', () => {
    let calculateFunc;
    beforeEach(() => {
        calculateFunc = new StringCalculator();
    });

    test('should return 0 for empty string', () => {
        expect(calculateFunc.addition("")).toBe(0);
    });

    test('should return number itself when only one number is provided', () => {
        expect(calculateFunc.addition("1")).toBe(1);
    });

    test('should return sum of two coma-seperated numbers', () => {
        expect(calculateFunc.addition("1,2")).toBe(3);
    })
})