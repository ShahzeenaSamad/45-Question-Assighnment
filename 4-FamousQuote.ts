//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
import chalk from "chalk"

console.log(chalk.yellowBright.bold.underline("\n\t********** FAMOUS QUOTE **********\n\t"))

let author : string = "Albert Einstein"
let quote : string = " “A person who never made a mistake never tried anything new.” "
console.log(chalk.greenBright(`\n${author} once said, ${quote}`))