//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
import chalk from "chalk"

let languages : string[] = ["Urdu","Punjabi","English","Arabic","Sindhi","Chinese"]
console.log(chalk.yellowBright("\n\t===============> LIST OF LANGUAGES <===============\n\t"))

languages.forEach((language) => {
    console.log(chalk.greenBright(language));
})