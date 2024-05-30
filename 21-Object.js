//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t===============> OBJECT <===============\n\t"));
let Book = {
    Name: "Fear Of Flying",
    author: "Erica Jong",
    price: 5000,
    publish: 2020,
    Buyfrom: "Amazon"
};
console.log(Book);
