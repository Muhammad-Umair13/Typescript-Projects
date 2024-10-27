import inquirer from "inquirer";
console.log("Welcome To Our Number Guessing Game");
console.log("Guess number between 1 to 10");
let mark = 0;
let selectnum1 = await inquirer.prompt([
    {
        name: "guess1",
        message: "Q1 Guess number:",
        type: "list",
        choices: ["3", "6", "9"]
    }
]);
if (selectnum1.guess1 === "6") {
    console.log("You Got 10 Marks");
    mark += 10;
}
else {
    console.log("You select wrong number");
}
let selectnum2 = await inquirer.prompt([
    {
        name: "guess2",
        message: "Q2 Guess number:",
        type: "list",
        choices: ["2", "4", "6"]
    }
]);
if (selectnum2.guess2 === "4") {
    console.log("You Got 10 Marks");
    mark += 10;
}
else {
    console.log("You select wrong number");
}
let selectnum3 = await inquirer.prompt([
    {
        name: "guess3",
        message: "Q3 Guess number:",
        type: "list",
        choices: ["5", "7", "8"]
    }
]);
if (selectnum3.guess3 === "7") {
    console.log("You Got 10 Marks");
    mark += 10;
}
else {
    console.log("You select wrong number");
}
console.log("------------------------------------------");
console.log("Your Final result is", mark, "Mark");
if (mark === 30) {
    console.log("Congratulation! YOU WIN");
}
