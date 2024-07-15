#! /usr/bin/env node
import inquirer from 'inquirer';

const Currency: any = {
    USD: 1,
    EUR: 0.93,
    GPD: 0.79,
    INR: 83.44,
    PKR: 280.55,
};

let user_answer = await inquirer.prompt
(
  [
    {
    name: 'from',
    message: "Enter from Currency ",
    type: "list",
    choices: ["USD", "EUR", "GPD", "INR", "PKR"]
    },
     
   { name: 'to',
    message: "Enter from Currency ",
    type: "list",
    choices: ["USD", "EUR", "GPD", "INR", "PKR"]
   },

   {
     name: "amount",
     message:"Enter Your Amount",
     type: "number"
   },
 ]
);
  
let fromAmount = Currency[user_answer.from]
let toAmount = Currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Converted Amount = ${convertedAmount}`);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);