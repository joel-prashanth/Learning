'use strict';

let hasDriversLicense = false;
const passTest = true;

if(passTest)hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive!');


//Reserved keywords
// const interface = 'Audio';
// const private = 212;

//functions - intro

function logger(){
    // console.log(`My name is Joel`);
}
logger(); //Call, invoke or run the function

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const mixedFruit = fruitProcessor(2,4);
// console.log(mixedFruit);

// const appleJuice = fruitProcessor(5,0); //arguments
// console.log(appleJuice);

//functions - declaration vs expression


const age1 = calcAge1(1998);

function calcAge1(birthYear){
    return 2025 - birthYear;
}


// console.log(age1);


//function expression - anon function


// const age2 = calculatedAge2(1994) //Uncaught ReferenceError: Cannot access 'calculatedAge2' before initialization - Reason: hoisting

const calculatedAge2 = function (birthYear) {
    return 2025 - birthYear;
}
const age2 = calculatedAge2(1994)


//Arrow functions - Special form of function expressions

const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1990);
// console.log(age1, age2, age3);

//functions calling other functions

function fruitChopper(fruit){
    return fruit*4
}


function fruitProcessor(apples, oranges){
    const applePieces = fruitChopper(apples);
    const orangePieces = fruitChopper(oranges);

    // console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice;
}

const anotherJuice = fruitProcessor(2,3)
// console.log(anotherJuice);

//Assignment-1

//scores 
// let D1 = 96; 
// let D2 = 108;
// let D3 = 89; 

// let K1 = 88;
// let K2 = 91;
// let K3 = 110;


const minScore = 100;

const calcAverage = (A,B,C) =>{
    return ((A+B+C)/3).toFixed(0);
}

const dolphinsAverage = calcAverage(44,23,71); //85, 54, 41
const koalasAverage = calcAverage(65,54,49); //23, 34, 27




function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins > avgKoalas && avgDolphins >= (2*avgKoalas)){
        // console.log(`Dolphins win! (${avgDolphins} vs. ${avgKoalas})`);
    }else{
        // console.log(`Koalas win! (${avgKoalas} vs. ${avgDolphins})`);
    }
}

const winner = checkWinner(dolphinsAverage, koalasAverage);

//Arrays

const friends = ['Ron', 'Joe', 'Mike']; 
console.log(friends);


console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length-1]);

friends[2] = 'Jay'; //Array is not primitive hence it is mutable
console.log(friends);

// friends = ['Alice', 'Charles'] //Uncaught TypeError: Assignment to constant variable. 

const firstName = 'Joel'
const joel = [firstName, 'Prashanth', 2025-1998, friends];
console.log(joel);

//Exercise

const calcAge = function (birthYear){
    return 2025 - birthYear;
}

const years = new Array(1991, 1993, 1996, 1981, 2000);

console.log(calcAge(years)); //NaN

// const ageOne = calcAge(years[0]);
// const ageTwo = calcAge(years[1]);
// const ageThree = calcAge(years[2]);
// console.log(calcAge(years[years.length-1]));

// console.log(ageOne);
// console.log(ageTwo);
// console.log(ageThree);


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

console.log(ages);