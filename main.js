console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"


let node1change = document.getElementById("node1");

node1change.textContent = "THIS ONE WORKS";


// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */

let node2change = document.getElementsByClassName("node2");

     for(let ele of node2change){
          ele.textContent = "THIS WORKS TOO!"
}




// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

let h3change = document.getElementsByTagName("h3");

for(let ele of h3change)
     ele.textContent = "THESE WORK TOO !!!";

     




/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let p = document.createElement('h1');


// TODO: Append the created node to the parent node using the element.appendChild() method

const parent = document.getElementById("parent");
     p.textContent = 'I CREATED AND APPENDED THIS';

          parent.appendChild(p);


// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

let a = document.createElement('a');
a.textContent = "ESPN.com";
a.href = "https://espn.com";

const addLink = document.getElementById("parent");
const beforeh1 = document.getElementById("h1");

parent.insertBefore(a,p);

// BONUS: Add a link href to the <a>

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
let parent3 = document.getElementById("exercise-container3");
let N1 = document.getElementById("N1");

let h3 = document.createElement('h2');
h3.textContent = "REPLACED"

parent3.replaceChild(h3, N1);

// remove set time out

// TODO: Remove the "New Child Node"

/*----------- Exercise #4: ANIMATIONS ----------- */
// TODO: Write your JavaScript here to make the red box go from left to right
// let interval = setInterval(move, 10);

let container = document.querySelector("#container");
let box = document.querySelector("#box");


let x = 0;
let y = 0;
let xEdge = container.clientWidth - box.clientWidth;
let yEdge = container.clientHeight - box.clientHeight;
let dir = "right";
let unit = 10;

let interval = setInterval(() => {
    if(dir == "right"){
     moveX(unit);
}else if (dir == "down"){
     moveY(unit);
}else if (dir == "left"){
     moveX(-unit);
}else {
     moveY(-unit)
}

},10);


function moveX(unit) {
       x += unit;
       box.style.left = `${x}px`;
     
       if (x >= xEdge) {
         dir = "down";
       } else if (x <= 0) {
         dir = "up";
       }
     }
     
     function moveY(unit) {
       y += unit;
       box.style.top = `${y}px`;
     
       if (y >= yEdge) {
         dir = "left";
       } else if (y <= 0) {
         dir = "right";
       }
     }







// BONUS - Make the red box go all the way around the perimeter of the green box

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

let btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
     btn.disabled = true;

let main = document.querySelector(".root")


let container5 = document.createElement("div")
container5.classList.add("modalBackground")

let modal = document.createElement("div")
modal.classList.add("modalBox")

let title = document.createElement("h2")
title.classList.add("modalTitle")
title.textContent = "Modal"

let description = document.createElement("p")
description.classList.add("modalDescription")
description.textContent = "This modal was hard to make"

let modalBtn = document.createElement("button")
modalBtn.classList.add("button")
modalBtn.textContent = "Close"
modalBtn.addEventListener(`click`,() => {
     main.removeChild(container5)
     btn.disabled =false
})

modal.append(title,description,modalBtn)
container5.appendChild(modal)

main.appendChild(container5)
})
