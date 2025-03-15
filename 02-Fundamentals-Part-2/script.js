'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest)hasDriversLicense = true;
// // if(hasDriversLicense) console.log('I can drive!');


// //Reserved keywords
// // const interface = 'Audio';
// // const private = 212;

// //functions - intro

// function logger(){
//     // console.log(`My name is Joel`);
// }
// logger(); //Call, invoke or run the function

// // function fruitProcessor(apples, oranges){
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
// //     return juice;
// // }

// // const mixedFruit = fruitProcessor(2,4);
// // console.log(mixedFruit);

// // const appleJuice = fruitProcessor(5,0); //arguments
// // console.log(appleJuice);

// //functions - declaration vs expression


// const age1 = calcAge1(1998);

// function calcAge1(birthYear){
//     return 2025 - birthYear;
// }


// // console.log(age1);


// //function expression - anon function


// // const age2 = calculatedAge2(1994) //Uncaught ReferenceError: Cannot access 'calculatedAge2' before initialization - Reason: hoisting

// const calculatedAge2 = function (birthYear) {
//     return 2025 - birthYear;
// }
// const age2 = calculatedAge2(1994)


// //Arrow functions - Special form of function expressions

// const calcAge3 = birthYear => 2025 - birthYear;
// const age3 = calcAge3(1990);
// // console.log(age1, age2, age3);

// //functions calling other functions

// function fruitChopper(fruit){
//     return fruit*4
// }


// function fruitProcessor(apples, oranges){
//     const applePieces = fruitChopper(apples);
//     const orangePieces = fruitChopper(oranges);

//     // console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
//     return juice;
// }

// const anotherJuice = fruitProcessor(2,3)
// // console.log(anotherJuice);

// //Assignment-1

// //scores 
// // let D1 = 96; 
// // let D2 = 108;
// // let D3 = 89; 

// // let K1 = 88;
// // let K2 = 91;
// // let K3 = 110;


// const minScore = 100;

// // const calcAverage = (A,B,C) =>{
// //     return ((A+B+C)/3).toFixed(0);
// // }

// // const dolphinsAverage = calcAverage(44,23,71); //85, 54, 41
// // const koalasAverage = calcAverage(65,54,49); //23, 34, 27




// function checkWinner(avgDolphins, avgKoalas){
//     if(avgDolphins > avgKoalas && avgDolphins >= (2*avgKoalas)){
//         // console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
//     }else{
//         // console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
//     }
// }

// const winner = checkWinner(dolphinsAverage, koalasAverage);

//Arrays

const friends = ['Ron', 'Joe', 'Mike']; 
// console.log(friends);


// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length-1]);

friends[2] = 'Jay'; //Array is not primitive hence it is mutable
// console.log(friends);

// friends = ['Alice', 'Charles'] //Uncaught TypeError: Assignment to constant variable. 

const firstName = 'Joel'
const joel = [firstName, 'Prashanth', 2025-1998, friends];
// console.log(joel);

//Exercise

const calcAge = function (birthYear){
    return 2025 - birthYear;
}

const years = new Array(1991, 1993, 1996, 1981, 2000);

// console.log(calcAge(years)); //NaN

// const ageOne = calcAge(years[0]);
// const ageTwo = calcAge(years[1]);
// const ageThree = calcAge(years[2]);
// console.log(calcAge(years[years.length-1]));

// console.log(ageOne);
// console.log(ageTwo);
// console.log(ageThree);


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

// console.log(ages);

//Array Operations


//Adding elements to the array

friends.push('Randy'); //add to the end
// console.log(friends);

friends.unshift('John'); //add to the start
// console.log(friends);

//Removing elements from an array

friends.pop() //remove last element
friends.pop()
// console.log(friends);

friends.shift() //remove first element
// console.log(friends);

// console.log(friends.indexOf('Joe')); // returns position of element
// console.log(friends.indexOf('Bob')); // -1


