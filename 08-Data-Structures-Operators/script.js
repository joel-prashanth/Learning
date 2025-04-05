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

function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}

//3.1 Spread Operator

const arr = [1, 2, 3];
// const newArr = [1,0,arr[0],arr[1],arr[2]];

const newArr = [1, 0, ...arr];
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
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    return `Here is you pasta with ${ing1}, ${ing2} and ${ing3}!`;
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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
      open: 0, // open 24h
      close: 24,
    },
  },
};

// console.log(restaurant.mainMenu);

const newMenu = [...restaurant.mainMenu, 'Gnucci'];

// console.log(newMenu);

//Copy array

const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// join 2 or more array

const completeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(completeMenu);

//Iterables are everything except objects

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"),prompt("Ingredient 2?"), prompt("Ingredient 3?")];

// console.log(restaurant.orderPasta(...ingredients));

const newRestaurant = { ...restaurant, founder: 'Joel', year: 1998 };

// console.log(newRestaurant);

const restoCopy = { ...restaurant };
restoCopy.name = 'Resto Roma';

// console.log(restaurant);
// console.log(restoCopy);

//Rest Operator - Pack into an array

const [a, b, ...others] = [1, 2, 3, 4, 5]; //... is on the left-hand of the = operator

// console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

//Rest operator as an argument to a function

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum += numbers[i];
  }
  return sum;
};

// console.log(add(2, 3));
// console.log(add(23, 555, 234, 160));

const x = [12, 13, 14];
// console.log(add(...x));

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');

//Short Circuiting with && and || operators
// Logical operators can use and return any datatype and can perform something called short-circuiting

// || - Tells the first truthy value
// console.log(3 || 'Joel'); //3
// console.log(0 || 'Joel'); //Joel

// // && - Tells the first falsy value

// console.log(3 && 'Joel' && null); //null
// console.log(0 && 'Joel'); //0
// console.log(undefined && 'Joel'); //undefined

// restaurant.numGuestss = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 20
// console.log(guests2);

//Nullish coaleasing operator

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const correctGuests = restaurant.numGuests ?? 10; //works with nullish values instead of falsy values ie null and undefined
// console.log(correctGuests);

//logical assignment 

const rest1 = {
  name: 'Blues',
  numGuests: 20,
}


const rest2 = {
  name: 'Reds',
  owner: 'Rue'
}

rest2.numGuests = rest1.numGuests ||  10;

rest1.owner = rest1.owner && '<ANONYMOUS>'; //undefined
rest2.owner = rest2.owner && '<ANONYMOUS>'; //<ANONYMOUS>

// console.table(rest2);

const game = { 
  team1: 'Bayern Munich', 
  team2: 'Borrussia Dortmund', 
  players: [ 
    [ 
      'Neuer', 
      'Pavard', 
      'Martinez', 
      'Alaba', 
      'Davies', 
      'Kimmich', 
      'Goretzka', 
      'Coman', 
      'Muller', 
      'Gnarby', 
      'Lewandowski', 
    ], 
    [ 
      'Burki', 
      'Schulz', 
      'Hummels', 
      'Akanji', 
      'Hakimi', 
      'Weigl', 
      'Witsel', 
      'Hazard', 
      'Brandt', 
      'Sancho', 
      'Gotze', 
    ], 
  ], 
  score: '4:0', 
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',  
  'Hummels'], 
  date: 'Nov 9th, 2037', 
  odds: { 
    team1: 1.33, 
    x: 3.25, 
    team2: 6.5, 
  }, 
};

const [players1, players2] = game.players
// console.log(players1);
// console.log(players2);

const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;

const allPlayers = [...players1, ...players2];

const playersFinal = [...players1,'Thiago', 'Courtinho', 'Perisic'];
// console.log(game.odds);

const {team1, x: draw, team2} = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);



// console.log(playersFinal);
// console.log(allPlayers);
// console.log(gk);
// console.log(fieldPlayers);





// console.log(game.players);








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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

// for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i+1}: ${el}`);
}
