//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
import chalk from "chalk"
console.log(chalk.yellowBright.bold.underline("\n\t********** STRIPPING NAMES **********"))

let personName : string = "\n\tShahzeena Samad \n\t"
console.log(chalk.magentaBright(personName))

let stripped: string = personName.trim()
console.log(chalk.green(stripped))