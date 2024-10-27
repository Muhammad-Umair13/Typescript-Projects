import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold("           Word Counter             "));
console.log("==============================================");
let Worder = [];
let word_Counter = await inquirer.prompt([
    {
        name: "CountWord",
        message: "Enter Word For Count",
        type: 'input',
    }
]);
console.log("==============================================");
// keyword of trim only define how many words But Split can seperate word Practically by comma.
let final = word_Counter.CountWord.trim().split("");
Worder.push(final);
console.log("Your entered number is", final.length);
console.log(Worder);
