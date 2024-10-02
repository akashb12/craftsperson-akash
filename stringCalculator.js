class StringCalculator {
    addition(str) {
        let sum = 0;
        if (str == "") {
            return sum;
        }
        let num = str.split(/[\n,]/).map((num) => {
            sum += Number(num)
        })
        return sum
    }
};

// for testing purpose
let test = new StringCalculator()
console.log(test.addition("1\n2,3"));

module.exports = StringCalculator;