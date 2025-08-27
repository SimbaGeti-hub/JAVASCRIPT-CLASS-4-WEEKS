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
qty.addEventListener("input", updateTotal);
price.addEventListener("input", updateTotal);

// calcBtn.addEventListener("mouseover", ()=> window.alert("You hovered over me"))

