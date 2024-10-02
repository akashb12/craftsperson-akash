class StringCalculator {
    addition(str) {
        let sum = 0;
        if (str == "") {
            return sum;
        }
        let delimiters = /[\n,]/
        if (str.startsWith("//")) {
            const delimiterEndIndex = str.indexOf("\n");
            let customDelimiter = str.substring(2, delimiterEndIndex);
            str = str.substring(delimiterEndIndex + 1);
            delimiters = new RegExp(`[${customDelimiter}]`);;
        }
        let num = str.split(delimiters).map((num) => {
            sum += Number(num)
        })
        return sum
    }
};

// for testing purpose
let test = new StringCalculator()
console.log(test.addition("//;\n1;2;3"));

module.exports = StringCalculator;