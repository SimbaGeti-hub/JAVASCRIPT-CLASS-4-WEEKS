//Switch statement example2
let paymentType = "cash"; // assign any valid payment type, e.g., "mobileMoney", "bank" and then run in the terminal to see the output
switch (paymentType) {
  case "cash":
    console.log(`Process cash payment at the counter`);
    break;
  case "mobileMoney":
    console.log(`Verify mobile payment details before proceeding`);
    break;
  case "bank":
    console.log(`Verify bank payment details before proceeding`);
    break;
  default:
    console.log(`Unknown payment method please try again`);
}


let stock = 5;

switch (true) {
  case stock > 10:
    console.log("Stock is high. No need to restock now.");
    break;
  case stock > 0 && stock <= 10:
    console.log("Stock is low. Consider restocking soon.");
    break;
  case stock === 0:
    console.log("Out of stock! Restock immediately.");
    break;
  default:
    console.log("Invalid stock value.");
}

//another example of conditional statemwnts
// condition  
// ?valueIfTrue
// :valueIfFalse


let stock2 = 5
let message = stock2>0
?"In stock"
:"Out of stock";
console.log(message)


