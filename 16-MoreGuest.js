//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Define the initial guest list
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t********** GUEST LIST **********\n\t"));
console.log(chalk.yellowBright.bold.underline("===================> Initial set of invitations:"));
let Guest = ["Sana,", "Misha,", "Jargina,", "Mehak,"];
for (let i = 0; i < Guest.length; i++) {
    console.log(chalk.greenBright("Dear", Guest[i]), chalk.magentaBright("\n\n You are invited for dinner tomorrow,your presence will delightful for me.\n\n Thank you,\n"));
}
//person who cant make it for dinner
let notPresent = "Sana";
console.log(chalk.redBright(`\n*** ${notPresent} is not able to come for dinner\n`));
// Inform about the bigger dinner table
console.log(chalk.yellowBright.bold.underline("\n===================> Announcement for Bigger table\n"));
console.log(chalk.blueBright("\nGood news! We found a bigger dinner table, so more space is available.\n"));
//Add one new guest in the beginning of the array
Guest.unshift("Afshan,");
// Add one new guest to the middle of the array
Guest.splice(2, 0, "Sobia,");
// Add one new guest to the end of the array
Guest.push("Maimoona,");
// Print the updated set of invitation messages
console.log(chalk.yellowBright.bold.underline("==================> Updated Set Of Invitation"));
for (let i = 0; i < Guest.length; i++) {
    console.log(chalk.green(`My Dear Friend ${Guest[i]}`), chalk.magentaBright(`\n\n You are invited for dinner tomorrow,your presence will delightful for me.\n\n Thank you,\n `));
}
