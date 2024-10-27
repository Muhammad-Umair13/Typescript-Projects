import inquirer from "inquirer";
let Todo = [];
let addtodo = await inquirer.prompt([
    {
        name: "addtudo",
        message: 'What do you want to add in Todo list',
        type: "input",
    }
]);
Todo.push(addtodo.addtudo);
console.log(Todo);
let addTodoyn = await inquirer.prompt([
    {
        name: "addTodoyn1",
        message: 'Do you want to Add Items in Todo list',
        type: "confirm",
        default: "false",
    }
]);
if (addTodoyn.addTodoyn1 === true) {
    let addtodo12 = await inquirer.prompt([
        {
            name: "addtudo12",
            message: 'What do you want to add in Todo list',
            type: "input",
        }
    ]);
    Todo.push(addtodo12.addtudo12);
    console.log(Todo);
}
else {
    process.exit();
}
let addTodoyn1 = await inquirer.prompt([
    {
        name: "addTudoyn1",
        message: 'Do you want to Add Items in Todo list',
        type: "confirm",
        default: "false",
    }
]);
if (addTodoyn1.addTudoyn1 === true) {
    let addtodo = await inquirer.prompt([
        {
            name: "addtudo",
            message: 'What do you want to add in Todo list',
            type: "input",
        }
    ]);
    Todo.push(addtodo.addtudo);
    console.log(Todo);
}
else {
    console.log("Your Final Todo List is", Todo);
    process.exit();
}
console.log("");
console.log("Your Final Todo List is", Todo);
