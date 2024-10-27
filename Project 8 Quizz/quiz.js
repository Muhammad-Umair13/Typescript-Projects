import inquirer from "inquirer";
console.log("Welcome to our Quizz");
console.log('Total quiz is [8]');
console.log("Now GAME IS START");
let Mark = 0;
async function runQuiz() {
    let quiz1 = await inquirer.prompt([
        {
            name: "Quiz1",
            message: "What is Typescript?",
            type: "list",
            choices: ["Markup Language", "Superset of Javascript", "Programming Language"]
        }
    ]);
    if (quiz1.Quiz1 === "Superset of Javascript") {
        console.log("Correct Answer");
        Mark += 10;
    }
    else {
        console.log("Wrong Answer");
    }
    let quiz2 = await inquirer.prompt([
        {
            name: "Quiz2",
            message: "How I run Javascript Code in VS code?",
            type: "list",
            choices: ["node app.js", "Cmd", "tsc init"]
        }
    ]);
    if (quiz2.Quiz2 === "node app.js") {
        console.log("Correct Answer");
        Mark += 10;
    }
    else {
        console.log("Wrong Answer");
    }
    let quiz3 = await inquirer.prompt([
        {
            name: "Quiz3",
            message: "What are the three main 'simple types' in TypeScript?",
            type: "list",
            choices: ["string number boolean", "function array condition", "Object Module promise"]
        }
    ]);
    if (quiz3.Quiz3 === "string number boolean") {
        console.log("Correct");
        Mark += 10;
    }
    else {
        console.log("Wrong");
    }
    let quiz4 = await inquirer.prompt([
        {
            name: "Quiz4",
            message: "Whats Output: a=2 ; b=3 ; Console.log(a+b)?",
            type: "list",
            choices: ["3", "4", "5"]
        }
    ]);
    if (quiz4.Quiz4 === "5") {
        console.log("Correct");
        Mark += 10;
    }
    else {
        console.log("Wrong");
    }
    let quiz5 = await inquirer.prompt([
        {
            name: "Quiz5",
            message: "Does Chalk is work in Typescript?",
            type: "checkbox",
            choices: ["True", "False"]
        }
    ]);
    if (quiz5.Quiz5.includes("True")) {
        console.log("Correct");
        Mark += 10;
    }
    else {
        console.log("Wrong");
    }
    console.log("Your Total Marks is", Mark);
}
runQuiz();
