//Day 4 Challenge

//task 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Muzaffar, 5/31/2024
// This program prints a personal message.
let myName: string = "Muzaffar Ahmed";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);

//task 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names: string[] = ["Muzaffar", "Ahmed", "Bilal"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//task 12
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let Name: string[] = ["Muzaffar", "Ahmed", "Bilal"];
for (let x of Name) {
    console.log(`Hello ${x}, would you like to learn some TypeScript today?`);
}