import inquirer from 'inquirer';
let firstnum = await inquirer.prompt(
	[
		{
			name: "firstNumber",
			message: "Give Your First Number",
			type: "number",
			
		}
	]
	
)

let lastnum = await inquirer.prompt(
	[
		{
			name: "lastNumber",
			message: "Give Your last Number",
			type: "number",
			
		}
	]
	
)

console.log("Add given number",firstnum.firstNumber + lastnum.lastNumber);
console.log("Subtract given number",firstnum.firstNumber - lastnum.lastNumber);
console.log("multiply given number",firstnum.firstNumber * lastnum.lastNumber);
console.log(" Divide given number",firstnum.firstNumber / lastnum.lastNumber);

