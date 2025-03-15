// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
Problem Statement:
You are planning to buy groceries and have a fixed budget. You need to write a JavaScript program that:

 1.Takes an array of grocery items (name & price).
 2.Calculates the total cost of the items.
 3.Checks if the total cost is within your budget.
 4.Displays a message:
    If within budget → "You are within budget. Total cost: ₹X"
    If over budget → "Over budget! You need ₹Y more."
*/

const budget = 200; 
const groceries = [
  { name: "Rice", price: 200 },
  { name: "Oil", price: 150 },
  { name: "Milk", price: 80 },
  { name: "Eggs", price: 100 }
];

const groceryBudgetCheck = function(budget, groceries){
    let cost =0;
    if(budget!==0){
        for(let item=0;item<groceries.length;item++){
            cost += groceries[item]["price"];
        }
        if(cost>budget){
            return `Over budget! You need ₹${cost-budget} more.`
        } else return `You are within budget. Total cost: ₹${cost}`
    
    }
}

console.log(groceryBudgetCheck(budget, groceries));

