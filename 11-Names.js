//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("********** NAMES IN ARRAY **********\n"));
let names = ["sana", "Misha", "Jargina", "Mehak"];
for (let i = 0; i < names.length; i++) {
    console.log(chalk.magentaBright(names[i]));
}
