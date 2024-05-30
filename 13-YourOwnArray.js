//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t********** YOUR OWN ARRAY **********"));
let transportation = ["car", "Bus", "Bike", "Plane"];
let message = " I would like to own a  ";
for (let i = 0; i < transportation.length; i++) {
    console.log(chalk.magentaBright("\n", message + transportation[i]));
}
