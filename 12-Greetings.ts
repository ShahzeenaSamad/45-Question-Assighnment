//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
import chalk from "chalk"
console.log(chalk.yellowBright.bold.underline("\n\t********** GREETINGS ARRAY **********"))

let names: string[] = ["sana","Misha","Jargina","Mehak"]
let message: string = "My dear friend you are invited for dinner."
for (let i=0; i<names.length; i++){
    console.log(chalk.magentaBright("\n",names[i] , message))
}