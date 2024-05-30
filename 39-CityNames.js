/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
import chalk from "chalk";
console.log(chalk.yellowBright.bold.underline("\n\t******** CITY NAMES ********\n\t"));
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("\nKarachi", "Pakistan\n"));
console.log(city_country("Dubai", "UAE"));
console.log(city_country("\nLondon", "UK\n"));
console.log(city_country("Riyaz", "Saudi Arabia"));
