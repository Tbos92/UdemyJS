const helloBtn = document.querySelector("#hello");
const goodbyeBtn = document.querySelector("#goodbye");

helloBtn.addEventListener("click", () => {
  console.log("hello");
});

goodbyeBtn.addEventListener("click", () => {
  console.log("goodbye");
});
