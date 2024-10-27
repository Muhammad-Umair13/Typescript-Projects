import inquirer from "inquirer";
import chalk from "chalk";
let student_name = await inquirer.prompt([
    {
        name: "studentName",
        message: "Enter Student Name:",
        type: "input",
    }
]);
let Student_ID = Math.floor(1000 * Math.random() + 1000);
let courses = await inquirer.prompt([
    {
        name: "Courses",
        message: "Which Course do you want to enroll?",
        type: "list",
        choices: ["Typescript", "HTML", "CSS"]
    }
]);
console.log("============================================================");
if (courses.Courses === "Typescript") {
    console.log("Your addmission Fee is 500");
    console.log("Your Monthly Fee is 1200");
    console.log("Your Yearly Fee is", 1200 * 12);
}
else if (courses.Courses === "HTML") {
    console.log("Your addmission Fee is 500");
    console.log("Your Monthly Fee is 1000");
    console.log("Your Yearly Fee is", 1000 * 12);
}
else {
    console.log("Your addmission Fee is 500");
    console.log("Your Monthly Fee is 900");
    console.log("Your Yearly Fee is", 900 * 12);
}
console.log("==================================================");
if (courses.Courses === "Typescript") {
    let typescript = await inquirer.prompt([
        {
            name: "TYPESCRIPT1",
            message: "Enter Payment Your Total amount is 14400",
            type: "number",
        }
    ]);
    if (typescript.TYPESCRIPT1 === 14400) {
        console.log("You Have Inrolled");
    }
    else {
        console.log("Insert Correct Amount!");
        process.exit();
    }
}
else if (courses.Courses === "HTML") {
    let html = await inquirer.prompt([
        {
            name: "HTML1",
            message: "Enter Payment Your Total amount is 12000",
            type: "number",
        }
    ]);
    if (html.HTML1 === 12000) {
        console.log("You Have Inrolled");
    }
    else {
        console.log("Insert Correct Amount!");
        process.exit();
    }
}
else if (courses.Courses === "CSS") {
    let css = await inquirer.prompt([
        {
            name: "CSS1",
            message: "Enter Payment Your Total amount is 10800",
            type: "number",
        }
    ]);
    if (css.CSS1 === 10800) {
        console.log("You Have Inrolled");
    }
    else {
        console.log("Insert Correct Amount!");
        process.exit();
    }
}
else {
    console.log("You Did not Select Course");
    process.exit();
}
let show_Status = await inquirer.prompt([
    {
        name: "showstatus1",
        message: "What do you want?",
        type: "list",
        choices: ["Status", "Exit"]
    }
]);
console.log("===============================================================");
console.log(" ");
if (show_Status.showstatus1 === "Status") {
    console.log("Student Name :", chalk.green(student_name.studentName));
    console.log("Student ID :", chalk.red(Student_ID));
    console.log("Selected Course is :", chalk.blue(courses.Courses));
}
else {
    process.exit();
}
console.log(" ");
console.log("=================================================================");
