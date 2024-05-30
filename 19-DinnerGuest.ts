//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

import chalk from "chalk"

console.log(chalk.yellowBright.bold.underline("\n\t********** Dinner GUEST **********\n\t"))

let Guest: string[] = ["Sana,","Misha,","Jargina,","Mehak,"]
console.log(chalk.greenBright(`I am inviting ${Guest.length} number of friends,which are following:\n`))

for(let i=0; i<Guest.length; i++){
    console.log( chalk.greenBright(`${i + 1}.`),chalk.magentaBright(`${Guest[i]}`))
}