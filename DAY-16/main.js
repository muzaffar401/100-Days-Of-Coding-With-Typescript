//Day Challenge 16
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//task 46
//Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
// let laptop = {
//     make: "Dell",
//     model: "New Elite Series",
//     year: 2024,
//     describe: function () {
//       console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
//     },
//   };
//   laptop.describe();
//task 47
//Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
// let laptops = [
//     { make: "Dell", model: "XPS 15", year: 2021 },
//     { make: "Apple", model: "MacBook Pro", year: 2020 },
//     { make: "HP", model: "Spectre x360", year: 2021 },
//   ];
//   let [laptop1, laptop2] = laptops;
//   console.log(laptop1);
//   console.log(laptop2);
//task 48
//Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var pricesSet1 = [1200, 1500, 1100];
var pricesSet2 = [1000, 1300, 1600];
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices);
