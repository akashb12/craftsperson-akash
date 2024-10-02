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
        str.split(delimiters).map((num) => {
            sum += Number(num)
        })
        let negativeNumbers = str.split(delimiters).filter((num) => num < 0);
        if(negativeNumbers.length) {
             throw new Error(`negatives not allowed: ${negativeNumbers.join()}`);
        }
        
        return sum
    }
};

// for testing purpose
// let test = new StringCalculator()
// console.log(test.addition("1,-2,-2,-4"));

module.exports = StringCalculator;