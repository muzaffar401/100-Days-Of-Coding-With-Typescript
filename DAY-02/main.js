//Day 2 challenge
//task 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');
//task 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var quote = "A person who never made a mistake never tried anything new";
var author = "Albert Einstein";
console.log("".concat(author, " once said, \u201C").concat(quote, ".\u201D"));
//task 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var myName = "\t\n Muzaffar Ahmed \t\n"; // This saves the name with whitespace
console.log(myName); // Shows the name with whitespace
console.log(myName.trim()); // Shows the name without whitespace
