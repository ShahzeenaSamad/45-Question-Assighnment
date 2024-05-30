/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t***** FAVOURITE FRUITS *****\n\t"));
// Array of favorite fruits
let favorite_fruits = ["mango", "strawberry", "banana"];
// Check if 'mango' is in the list
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
// Check if 'strawberry' is in the list
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberry!");
}
// Check if 'banana' is in the list
if (favorite_fruits.includes("banana")) {
    console.log("You really like banana!");
}
// Check if 'apple' is in the list
if (favorite_fruits.includes("apple")) {
    console.log("You really like mangoes!");
}
// Check if 'grape' is in the list
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}
