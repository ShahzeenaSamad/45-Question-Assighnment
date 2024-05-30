//Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t********** GUEST LIST **********\n\t"));
let Guest = ["Sana,", "Misha,", "Jargina,", "Mehak,"];
for (let i = 0; i < Guest.length; i++) {
    console.log(chalk.greenBright("Dear", Guest[i]), chalk.magentaBright("\n\n You are invited for dinner tomorrow,your presence will delightful for me.\n\n Thank you,\n"));
}
console.log(chalk.yellowBright("\n\t***** UPDATED GUEST LIST *****\n\t"));
let notPresent = "Sana";
let newGuest = "Shahzeena";
Guest[0] = newGuest;
for (let i = 0; i < Guest.length; i++) {
    console.log(chalk.cyanBright(`My friend ${Guest[i]},`), chalk.greenBright(`\nyou are invited for dinner tomorrow.your presence will delightful for me.\n\n Thank you,\n"`));
}
console.log(chalk.redBright(`\nMy friend ${notPresent} is not able to come for dinner so we invited ${newGuest} for dinner.`));
