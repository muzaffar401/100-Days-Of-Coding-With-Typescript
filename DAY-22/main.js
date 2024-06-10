//Day 22 Challenge
//task 64
//Q64 - Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
// // This function mixes a text and a number into one text
// function combineStringAndNumber(text: string, number: number): string {
//     // Joins the text and number into a single text
//     return text + number;
//   }
//   // Trying it out with "Age: " and 30
//   console.log(combineStringAndNumber("Age: ", 30)); // Shows "Age: 30"
//   // Here, we put together the text and number.
//task 65
// This function sees if both inputs are true
function checkBothTrue(val1, val2) {
    // Only says true if both val1 and val2 are true
    return val1 && val2;
}
// Trying it with true and false
console.log(checkBothTrue(true, true)); // Shows false
// It checks two things, but since one is false, the answer is false.