// console.log(friends.includes('Ron')); //true with strict equality
// console.log(friends.includes('John')); //false

//Coding Challenge-2

// const calcTip = function(bill){
//     let tip;
//     if(bill>50 && bill<=300){
//         tip = 0.15*bill;
//     }
//     else{
//         tip = 0.2*bill;
//     }
//     return tip;
// } 
// console.log(calcTip(100)); //test calcTip

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];

// console.log(`Tips: ${tips}`);
// console.log(`Totals: ${totals}`);

//Intro to Objects

// const joelObject = {
//     firstName: 'Joel',
//     lastName: 'Prashanth',
//     age: 25,
//     job: 'Engineer',
//     friends: ['Ron', 'Peter', 'Steven']
// }
// console.log(joelObject);

//Dot vs Bracket Notoation

// console.log(joelObject.lastName);
// console.log(joelObject["lastName"]); // You can put any expression within [] just like for arrays.

// const namekey = 'Name'
// console.log(joelObject["first" + namekey]);
// console.log(joelObject["last" + namekey]);

// const interestedIn = prompt(`What do you want to know about Joel?`);
// console.log(interestedIn);
// console.log(joelObject[interestedIn])

// if(joelObject[interestedIn]){
//     console.log(joelObject[interestedIn]);
// }else{
//     console.log('Wrong request!');
// }

// joelObject.location = "Chennai";
// joelObject['instagram'] = "@itzzmejoey";

// console.log(joelObject);

//Challenge

//'Joel has 3 friends and Peter is his best friend.

// console.log(`${joelObject["firstName"]} has ${joelObject["friends"].length} friends and his best friend is ${joelObject["friends"][1]}.`);

//Object Methods

const joelObject = {
    firstName: "Joel",
    lastName: "Prashanth",
    birthYear: 1998,
    job: "Engineer",
    friends: ['Ron', 'Peter', 'David'],
    hasDriversLicense: true,

    // calcAge: function(birthYear){
    //     return 2025 - birthYear;
    // }

    // calcAge: function(){
    //     console.log(this); //this - reference the object itself
    //     return 2025 - this.birthYear;
    // }

    calcAge: function(){
        // console.log(this); //this - reference the object itself
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a good boy. He is ${this.calcAge()} years old. He was born in ${this.birthYear}. He has ${this.friends.length} friends. His best friend is ${this.friends[0]}. He works as an ${this.job} and can he drive? - ${this.hasDriversLicense} he can!`
    }

};




// console.log(joelObject["calcAge"](1998)); //bracket notation

//Follow DRY principle
// console.log(joelObject.calcAge(joelObject.birthYear)); 
// console.log(joelObject["calcAge"](joelObject["birthYear"]));

// console.log(joelObject.calcAge()); // without calling this method if you try to access age you will get 'undefined'.

// console.log(joelObject.calcAge());
// console.log(joelObject.age);

//Challenge

// console.log(joelObject.getSummary());


//Coding Challenge-3

// const john = {
//     firstName: "John",
//     lastName: "Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         return (this.mass / (this.height**2)).toFixed(0);
//     }
// }

// const mark = {
//     firstName: "Mark",
//     lastName: "Miller",
//     mass: 78,
//     height: 1.65,
//     calcBMI: function(){
//         return (this.mass / (this.height**2)).toFixed(0);
//     }
// }

// if(john.calcBMI > mark.calcBMI){
//     console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName}'s BMI (${mark.calcBMI()}).`);
// }else{
//     console.log(`${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName}'s BMI (${john.calcBMI()}).`);
// }

//Loops
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
   
   
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  const tips = [];
  const totals = [];
   
  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
  }
   
//   console.log(bills, tips, totals);
   
  const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      // sum = sum + arr[i];
      sum += arr[i];
    }
    return sum / arr.length;
  }
   
  
  // console.log(calcAverage(totals));
  // console.log(calcAverage(tips));

// console.log('Testing Live Server from node.');