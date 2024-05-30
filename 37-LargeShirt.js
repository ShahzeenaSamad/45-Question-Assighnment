//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t******** LARGE SHIRT ********\n\t"));
//Large shirt by default:
function make_shirt1(label, size = "Large,") {
    return size + label;
}
let myfunc1 = make_shirt1(" I love Typescript");
console.log("\n", myfunc1);
//Medium size by default :
function make_shirt2(label, size = "Medium,") {
    return size + label;
}
let myfunc2 = make_shirt2(" I love Typescript");
console.log("\n", myfunc2);
//Shirt of any Size :
function make_shirt3(size, label) {
    return size + label;
}
let myfunc3 = make_shirt3("\nany size", "I love My Tshirt");
console.log(myfunc3);
