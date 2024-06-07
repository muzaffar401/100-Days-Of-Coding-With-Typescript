//Day 7 Challenge

//task 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
console.log(`I am inviting ${guests.length} people to dinner.`);

//task 20
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let countries: string[] = ["Japan", "Canada", "New Zealand", "Iceland", "Switzerland"];
console.log("Countries I'd like to visit:", countries);

//task 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let book: { title: string; author: string; yearPublished: number } = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);