'use strict';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// // Destructuring arrays
// // const arr = [1,2,3];

// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x,y,z] = arr;
// // console.log(x,y,z);
// // console.log(arr);

// // const [first, second] = restaurant.categories;
// // console.log(first,second);

// // let [main, , secondary] = restaurant.categories;
// // console.log(main, secondary); //Italian Vegetarian

// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary); //Vegetarian Italian

// //Switching Variables

// // [secondary, main] = [main, secondary];
// // console.log(main, secondary); //Italian Vegetarian

// //Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// // console.log(starter, mainCourse);

// //Nested Destructuring
// const nsetedArray = [2,3,[4,5,6]];
// // const [, ,j] = nsetedArray;
// const [i, , [j,k,l]] = nsetedArray
// // console.log(j, k, l);

// //Default values

// const [p=1,q=1,r=1] = [8,9];
// // console.log(p,q,r);

//Assignments

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//1.1
const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

//1.2
const [, , thirdBook] = books;
// console.log(thirdBook);

//1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

//1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

//Destructuring Objects

//2.1
const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

//2.2
// const { keywords: tags } = books[0];
// console.log(tags);

//2.3
// const { language, programmingLanguage = 'unknown' } = books[6];
// console.log(language, programmingLanguage);

//2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[4]);
// console.log(bookTitle, bookAuthor);

//2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
// console.log(bookRating);

//2.6

function printBookInfo({title, author, year = 'year unknown'}) {
  console.log(`${title} by ${author}, ${year}`);
}


//3.1 Spread Operator

const arr = [1,2,3];
// const newArr = [1,0,arr[0],arr[1],arr[2]];

const newArr = [1,0, ...arr];
// console.log(newArr);
// console.log(...newArr);



const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    return `Here is you pasta with ${ing1}, ${ing2} and ${ing3}!`;

  }
};


// console.log(restaurant.mainMenu);

const newMenu = [...restaurant.mainMenu, 'Gnucci'];

// console.log(newMenu);

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// join 2 or more array

const completeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu ];
// console.log(completeMenu);

//Iterables are everything except objects

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"),prompt("Ingredient 2?"), prompt("Ingredient 3?")];


// console.log(restaurant.orderPasta(...ingredients));


const newRestaurant = {...restaurant, founder: 'Joel', year: 1998};

// console.log(newRestaurant);


const restoCopy = {...restaurant};
restoCopy.name = "Resto Roma";

console.log(restaurant);
console.log(restoCopy);



// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // open 24h
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function (starterIndex, mainIndex, address, time) {
//     console.log(`Order received! ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} to ${this.address}`);
//   },
// };




// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'Earth',
//   mainIndex: 1,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const { name: restoName, openingHours: hours, categories: tags } = restaurant;

// // console.log(restoName, hours, tags);

// //Default values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu);
// // console.log(starters);

// //Mutating Variables
// let a = 1;
// let b = 2;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// // console.log(a,b);

// //Nested objects

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// // console.log(o, c);
