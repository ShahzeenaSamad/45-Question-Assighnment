/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

import chalk from "chalk"

console.log(chalk.yellowBright.bold.underline("********** MORE CONDITIONAL TESTS **********"))

//Tests for Equality and Inequality with Strings

console.log(chalk.greenBright("1- Equality with strings"))
let fruit = "apple"
console.log(fruit == "apple") // True
console.log(fruit == "orange") // False

//Ineqality with strings
console.log(chalk.greenBright("2- Inequality with strings"))
console.log(fruit != "orange") // True
console.log(fruit != "apple") // False

//Test using the lower case function 
console.log (chalk.greenBright("3- Tests Using the Lower Case Function"))

console.log(fruit.toLowerCase() == "apple") // True
console.log(fruit.toLowerCase() == "Apple") // False

//Numerical Tests Involving Equality and Inequality, Greater Than and Less Than, Greater Than or Equal to, and Less Than or Equal to

console.log(chalk.greenBright("\nNumerical equality and inequality\n"))

let number = 10
console.log(number == 10) //True
console.log(number != 5)  // True
console.log(number == 5)  // False
console.log(number != 10)  // False

console.log(chalk.greenBright("\nGreater than and less than\n"))
console.log(number > 5)  // True
console.log(number < 10)  // True
console.log(number > 10)  // False
console.log(number < 5)  // False

console.log(chalk.greenBright("\nGreater than or equal to, and less than or equal to\n"))
console.log(number >= 5)  // True
console.log(number >= 10)  // True
console.log(number <= 10)  // True
console.log(number <= 5)  // True
console.log(number >= 15)  // False
console.log(number <= 4)  // False

console.log(chalk.greenBright("\nTests Using And and Or Operators\n"))
console.log(chalk.magentaBright(" \nUsing 'and' operator\n"))
console.log(number > 5 && number < 10)  // True
console.log(number > 5 && number > 10) // False

console.log(chalk.magentaBright(" Using 'or' operator"))
console.log(number > 5 || number > 10)  // True
console.log(number < 5 || number > 10)  // False
console.log(chalk.greenBright("\nTest Whether an Item is in an Array\n"))

console.log(chalk.yellowBright("\nDefining an array\n"))
let fruits = ["apple", "banana", "cherry"]

console.log(chalk.greenBright("Check if an item is in the array"))
console.log("apple" in fruits)  // True
console.log("orange" in fruits)  // False
console.log(chalk.greenBright("Test Whether an Item is Not in an Array"))

console.log(chalk.greenBright("Check if an item is not in the array"))
console.log("orange" ! in fruits)  // True
console.log("banana" ! in fruits)  // False