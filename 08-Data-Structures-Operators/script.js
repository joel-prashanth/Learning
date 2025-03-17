'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring arrays
// const arr = [1,2,3];

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first,second);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); //Italian Vegetarian

// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); //Vegetarian Italian

//Switching Variables

// [secondary, main] = [main, secondary];
// console.log(main, secondary); //Italian Vegetarian

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//Nested Destructuring
const nsetedArray = [2,3,[4,5,6]];
// const [, ,j] = nsetedArray;  
const [i, , [j,k,l]] = nsetedArray
// console.log(j, k, l);

//Default values

const [p=1,q=1,r=1] = [8,9];
// console.log(p,q,r);


