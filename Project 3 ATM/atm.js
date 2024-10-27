import inquirer from "inquirer";
let bank_money = 125000;
let userid = await inquirer.prompt([
    {
        name: "userid1",
        message: "Enter Your User_Id:",
        type: "string"
    }
]);
if (userid.userid1 === "umair123") {
    console.log("Correct id ☑");
}
else {
    console.log("Invalid code");
    process.exit();
}
let user_pin = await inquirer.prompt([
    {
        name: "userpin",
        message: "Enter PIN Number",
        type: "number",
    }
]);
if (user_pin.userpin === 123) {
    console.log("Correct PIN Number");
}
else {
    console.log("Wrong! insert correct PIN Number and TRY AGAIN");
    process.exit(1);
}
console.log('');
console.log("Your Current Balance is", bank_money);
console.log("");
let option = await inquirer.prompt([
    {
        name: "option1",
        message: "What you want?",
        type: "list",
        choices: ["Withdraw", "Deposite"]
    }
]);
if (option.option1 === "Withdraw") {
    let Withdraw = await inquirer.prompt([
        {
            name: "Withdraw2",
            message: "Enter Amount For Withdraw",
            type: "number"
        }
    ]);
    bank_money -= Withdraw.Withdraw2;
}
else {
    let Deposite = await inquirer.prompt([
        {
            name: "Deposite2",
            message: "Enter Amount For Deposite",
            type: "number"
        }
    ]);
    bank_money += Deposite.Deposite2;
}
console.log("Your Remaining Money is", bank_money);
