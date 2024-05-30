//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//--------------------------------- **********-------------------------------
import chalk from "chalk";
//Define an array with at least five places in the world you'd like to visit
let places = ["Canada", "Australia", "NewYork", "Istanbul"];
console.log(chalk.yellowBright("\n==========> 1- Array in its original order\n"));
console.log(places);
//Print your array in alphabetical order without modifying the actual list.
let sortedPlace = places.sort();
console.log(chalk.yellowBright("\n==========> 2- Alphabatical Order\n"));
console.log(sortedPlace);
//• Show that your array is still in its original order by printing it again.
console.log(chalk.yellowBright("\n==========> 3- Still in Original Order\n"));
console.log(places);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log(chalk.yellowBright("\n==========> 4- Reverse Alphabatical Order\n"));
let reverseOrder = places.sort().reverse();
console.log(reverseOrder);
// Show that the array is still in its original order by printing it again
console.log(chalk.yellowBright("\n==========> 5- Still in its Original Order\n"));
console.log(places);
//• Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log(chalk.yellowBright("\n==========> 6- Reverse the Order\n"));
console.log(places);
// Reverse the order of the list again. Print the list to show it's back to its original order
places.reverse();
console.log(chalk.yellowBright("\n==========> 7- Back to Original Order\n"));
console.log(places);
// Sort the array so it's stored in alphabetical order. Print the array to show that its order has been changed
places.sort();
console.log(chalk.yellowBright("\n==========> 8- Again in Alphabatical Order\n"));
console.log(places);
// Sort to change the array so it's stored in reverse alphabetical order. Print the list to show that its order has changed
places.sort().reverse();
console.log(chalk.yellowBright("\n==========> 9- Sorted in Reverse Alphabatical Order\n"));
console.log(places);
