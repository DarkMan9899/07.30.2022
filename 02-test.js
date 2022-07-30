//Create an object and methods to support the following functionality
// const obj = {};
//
//
// // Your code to add methods
//
// obj.setSum(10);
// obj.add(20);
// console.log(obj.geSum()); // Should log 30, 10 + 20 = 30
// obj.setSum(100);
// console.log(obj.geSum()); // Should log 100,  the sum was set to 100

debugger
const obj = {};

function getImportNumbers(){
    obj.setSum = function(number){
        this.number = number;
    };
    obj.add = function(number){
        this.number += number;
    };
    obj.geSum = function(){
        return this.number;
    };
}
const numbers = getImportNumbers();
obj.setSum(10);
obj.add(20);
console.log(obj.geSum());
obj.setSum(100);
console.log(obj.geSum());