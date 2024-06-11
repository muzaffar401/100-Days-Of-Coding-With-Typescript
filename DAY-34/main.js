//Day 34 Challenge
//task 100
// Question 100: Use the JavaScript Math object to find the square root of 144.
// // Finds the square root of 144
// const squareRoot: number = Math.sqrt(144);
// console.log(`The square root of 144 is ${squareRoot}.`);
// // This line will show that the square root of 144 is 12.
//task 101
// Question 101: Generate a random integer between 1 and 10.
// Generates a random integer between 1 and 10
function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomInt()); // Outputs a random integer between 1 and 10
// This function combines Math.random() with Math.floor() to create a random integer within our range.
