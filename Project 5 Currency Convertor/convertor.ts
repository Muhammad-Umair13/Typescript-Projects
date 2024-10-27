import inquirer from "inquirer";
import chalk from "chalk";
let Dollar = 278.36;
let pkr = 0.004;

let yourCurrency = await inquirer.prompt(
    [
        {
            name: "yourCurrency1",
            message: "Choose Your Currency",
            type:"list",
            choices:["USD","PKR"]
        }
    ]
)

let convertCurrency = await inquirer.prompt(
    [
        {
            name: "yourCurrency1",
            message: "Choose Currency for Convert",
            type:"list",
            choices:["USD","PKR"]
        }
    ]
)

if(yourCurrency.yourCurrency1 === "USD"){
    let typecurrency = await inquirer.prompt(
        [
            {
                name:"typecurrency1",
                message:"Enter Number $",
                type:"input",
            }
        ]
    )
   console.log(chalk.red (Dollar * typecurrency.typecurrency1));
   
   for(let i=1; i<11; i++){
            console.log(chalk.bgWhite.black(i,"$","=",i * Dollar,"PKR"));
        
   }


   
    }  else { let Pkr1 = await inquirer.prompt(
    [
        {
            name:"pkr12",
            message:"Enter Number",
            type:"input",
        }
    ]
)
     console.log(chalk.red(pkr * Pkr1.pkr12))
     for(let i=1; i<11; i++){
        console.log(chalk.bgWhite.black(i,"PKR","=",i * pkr,"$"));
    
}
}

