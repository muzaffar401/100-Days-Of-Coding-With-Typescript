//Day 24 Challenge
//task 70
// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
// This function prints numbers from 1 to 5 using a loop
// function printNumbersWithLet() {
//     for (let i = 1; i <= 5; i++) {
//       // Uses let for loop variable i
//       console.log(i); // Logs numbers 1 through 5
//     }
//     // i is not accessible here, outside the loop, because it's defined with let
//   }
//   printNumbersWithLet();
//   // This shows that let limits i to the loop, preventing errors from using i where it's not intended.
//task 71
//Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
// Using `let` for a variable that can be reassigned
var age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26
// Trying to reassign a `const`-declared variable
var name = "Alice";
try {
    name = "Bob"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.
