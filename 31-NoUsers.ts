/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

import chalk from "chalk"

console.log(chalk.yellowBright.bold.underline("\n\t***** NO USERS *****\n\t"))

let username : string [] = ["Sana","Misha","admin","Mehak","jargina"]

username = []

if (username.length > 0){
    for (let i = 0; i<username.length; i++){
        if(username[i] == "admin"){
            console.log(chalk.magentaBright`\nHellow ${username [i]} ,would you like to see a status report?`)
        }else {
            console.log(chalk.greenBright`\nHellow ${username [i]} ,thank you for logging in again.`)
        }
    }
    
}else {
    console.log(chalk.greenBright("\nWe need to find some users!"))
}

