"use strict";
//Day 9 Challenge
Object.defineProperty(exports, "__esModule", { value: true });
//task 25
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
// Version that passes:
var alien_color = "green";
if (alien_color == "green") {
    console.log("You just earned 5 points!");
}
// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
    // No output because the condition is false
}
//task 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//Write one version of this program that runs the if block and another that runs the else block.
// Version that passes:
var Alien_color = "green";
// Q26 Answer:
// Version that runs the if block:
Alien_color = "green";
if (Alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien");
}
else {
    console.log("You just earned 10 points");
}
// Version that runs the else block:
Alien_color = "yellow";
if (Alien_color == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points!");
}
//task 27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//If the alien is green, print a message that the player earned 5 points.
//If the alien is yellow, print a message that the player earned 10 points.
//If the alien is red, print a message that the player earned 15 points.
//Write three versions of this program, making sure each message is printed for the appropriate color alien.
var alien_color1 = "pink";
// Green alien version:
alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color1 == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color1 == "red") {
    console.log("You earned 15 points.");
}
// Yellow alien version:
alien_color1 = "yellow";
if (alien_color1 == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color1 == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color1 == "red") {
    console.log("You earned 15 points.");
}
// Red alien version:
alien_color1 = "red";
if (alien_color1 == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color1 == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color1 == "red") {
    console.log("You earned 15 points.");
}
