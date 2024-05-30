//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

import chalk from "chalk"

console.log(chalk.yellowBright.bold.underline("\n\t******** CITIES ********\n\t"))

function describe_city(city:string ,country:string = "Pakistan"){
    return `${city} is in ${country}`
}

// 3 cities

let city1 = describe_city(chalk.greenBright("\nKarachi"))
let city2 = describe_city(chalk.blueBright("\nLahore"))
let city3 = describe_city(chalk.magentaBright("\nIslamabad"))
let city4 = describe_city(chalk.cyanBright("\nDubai"),"UAE")

console.log(city1)
console.log(city2)
console.log(city3)
console.log(city4)