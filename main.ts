// npm i inquirer 
// npm i @types/inquirer -D 
import inquirer from "inquirer";


const prompt = await inquirer.prompt([
    {
        name:"num1",
        type:"number",
        message:"Enter Your number between 1 to 10"
    }
])


let computerNumber:number = Math.floor(Math.random() * 10)


if(prompt.num1 === computerNumber){
    console.log("Congrats Your are win the game");
}else{
    console.log("You are loss the game");
}




























