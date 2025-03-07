const btn = document.querySelector("#v2");

btn.onclick = function () {
  console.log("You clicked me externally!!!");
};

function scream() {
  console.log("AAAAAAAAAAHHHH");
}
btn.onmouseenter = scream;

h1 = document.querySelector("h1");

h1.onclick = () => {
  console.log("you clicked the h1");
};

btn3 = document.querySelector("#v3");

btn3.addEventListener("click", () => {
  console.log("Button 3 was clicked using EventListeners");
});

function twist() {
  console.log("TWIST!");
}

function shout() {
  console.log("SHOUT!");
}

tasBtn = document.querySelector("#tas");

// tasBtn.addEventListener("click", twist);
// tasBtn.addEventListener("click", shout);
tasBtn.addEventListener("click", () => {
  twist();
  shout();
});
