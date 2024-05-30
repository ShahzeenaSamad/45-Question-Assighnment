//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t******** UNCHANGED MAGICIANS ********\n\t"));
let magicianNames = ["Talha", "Masood", "Basit", "Umar", "Nomi"];
//making a copy of array
let magicianNamescopy = [...magicianNames];
function show_magicians(greet) {
    let withgreetings = " ";
    for (let item of magicianNamescopy) {
        withgreetings += `${greet} ${item}\n`;
    }
    return withgreetings;
}
let myGreetings = show_magicians("Hellow");
let makeArray = myGreetings.split("\n");
console.log(makeArray);
//original Array
console.log(magicianNames);
