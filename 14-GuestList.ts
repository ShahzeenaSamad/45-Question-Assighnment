//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
import chalk from "chalk"

console.log(chalk.yellowBright.bold.underline("\n\t********** GUEST LIST **********\n\t"))
let Guest: string[] = ["Sana,","Misha,","Jargina,","Mehak,"]
for(let i=0; i<Guest.length; i++){
    console.log(chalk.greenBright("Dear",Guest[i],),chalk.magentaBright("\n\n You are invited for dinner tomorrow,your presence will delightful for me.\n\n Thank you,\n"))
}