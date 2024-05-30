//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t******** MAGICIANS ********\n\t"));
let magicianNames = ["Talha", "Masood", "Basit", "Umar", "Nomi"];
function show_magicians() {
    for (let magicianName of magicianNames) {
        console.log(magicianName);
    }
}
show_magicians();
