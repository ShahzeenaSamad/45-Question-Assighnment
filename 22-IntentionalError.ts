//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

import chalk from "chalk"

console.log(chalk.yellowBright.underline.bold("\n\n********** INTENTIONAL ERROR **********\n"))

let array : (string|number) [] = ["Talha","Masood",23,55,"Ekram"]
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])