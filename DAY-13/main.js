//Day 13 Challenge
//task 37
// Q37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
// function make_shirt(size: string = "large", message: string = "I love TypeScript") {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
//     }
//     make_shirt(); // Default large and message
//     make_shirt("medium"); // Default message, medium size
//     make_shirt("small", "Dive into Coding"); // Custom message, small size
//task 38
// Q38 - Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
// function describe_city(city: string, country: string = "Pakistan") {
//     console.log(`${city} is in ${country}.`);
// }
// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("Tokyo", "Japan");
//task 39
// Q39 - City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
