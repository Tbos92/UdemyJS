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

isSnakeEyes(rollOne, rollTwo);

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

modularIsSnakeEyes(() => Math.floor(Math.random() * 6 + 1));
