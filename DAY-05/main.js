//Day 5 Challenge
//task 13
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transports = ["Yamaha motorcycle", "BMW car", "Bianchi bicycle"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
//task 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
//task 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite:
//> Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//> Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//> Print a second set of invitation messages, one for each person who is still in your list.
// Q14 Answer:
var Guests = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
Guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// Q15 Answer:
var unableToAttend = "Nikola Tesla";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Leonardo da Vinci";
Guests[Guests.indexOf(unableToAttend)] = newGuest;
// New invitations
Guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
