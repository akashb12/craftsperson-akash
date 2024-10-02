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
    });

    test('should handle an unknown amount of numbers', () => {
        expect(calculateFunc.addition("1,2,3,4")).toBe(10);
    });

    test('should handle new lines as delimiters', () => {
        expect(calculateFunc.addition("1\n2,3\n4")).toBe(10);
    });

    test('should handle custom delimiters ;', () => {
        expect(calculateFunc.addition("//;\n1;2;3")).toBe(6);
    });

    test('should handle custom delimiters -', () => {
        expect(calculateFunc.addition("//-\n1-2-3")).toBe(6);
    });

    test('should throw an error for negative numbers', () => {
        expect(() => calculateFunc.addition("1,-2")).toThrow("negatives not allowed: -2");
    });
})