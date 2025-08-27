let title = document.getElementById("title");
console.log(title); // Outputs the element with id "title" to the console
title.textContent = "Welcome to MAYONDO WOOD"; // Sets the text content of the element with id "title"
title.style.color = "green"; // Changes the text color of the element with id "title" to green
title.style.fontSize = "40px"; // Changes the font size of the element with id

let header = document.getElementById("first");
header.innerHTML = "MAYONDO WOOD AND FURNITURE"; // Sets the inner HTML of the element with id "first"

/* MORE DOM METHODS 
    -  document.getElementsByClassName("className") - Returns a collection of elements with the specified class name.
    -  document.getElementsByTagName("tagName") - Returns a collection of elements with the specified tag name.
    -  document.getElementById("id") - Returns the element with the specified id.
    -  document.querySelector("selector") - Returns the first element that matches the specified CSS selector.
    -  document.querySelectorAll("selector") - Returns a collection of all elements that match the specified CSS selector.
    -  document.createElement("tagName") - Creates a new element with the specified tag name.
    -  parentElement.appendChild(childElement) - Adds a new child element to a specified parent element.
    -  parentElement.removeChild(childElement) - Removes a child element from a specified parent element.
    -  parentElement.replaceChild(newElement, oldElement) - Replaces an old child element with a new child element.
    -  element.setAttribute("attr", "value") - Sets the value of an attribute on the specified element.
    -  element.getAttribute("attr") - Returns the value of an attribute on the specified element.
    -  element.classList - Provides methods to add, remove, and toggle CSS classes on an element.
    */



    // Using getElementsByTagName to change the style of all h2 elements
let subheadings = document.getElementsByTagName("h2");
for (let i = 0; i < subheadings.length; i++) {
   subheadings[i].style.color = "blue";
    subheadings[i].style.fontSize = "30px";
    console.log(subheadings[i].textContent); // Outputs the text content of each h2 element
}

// Using getElementsByClassName to change the style of all elements with class "about"
let paragraphs = document.getElementsByClassName("about");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "purple";
    paragraphs[i].style.fontSize = "20px";
    paragraphs[i].style.backgroundColor = "lightgray";
    paragraphs[i].style.border = "1px dashed black"; // Sets the border of each about element
    paragraphs[2].style.fontSize = "30px";  // Changes the font size of the third about element to 30px
    paragraphs[2].style.color = "red"; // Changes the text color of the third about element to red
    paragraphs[2].style.backgroundColor = "yellow"; // Changes the background color of the third about element to yellow
    console.log(paragraphs[i]); // Outputs the p element of each about element
    // console.log(paragraphs[i].textContent); // Outputs the text content of each about element
}

let paragraphs1 = document.getElementsByClassName("about");
console.log(paragraphs1.length); // Outputs the number of elements with class "about" in the console






// Using querySelector to change the style of the first element with class "about"


// let thirdTitle = document.querySelector("h3"); // Selects the first h3 element in the document

// let thirdTitle = document.querySelector("#third-title");   // Selects the element with id "third-title"

let thirdTitle = document.querySelector(".thirdTitle"); // Selects the first element with class "thirdTitle"
thirdTitle.style.color = "red"; // Changes the text color of the first element with class "thirdTitle" to red
thirdTitle.style.fontSize = "50px"; // Changes the font size of the first element with class "thirdTitle" to 50px
thirdTitle.textContent = "MAYONDO WOOD - MWF"; // Sets the text content of the first element with class "thirdTitle" to "MAYONDO WOOD"




// Using querySelectorAll to change the style of all elements with elements "h2"     (The code below will style the h2 that is the second element in the List because the index starts at 0)

let headingsArray = document.querySelectorAll("h2"); // Selects all elements with elements "h2"
headingsArray[1].className = "container"; // Sets the class of the second element in the NodeList to "container"
headingsArray[1].id = "sub_headings"; // Sets the id of the second element in the NodeList to "sub_headings"

//same as above
// headingsArray[1].setAttribute("class", "container"); // Sets the class of the second element in the NodeList to "container"
// headingsArray[1].setAttribute("id", "sub_headings"); // Sets the id of the second element in the NodeList to "sub_headings"
headingsArray[1].setAttribute("class", "container") // Sets the class of the second element in the NodeList to "container"
headingsArray[1].setAttribute("id", "sub_headings") // Sets the id of the second element in the NodeList to "sub_headings"
headingsArray[1].style.color = "orange"; // Changes the text color of the second element in the NodeList to orange
headingsArray[1].style.backgroundColor = "green";
headingsArray[1].style.fontSize = "25px"; // Changes the font size of the second element in the NodeList to 25px
headingsArray[1].textContent = "WOOD"; // Sets the text content of the second element in the NodeList to "WOOD"



//same as above but this will style the h2 that is the third element in the List because the index starts at 0

// let headingsArray = document.querySelectorAll("h2"); // Selects all elements with elements "h2"
headingsArray[2].className = "container"; // Sets the class of the second element in the NodeList to "container"
headingsArray[2].id = "sub_headings"; // Sets the id of the second element in the NodeList to "sub_headings"


// headingsArray[1].setAttribute("class", "container"); // Sets the class of the second element in the NodeList to "container"
// headingsArray[1].setAttribute("id", "sub_headings"); // Sets the id of the second element in the NodeList to "sub_headings"
headingsArray[2].setAttribute("class", "container") // Sets the class of the second element in the NodeList to "container"
headingsArray[2].setAttribute("id", "sub_headings") // Sets the id of the second element in the NodeList to "sub_headings"
headingsArray[2].style.color = "green"; // Changes the text color of the second element in the NodeList to orange
headingsArray[2].style.backgroundColor = "orange";
headingsArray[2].style.fontSize = "25px"; // Changes the font size of the second element in the NodeList to 25px
headingsArray[2].textContent = "MWF"; // Sets the text content of the second element in the NodeList to "WOOD"







































































