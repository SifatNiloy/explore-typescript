"use strict";
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }
// const add = function(num1: number, num2: number): number {
//   return num1 + num2;
// };
// const add = (num1: number, num2: number): number =>{
//   return num1 + num2;
// };
// const add = (num1: number[], num2: number): number => {
//   return num1[0] + num2;
// };
// const result = add([20], 30);
// const add = (num1: number, num2: number, num3:number=0): number =>{
//   return num1 + num2+ num3;
// };
// const result = add(10, 30);
// const add = (...numbers:number[]): number => {
//   return numbers.reduce((pre,cur)=>pre+cur,0);
// };
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var func = function (pre, cur) { return pre + cur; };
    return numbers.reduce(func, 0);
};
var result = add(10, 30, 24, 56, 65, 25);
console.log(result);
