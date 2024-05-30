//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

import chalk from "chalk"

console.log(chalk.yellowBright.bold.underline("\n\t******** ANIMALS ********\n\t"))

let myAnimals = ["cow","camel","goat","sheep"]

for(let i of myAnimals){
    console.log(chalk.magentaBright(i))
}

for(let j of myAnimals){
    console.log(chalk.greenBright(`\n${j} is a domestic animal`))
}

console.log(chalk.cyanBright(`\nAll these animals, ${myAnimals[0]},${myAnimals[1]},${myAnimals[2]} and ${myAnimals[3]} is Halal in Islam`))