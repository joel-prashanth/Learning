//Values and Variables

let firstName = "Joel";

// console.log(firstName);

let PI = 3.14


//Assignment-1

const country = "India";
const continent = "Asia";
let population = 1_4_000_000_000

// console.log(country);
// console.log(continent);
// console.log(population);

//Datatypes and Dynamic typing

// let jsIsFun = true;
// console.log(typeof jsIsFun);
// jsIsFun = 'YES';
// console.log(typeof jsIsFun);

// let year;
// console.log(typeof year);

// year = 1998;
// console.log(typeof year);

// console.log(typeof undefined);
// console.log(typeof null); //this is a legacy bug


//Assignment-2

const isIsland = false;
let language;

// console.log(isIsland);
// console.log(population);
// console.log(language);

//let, const & var

let age = 30;
age = 31;

const birthYear = 1998;
// birthYear = 1997; //Uncaught TypeError: Assignment to constant variable.

// const job; //Uncaught SyntaxError: Missing initializer in const declaration

var job = "Developer";

//Assignment-3
language = "Tamil";
// country = "Africa" //Uncaught TypeError: Assignment to constant variable.

//Operators

const now = 2025
const myAge = now - 1998;
// console.log(myAge);

// Math +, -, /, *, **, = 

let x = 10;
// console.log(x);
x += 10;
// console.log(x);

x *= 4;
// console.log(x);

x /= 4;
// console.log(x);

x++;
// console.log(x);

// Comparision >, <, >=, <=

let a = 1;
let b = 2;
// console.log(a>b, a<b, a>=b, a<=b);

// Assignment-3

population++;
let finlandPopulation = 6_000_000

let halfPopulation = population / 2;
const avaeragePopulation = 33_000_000;
// console.log(population<avaeragePopulation);
// console.log(population>halfPopulation);
// console.log(halfPopulation);

let description = "India is a country in Asia and its 69 million speak Tamil."

// console.log(description);

//Precedence of Operators

// console.log(25-10-5); //left to right
let u,v;
let w = 5;
w = 25-10-5;
// console.log(w);
u = v = 25-10-5; //u=v=10
// console.log(u, v);
let j = 12;
let k = 15;
// console.log((j+k)/2);

//Coding Challenges

//Challenge-1

let weightMark = 78;  //95
let heightMark = 1.69; //1.88

let weightJohn = 92; //85
let heightJohn = 1.95; //1.76

let bmiJohn;
let bmiMark;


bmiMark = (weightMark / (heightMark**2)).toFixed(1);
bmiJohn = (weightJohn / (heightJohn ** 2)).toFixed(1);
// console.log(bmiMark, bmiJohn);

let markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// if(markHigherBMI){
//     console.log( `Mark's BMI ${bmiMark} is higher than John's!`);
// }
// else{
//     console.log( "John's BMI is higher than Mark's!");
// }


// Template Literals

const joel = "I'm " + firstName + ' a ' + myAge + " year old " + job;
// console.log(joel);

const bio = `I'm ${firstName}, a ${myAge} year old ${job}.`
// console.log(bio);


//if-else decision making

const drivingAge = 15;
const isOldEnough = drivingAge >=18;
const yearsLeft = 18 - drivingAge;

if(isOldEnough){
    // console.log(`You can drive!`);
}else{
    // console.log(`Not yet! Wait another ${yearsLeft} years.`);
}

const yearOfBirth = 1998;
let century;

if(yearOfBirth <= 2000){
     century = 20;
}else{
     century = 21;
}
// console.log(century);

//Type conversion 

const inputYear = '1991';
// console.log(inputYear + 10); //concatenation happens here
// console.log(Number(inputYear) + 10); //Addition happens here
// console.log(String(inputYear) + 10); //concatenation happens here

// console.log(Number('Joel')); //NaN
// console.log(typeof NaN);

// Type Coercion

// console.log('I am ' + 27 + " years old"); // 27 is a number
// console.log('23' - '10' - 3); // 10
// console.log('23' + '10' - 3); // 2307


// Guess the output

let n = 1 + "1";
// console.log(n); // '11'

n = n - 1; // 10 number
// console.log(n);

// Truthy and Falsy values

/*There are 5 falsy vaues which will give false when we apply Boolean conversion:

    1. 0
    2. ''
    3. undefined
    4. null
    5. NaN

*/

// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean({})); // Empty objects are truthy values

const money = 0; //falsy logic
if(money){
    console.log(`Don't spend it all!`);
}else{
    console.log(`You should get a job!`);
}

let height = 0;  // falsy let height;
if(height){
    console.log('Height is defined!');
}else{
    console.log('Height is undefined!');
}

// Equality Operators == and ===

const ageVariable = 18;
if(ageVariable === 18){
    console.log('You just became an adult!');
}

console.log('18' == 18); // true Loose Equality
console.log('18' === 18); // false Strict Equality


//Boolean Logic

