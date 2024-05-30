/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\t***** ALIEN COLOR 2 *****\t"));
let alienColor = "green";
if (alienColor == "green") {
    console.log("\nThe player just earned 5 points.");
}
else {
    console.log("\nThe player just earned 10 points.");
}
