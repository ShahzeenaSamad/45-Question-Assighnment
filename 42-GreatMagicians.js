//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t******** GREAT MAGICIANS ********\n\t"));
let magicianNames = ["Talha", "Masood", "Basit", "Umar", "Nomi"];
function show_magicians(greet) {
    for (let item of magicianNames) {
        console.log(greet, item);
    }
}
show_magicians(chalk.greenBright(`Hellow, How are you Mr.`));
