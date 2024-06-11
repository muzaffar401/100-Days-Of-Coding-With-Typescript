//Day 35 Challenge
//task 103
//Question 103: Write a function that returns a random boolean value, true or false.
// // This function returns a random boolean value
// function getRandomBoolean(): boolean {
//     return Math.random() > 0.5; // Returns true if the random number is greater than 0.5
//   }
//   console.log(getRandomBoolean()); // Outputs either true or false randomly
//   // By comparing a random number to 0.5, we effectively get a true or false value randomly.
//task 104
// Question 104: Create a function that generates a random hexadecimal color code.
// This function generates a random hexadecimal color code
function getRandomHexColor() {
    var color = "#" +
        Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padStart(6, "0");
    return color; // Returns the random color code
}
console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
