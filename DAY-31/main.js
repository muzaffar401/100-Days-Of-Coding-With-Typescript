//Day 31 Challenge
//task 91
// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
// Defines an array with three favorite fruits
// let favoriteFruits: string[] = ["Apple", "Banana", "Cherry"];
// favoriteFruits.push("Mango"); // Adds "Mango" to the end of the array
// console.log(favoriteFruits); // Outputs: ['Apple', 'Banana', 'Cherry', 'Mango']
// // This line adds a new fruit to our list of favorites.
//task 92
// Question 92: Write a function to remove the last element from an array and return the removed element.
// This function removes the last element from an array and returns it
function removeLastElement(arr) {
    return arr.pop(); // Removes and returns the last element of the array
}
// Example: Removing the last fruit from the array
var fruits = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits)); // Outputs: 'Cherry'
console.log(fruits); // Outputs: ['Apple', 'Banana']
// Here, we take out the last fruit and show the updated list.
