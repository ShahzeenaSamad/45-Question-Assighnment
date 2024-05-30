//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t ********** FAMOUS QUOTE 2 **********\n\t"));
let personName = "Albert Einstein";
let Quote = " “A person who never made a mistake never tried anything new.” ";
let message = `${personName} once said, ${Quote}`;
console.log(chalk.cyanBright(message));
