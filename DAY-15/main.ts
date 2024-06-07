//Day Challenge 15

//task 43

//Q43 - Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// let magicians = ["Alice", "David", "Chris"]; // Original list of magicians

// // Function to add "the Great" to each magician's name
// function make_great(magicians) {
//   let greatMagicians = []; // New list to store modified names
//   magicians.forEach((magician) => {
//     greatMagicians.push(`${magician} the Great`);
//   });
//   return greatMagicians; // Return the new list
// }

// // Function to print each magician's name
// function show_magicians(magicians) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }

// let greatMagicians = make_great([...magicians]); // Create a new modified array

// console.log("Original magicians:");
// show_magicians(magicians); // Print original names

// console.log("Great magicians:");
// show_magicians(greatMagicians); // Print modified names




//task 44

//Q44 - Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// function make_sandwich(...items: string[]) {
//   console.log(`Making a sandwich with: ${items.join(", ")}.`);
// }

// make_sandwich("ham", "cheese");
// make_sandwich("turkey", "lettuce", "tomato");
// make_sandwich("avocado", "sprouts", "mustard", "mayo");


//task 45

// Q45 - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


// function make_car(
//     manufacturer: string,
//     model: string,
//     ...options: [string, any][]
//   ) {
//     let car = { manufacturer, model };
//     options.forEach(([key, value]) => (car[key] = value));
//     return car;
//   }
  
//   console.log(make_car("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
//   console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
