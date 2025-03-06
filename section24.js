/* getElementById Practice
Let's get some practice using getElementById. I've provided a little bit of markup for you 
(please don't change it!)  Your goal is to write code in app.js to select the following 
elements using getElementById:

Select the image element by its id and save it to a variable called image

Select the h1 by its id and save it to a variable called heading

Note: You may need to reset the code before attempting this exercise 

Project HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unicorn</title>
</head>
<body>
    <h1 id="mainheading">I &hearts; unicorns</h1>
    <img src="https://images.unsplash.com/photo-1550747528-cdb45925b3f7?w=200" id="unicorn" alt="unicorn">
    <!-- image source: unsplash.com -->
</body>
</html>

*/
// project JS:

const image = document.getElementById("unicorn");

const heading = document.getElementById("mainheading");

/*querySelector Practice
I've provided you with some simple markup in index.html.  Your task is to use querySelector and 
querySelectorAll to select some of those elements.

Select all elements that have the class of "done" and save them in a variable called doneTodos.

Select the one checkbox and save it in a variable called checkbox. Be careful, there is more than 
one input element on the page! You'll need to select using the type attribute. (if you can't 
remember the css attribute selector...google it! That's what I would do!)

Write your code in app.js.  Please do not change any of the elements in index.html 

Project HTML:

<!DOCTYPE html>
<html>

<head>
    <title>Todos</title>
</head>

<body>
    <h1>Garden Todos</h1>
    <input type="text" placeholder="New Todo">
    <ul>
        <li>Start Seedlings</li>
        <li class="done">Deadhead Zinnias</li>
        <li class="done">Water Tomatoes</li>
        <li class="done">Harvest Potatoes</li>
        <li>Prune Roses</li>
    </ul>
    <label>Delete All</label>
    <input type="checkbox" id="scales" name="scales" checked>

</body>

</html>

Project CSS:

.done {
    color: grey;
    text-decoration: line-through;
}
*/

// JS:

let doneTodos = document.querySelectorAll(".done");

const checkbox = document.querySelector("#scales");

/*Project HTML:

<!DOCTYPE html>

<head>
    <title>Pickles</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <!--PLEASE LEAVE THIS LINE ALONE! MAKE YOUR CHANGES USING JAVASCRIPT!!-->
    <h1>Pickles Are <span>Delicious</span></h1>
</body>

</html>
*/

// JS:
document.querySelector("span").innerText = "Disgusting";

/*Project HTML:

<!--DONT CHANGE ANYTHING IN THIS FILE, PLEASE!-->
Egg and Chicken


<h4>Which Came First?</h4>
<img src="https://images.unsplash.com/photo-1607690424560-35d967d6ad7c?w=200">
<!-- image source: unsplash.com -->

<!DOCTYPE html>

</html>
*/

// JS
document
  .querySelector("img")
  .setAttribute(
    "src",
    "https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200"
  );
document.querySelector("img").setAttribute("alt", "chicken");

/*Project HTML:

<!DOCTYPE html>

<head>
    <title>Forest</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
   <div id="container">
        <h1>I &hearts; Trees</h1>
        <img src="https://images.unsplash.com/photo-1596328546171-77e37b5e8b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" alt="">
    </div>
</body>

</html>
*/

// JS:
document.querySelector("#container").style.textAlign = "center";

document.querySelector("img").style.width = "150px";

document.querySelector("img").style.borderRadius = "50%";

/*Project HTML:

<!DOCTYPE html>

<head>
    <title>Rainbow</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/nodelist-foreach-polyfill@1.2.0/index.min.js"></script>
</head>

<body>
    <!--DON'T TOUCH THIS FILE PLEASE!-->
    <h1>
        <span>R</span>
        <span>A</span>
        <span>I</span>
        <span>N</span>
        <span>B</span>
        <span>O</span>
        <span>W</span>
    </h1>
</body>

</html>

*/

// JS
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];


const text = [...document.querySelectorAll("span")]

for(let i = 0; i < text.length; i++) {
    text[i].style.color = colors[i];
}

/*Project HTML:



*/

/*Project HTML:



*/
