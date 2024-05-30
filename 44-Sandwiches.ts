//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

import chalk from "chalk"

console.log(chalk.yellowBright.bold.underline("\n\t******** SANDWICHES ********\n\t"))

function mySandwiches (...items: string []){
    return `I want Sandwich of ${items}`
};
let collection1 = mySandwiches("Hem","Cheese","lettuce") //can add many as u want

let collection2 = mySandwiches("Swiss","Turkey")
let collection3 = mySandwiches(); //without argument

console.log(collection1)
console.log(collection2)
console.log(collection3)