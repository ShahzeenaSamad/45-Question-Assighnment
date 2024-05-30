//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

import chalk from "chalk"

console.log(chalk.yellowBright.bold.underline("\n\t********** GUEST LIST **********\n\t"))
console.log(chalk.yellowBright.bold.underline("===================> Initial set of invitations:"))
let Guest: string[] = ["Sana,","Misha,","Jargina,","Mehak,"]

for(let i=0; i<Guest.length; i++){
    console.log(chalk.greenBright("Dear",Guest[i],),chalk.magentaBright("\n\n You are invited for dinner tomorrow,your presence will delightful for me.\n\n Thank you,\n"))
}
//person who cant make it for dinner
let notPresent: string = "Sana"
console.log(chalk.redBright(`\n*** ${notPresent} is not able to come for dinner\n`))

// Inform about the bigger dinner table
console.log(chalk.yellowBright.bold.underline("\n===================> Announcement for Bigger table\n"))
console.log(chalk.blueBright("\nGood news! We found a bigger dinner table, so more space is available.\n"))

//Add one new guest in the beginning of the array
Guest.unshift("Afshan,")

// Add one new guest to the middle of the array
Guest.splice(2,0,"Sobia,")
        
// Add one new guest to the end of the array
Guest.push("Maimoona,")

// Print the updated set of invitation messages
console.log(chalk.yellowBright.bold.underline("==================> Updated Set Of Invitation"))

for (let i=0; i<Guest.length; i++){
    console.log(chalk.green(`My Dear Friend ${Guest[i]}`),chalk.magentaBright(`\n\n You are invited for dinner tomorrow,your presence will delightful for me.\n\n Thank you,\n ` ))
}

//Print message about shrinkage guest list
console.log(chalk.yellow.bold.underline("\n==============> Announcement\n"))
console.log(chalk.greenBright("\nUnfortunately, the new dinner table won’t arrive in time for the dinner, and we have space for only two guests.\n"))

//Remove guests until only two remain
while(Guest.length > 2){
    let removedGuest = Guest.pop();
    console.log(chalk.blueBright(`Dear ${removedGuest}`), chalk.cyan(`\n\nI am very sorry to inform you that due to unexpected circumstances, I can no longer accommodate you at the dinner. I hope we can arrange another meeting soon.)\n`))
}
// Print a message to the remaining guests
console.log(chalk.yellowBright.bold.underline("\n===================> Remaining Guest List\n"))

for(let i=0; i<Guest.length; i++){
    console.log(chalk.magenta(`Dear ${Guest[i]}\n\n You are still invited to the dinner. I look forward to seeing you there.\n`))
}
// Remove the last two names from the list
Guest.pop();
Guest.pop();

// Print the final guest list to confirm it is empty
console.log(chalk.green("\nFinal Guest List",Guest[0],"[]"))
