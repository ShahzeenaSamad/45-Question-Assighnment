/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
import chalk from "chalk";
console.log(chalk.yellowBright("\n\t********** PIZZAS **********\n\t"));
//print only names f pizza
let myPizza = ["cheese", "tikka", "fagita"];
for (let i = 0; i < myPizza.length; i++) {
    console.log(chalk.magentaBright("\n", myPizza[i]));
}
// printing names and sentence
for (let i = 0; i < myPizza.length; i++) {
    console.log(chalk.greenBright(`\ni like to eat ${myPizza[i]}`));
}
console.log(chalk.cyanBright("\nI really like to eat pizza,pizza comes in a verity of flavours and toppings, allowing individuals to customize it to their liking"));
