const printSum = (a, b) => {
    return console.log(a + b);
};


// For commenting some lines use Ctrl + /.

// const a = 50;
// const b = 71;
// const c = 48;


// Function for start plugin in RPG Maker MZ

(function() {

})()


// "use strict" - enable "newest mode" for code in the file.js


// Variables - how you can initialize variables

// ver. 1 
let user = 'John', age = 25, message = 'Hello'; // not recommended

// ver. 2
let user1 = 'John';
let age1 = 25;
let message1 = 'Hello'; // recommended

// ver. 3
let user2 = 'John',
  age2 = 25,
  message2 = 'Hello'; // a matter of taste

// ver. 4
let user3 = 'John'
  , age3 = 25
  , message3 = 'Hello'; // a matter of taste, shit...


let myArray = [ `Apple`, `Orange`, `Watermelon`];

myArray[0] = `Pear`;

//console.log(myArray);

let styles = [ `Джаз`, `Блюз` ];

console.log( styles );

styles.push( `Рок-н-Ролл` );

console.log( styles );

let test = Math.round( ( styles.length / 2 ) );

//console.log( test );

styles[ Math.round( ( styles.length / 2 ) ) - 1 ] = `Классика`;

console.log( styles );

console.log( styles.shift() );

styles.unshift( `Рэп`, `Регги` );

console.log( styles );