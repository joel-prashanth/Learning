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

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring arrays
const arr = [1, 2, 3];
const [x, y, z] = arr;
// console.log(x, y, z); // 1 2 3

// console.log(restaurant.categories)
// Destructuring and swapping
let [main, secondary] = restaurant.categories;
// console.log(main, secondary); // Italian Pizzeria

// Swapping the variables
[main, secondary] = [secondary, main];
// console.log(main, secondary); // Pizzeria Italian

const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter,mainCourse)

// Nested destructuring
const nestedArray = [2, 4, [5, 6]];

const [i, , [j, k]] = nestedArray;
// console.log(i,j,k) //2 5 6

// Default values

const [p, q = 1, r = 1] = [8];
console.log(p, q, r);
