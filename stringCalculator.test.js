const StringCalculator = require('./stringCalculator');
describe('StringCalculator' , ()=> {
    let calculateFunc;
    beforeEach(() => {
        calculateFunc = new StringCalculator();
    });
    test('should return 0 for empty string', () => {
      expect(calculateFunc.addition("")).toBe(0);
    })
    
})