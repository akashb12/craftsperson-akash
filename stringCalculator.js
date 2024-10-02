class StringCalculator {
    addition(str) {
        let sum = 0;
        if (str == "") {
            return sum;
        }
        let num = str.split(",").map((num) => {
            sum += Number(num)

        })
        return sum
    }
};

// for testing purpose
let test = new StringCalculator()
console.log(test.addition("1,2"));

module.exports = StringCalculator;