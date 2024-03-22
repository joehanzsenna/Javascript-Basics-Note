// What is the DOM?
// The DOM defines a standard for accessing documents:
// "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.";

// The HTML DOM is a standard object model and programming interface for HTML. It defines:

// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements
// In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

// Finding HTML Elements by Tag Name
const header = document.getElementsByTagName("h1");

for (let i = 0; i < header.length; i++) {
  header[i].innerHTML = "This is a text in my header";
  console.log(header);
}

const header1 = document.getElementsByTagName("h1")[0];
header1.innerHTML = "This is a text in our header1";

const header2 = document.getElementsByTagName("h1")[1];
header2.innerHTML = "This is a text in our header2";

const header3 = document.getElementsByTagName("h1")[2];
header3.innerHTML = "This is a text in our header3";

const pTags = document.getElementsByTagName("p");

for (let i = 0; i < pTags.length; i++) {
  pTags[i].innerHTML = "this is a paragraph text";
}
console.log(pTags);

// Selecting an element by It's id
// let's select an element in our html document then change the text

const head2 = document.getElementById("headerh2");
head2.innerHTML += " this is a text added to the h2";

// Selecting an element by It's class
const classicP = document.getElementsByClassName("ppTags");
console.log(classicP);

classicP[0].innerHTML += " new text here";
classicP[2].innerHTML += " This is the last Class";

// Finding HTML Elements by CSS Selectors or Querry selector

// selecting from a class
const firstText = document.querySelector(".firstQuerry");
firstText.innerHTML += " A new text here";

// selecting from an id
const secondText = document.querySelector("#secondQuerry");
secondText.innerHTML += " Another new text here";

// using the querry selector all

const querryAllTags = document.querySelectorAll(".querryTags");
console.log(querryAllTags);

// for (let i = 0; i <= querryAllTags.length; i++) {

//   querryAllTags[i].innerHTML = 'new text here';
// }

console.log(querryAllTags[0].textContent);

// stylng elements
const text1 = document.getElementById("text1");
text1.style.color = "red";
text1.style.backgroundColor = "orange";
// text1.style.display = 'inline'
text1.style.padding = "2rem";
text1.style.fontSize = "2rem";

// Creating a new Dom element
// domSec.append()
const container2 = document.getElementById("container2");

const div1 = document.createElement("div");
const div1Text = document.createTextNode("first div");
console.log(div1Text);
div1.appendChild(div1Text);
console.log(div1);

const div2 = document.createElement("div");
const div2Text = document.createTextNode("Second div");
div2.appendChild(div2Text);
console.log(div2);

// console.log(div1.textContent);
container2.appendChild(div1);
container2.appendChild(div2);

console.log(container2);

// // removing a child element
container2.removeChild(div2);
console.log(container2);

container2.appendChild(div2);
console.log(container2);
div2.removeChild(div2Text);
console.log(container2);

div2.appendChild(div2Text);
console.log(container2);

// // insertBefore
container2.insertBefore(div2, div1);
console.log(container2);

// previous and next element sibling

container2.insertBefore(div1, div2);
console.log(container2);

div1.nextElementSibling.style.color = "blue";
div2.previousElementSibling.style.color = "green";

// firstElementChild/ lastElementChild
const pTex = document.querySelector(".ppTex");

pTex.lastElementChild.style.backgroundColor = "green";
pTex.lastElementChild.style.color = "white";
pTex.firstElementChild.style.backgroundColor = "red";

// The children property returns a collection of an element's child elements.
// The children property returns an HTMLCollection object.

const collection = document.body.children;
console.log(collection);

// HTML DOM Element setAttribute()

// JavaScript HTML DOM Events
// HTML DOM allows JavaScript to react to HTML events:
// A JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.
// To execute code when a user clicks on an element, add JavaScript code to an HTML event attribute:

const heading = document.querySelector(".heading1");
const btn = document.querySelector(".click");

btn.addEventListener("click", () => {
  heading.style.backgroundColor = "red";
  heading.style.color = "white";

  btn.style.backgroundColor = "red";
});

// counter

let firstPp = document.getElementById("eventP1");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

let count = 0;

console.log(firstPp);
btn1.addEventListener("click", () => {
  count += 1;
  firstPp.innerHTML = count;
});
btn2.addEventListener("click", () => {
  count -= 1;
  firstPp.innerHTML = count;
});
btn3.addEventListener("mouseup", () => {
  count = 0;
  firstPp.innerHTML = count;
});

// set time out
// The setTimeout() Method
// window.setTimeout(function, milliseconds);
// The window.setTimeout() method can be written without the window prefix.
// The first parameter is a function to be executed.
// The second parameter indicates the number of milliseconds before execution.

const timeChain = setTimeout(() => {
  console.log("hello");
}, 5000);

// How to Stop the Execution?
// The clearTimeout() method stops the execution of the function specified in setTimeout().
clearTimeout(() => {}, 1000);

const compare = false;

const timeout = setTimeout(greetings, 5000, "How you doing today Fam");

if (compare == true) {
  clearTimeout(timeout);
} else {
  // setTimeout(greetings, 5000, "How you doing today Fam", ' Have you eaten ');
}

function greetings(c) {
  console.log(c);
}

// function greetings(a,b) {
//   let c = a + b
//   console.log(c);
// }

// The setInterval() Method
// The setInterval() method repeats a given function at every given time-interval.

setInterval(() => {
  console.log("how are you");
}, 2000);

// How to Stop the Execution?
// The clearInterval() method stops the executions of the function specified in the setInterval() method.
clearInterval(() => {}, 1000);

// setInterval / clearInterval

let counter = 0;
const countInterval = setInterval(Count, 1000);

function Count() {
  console.log(counter++);
  if (counter > 10) {
    clearInterval(countInterval);
  }

  // return console.log(counter);
}

//  <!-- STOP WATCH  -->

const display = document.getElementById("vieww");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stopp");

let seconds = 0;
let minute = 0;
let hour = 0;

let globalInterval = null;

startBtn.addEventListener("click", () => {
  let timeInterval = setInterval(() => {
    // tenary operator, short way for writing if else statement
    let outputSeconds = seconds > 9 ? seconds : `0${seconds}`;
    let outputMinute = minute > 9 ? minute : `0${minute}`;
    let outputHour = hour > 9 ? hour : `0${hour}`;

    seconds++;

    if (seconds === 60) {
      minute++;
      seconds = 0;
    }
    if (minute === 60) {
      hour++;
      minute = 0;
    }

    display.innerHTML = `${outputHour}:${outputMinute}:${outputSeconds}`;
  }, 1);

  globalInterval = timeInterval;
});

pauseBtn.addEventListener("click", () => {
  clearInterval(globalInterval);
});

stopBtn.addEventListener("click", () => {
  clearInterval(globalInterval);
  seconds = 0;
  minute = 0;
  hour = 0;

  display.innerHTML = `0${hour}:0${minute}:0${seconds}`;
});
