/*Multiple Args Exercise
In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  
Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  
If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5) //Not Snake Eyes!

Hint: Normally a function will return a value, but for the sake of having this 
work with the Udemy interpreter we will be using console.log() instead of 
return, to print the output. */

let rollOne = Math.floor(Math.random() * 6 + 1);
let rollTwo = Math.floor(Math.random() * 6 + 1);

function isSnakeEyes(rollOne, rollTwo) {
  console.log(`Roll one: ${rollOne} and roll two: ${rollTwo}`);

  if (rollOne === 1 && rollTwo === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

// isSnakeEyes(rollOne, rollTwo);

function modularIsSnakeEyes(randomizer) {
  let rollOne = randomizer();
  let rollTwo = randomizer();

  console.log(`Roll one: ${rollOne} and roll two: ${rollTwo}`);

  if (rollOne === 1 && rollTwo === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}

// modularIsSnakeEyes(() => Math.floor(Math.random() * 6 + 1));

// Return Value Practice
// It's time to practice returning values from a function! Write a simple
// function multiply which accepts two numerical arguments and returns their
// product (multiply them together).  Make sure to return the value instead of printing it!

// multiply(2,3) // 6
// multiply(9,9) // 81
// multiply(5,4) // 20

function multiply(num1, num2) {
  let product = num1 * num2;

  return product;
}

// Alternatively I could just do the following but I like putting it into a variable for reusability as a general practice:

function multiply(num1, num2) {
  return num1 * num2;
}

// isShortsWeather Function
// I often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.
// It's really not that hard to decide.) Please help me decide by writing me a function called isShortsWeather.

// It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course).

// If temperature is greater than or equal to 75, return true.

// Otherwise, return false.

// This exercise assumes temperature is in Fahrenheit.  I apologize to all my Celsius-using students!

// isShortsWeather(80) //true
// isShortsWeather(48) //false
// isShortsWeather(75) //true

function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  } else {
    return false;
  }
}

// Last Element Exercise
// Please write a function called lastElement which accepts a single array argument.
// The function should return the last element of the array (without removing the element).
// If the array is empty, the function should return null.

// lastElement([3,5,7]) //7
// lastElement([1]) //1
// lastElement([]) //null

function lastElement(array) {
  if (array.length !== 0) {
    return array[array.length - 1];
  } else {
    return null;
  }
}

// Capitalize Exercise
// Define a function called capitalize that accepts a string argument and returns a new string
// with the first letter capitalized (but the rest of the string unchanged).  For example:

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"
// Hints:

// Remember that strings are immutable, meaning that you cannot simply change the first letter in
// the original string.  You will need to make a new string that you return.

// Single out the first letter and capitalize it. (use a string method to help!)

// Add that first letter to the rest of the original string, sliced to omit the original first letter (use a string method to help!)

// For example: 'eggplant' becomes 'E' + 'ggplant'

function capitalize(inputString) {
  let outputString = "";

  console.log(inputString);

  for (let i = 0; i < inputString.length; i++) {
    if (i === 0) {
      outputString = outputString.concat(inputString[i].toUpperCase());
    } else {
      outputString = outputString.concat(inputString[i].toLowerCase());
    }
  }
  console.log(outputString);
  return outputString;
}

// capitalize("potato");
// capitalize("FeLiNe");

// Sum Array Exercise
// Write a function called sumArray which accepts a single argument: an array of numbers.
// It should return the sum of all the numbers in the array.

// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101
// Hints:

// You'll need a variable to keep track of the total.  It should start out as zero.

// Loop over the array and for each element, add it to the total variable.

// After you have added every number to total, return total.

function sumArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  console.log(sum);
  return sum;
}

// sumArray([1, 2, 3, 4]);

// Decided to also make it work as a for... of loop for practice

function sumArrayForOF(array) {
  let sum = 0;

  for (let number of array) {
    sum += number;
  }

  console.log(sum);
  return sum;
}

// Days Of The Week Exercise
// Write a function called returnDay. this function takes in one parameter (a number from 1-7)
// and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than
// 1 or greater than 7, the function should return null. In some countries Sunday is treated as
// the first day of the week, but for this exercise we will use Monday as the first day.

// Hint: store the days of the week in an array, or use an object with numerical keys.
// When the function is called, plug the number into the array/object you've created to
// retrieve the corresponding day name and then return that value.

// returnDay(1) // "Monday"
// returnDay(7) // "Sunday"
// returnDay(4) // "Thursday"
// returnDay(0) // null

function returnDay(num) {
  let daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (typeof num !== "number" || num < 1 || num > 7) {
    return null;
  } else {
    console.log(daysOfWeek[num - 1]);

    return daysOfWeek[num - 1];
  }
}

// returnDay(1);
// returnDay(2);
// returnDay(3);
// returnDay(4);
// returnDay(5);
// returnDay(6);
// returnDay(7);
