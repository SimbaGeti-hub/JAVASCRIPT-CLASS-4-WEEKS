//adding hover effect
const form = document.getElementById("form");
const furniture = document.getElementById("furniture");
const customer = document.getElementById("customer");
const total = document.getElementById("total");
const calcBtn = document.getElementById("calcBtn");

function updateTotal(){
    const price = Number(document.getElementById("price").value);
    const qty = Number(document.getElementById("qty").value);
    const cost = price * qty;
    total.textContent = `Total is UGX: ${cost.toLocaleString()}`;
}
function next(){
    window.alert("you hovered")
}

qty.addEventListener("input", updateTotal);
price.addEventListener("input", updateTotal);

// calcBtn.addEventListener("mouseover", ()=> window.alert("You hovered over me"));  //this code includes adding an event listener for mouseover to make an alert to show that the button has been hovered over
calcBtn.addEventListener("mouseover", next);




//hover effect example 2
const form1 = document.getElementById("form");
const furniture1 = document.getElementById("furniture");
const customer1 = document.getElementById("customer");
const total1 = document.getElementById("total");
const calcBtn1 = document.getElementById("calcBtn");
const placeOrderBtn = document.getElementById("placeOrder");

function updateTotal(){
    const price = Number(document.getElementById("price").value);
    const qty = Number(document.getElementById("qty").value);
    const cost = price * qty;
    total.textContent = `Total is UGX: ${cost.toLocaleString()}`;
}


qty.addEventListener("input", updateTotal);
price.addEventListener("input", updateTotal);

placeOrderBtn.addEventListener("mouseover", ()=> window.alert("You hovered over me"));  //this code includes adding an event listener for mouseover to make an alert to show that the button has been hovered over

// document.getElementById(orderForm).style.backgroundColor = "lightblue"; // Changes the background color of the order form to light blue
const orderForm = document.getElementById("orderForm");
orderForm.style.backgroundColor = "lightblue"; // Changes the background color of the order form to light blue
orderForm.style.border = "2px solid black"; // Adds a black border around the order form
orderForm.style.textAlign = "center"; // Centers the text within the order form























