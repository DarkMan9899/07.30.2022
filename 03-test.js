//Using the constructor function create, an object and methods to support the following functionality
// const calculator = new Calculator(0); // Initial result is 0
// calculator.plus(5); // add 5 to the result
// calculator.minus(3); // subtract 3 from result
// calculator.multiply(3); // multiply result by 3
// calculator.divide(2); // divide result on 2
// calculator.getResult() // Returns the result


function Calculator(res) {
    this.result = res;
    this.plus = function(number){
        this.result += number;
    };
    this.minus = function(number){
        this.result -= number;
    };
    this.multiply = function(number){
        this.result *= number;
    };
    this.divide = function(number){
        this.result /= number;
    };
    this.getResult = function(){
        return this.result;
    };
}
const calculator = new Calculator(0);
calculator.plus(5);
calculator.minus(3);
calculator.multiply(3);
calculator.divide(2);
console.log(calculator.getResult());




