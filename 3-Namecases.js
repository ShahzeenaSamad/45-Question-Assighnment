//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t********* NAME CASES ********\n\t"));
let personName = "shahzeena";
console.log(chalk.magentaBright(`\nUpper case : ${personName.toUpperCase()}`));
console.log(chalk.green(`\nLower case : ${personName.toLocaleLowerCase()}`));
console.log(chalk.cyanBright("\nTitle case :", personName.charAt(0).toUpperCase() + personName.slice(1, 15)));
