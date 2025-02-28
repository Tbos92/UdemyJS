let square = function (num) {
  // return num * num;
  return Math.pow(num, 2);
};

// Returning functions from a function
// Basic example

function makeMysteryFunction() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("This is the good function");
    };
  } else {
    return function () {
      alert("This is the bad function :(");
    };
  }
}

makeMysteryFunction();

function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

let isChild = makeBetweenFunc(0, 17);
let isAdult = makeBetweenFunc(18, 64);
let isSenior = makeBetweenFunc(65, 120);

console.log(isSenior(32));
console.log(isSenior(72));
console.log(isAdult(21));
console.log(isAdult(2));
console.log(isChild(21));
console.log(isChild(2));


