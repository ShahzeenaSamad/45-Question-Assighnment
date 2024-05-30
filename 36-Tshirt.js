//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t******** T-SHIRT ********\n\t"));
function make_shirt(size, label) {
    return `My shirt size is ${size} and the label is ${" 'The sunny day' "}`;
}
let myfunc = make_shirt(32, "the sunny day");
console.log(myfunc);
