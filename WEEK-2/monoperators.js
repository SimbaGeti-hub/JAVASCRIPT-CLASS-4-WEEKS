//this code will print that product is available because we assigned above that stock is 5
let stock = 5;
if (stock>0){   //this code is to say that is the stock is greater that 0
    console.log("product is available")
}else{
    console.log("out of stock")
}


let stock1 = 0;
if (stock1 > 0) {
  console.log("product is available");
} else {
  console.log("out of stock");
}

let stock2 = 5;
let price = 500000;
let payment = 50000;
if (stock2>0 && payment>=price){   //the "=>" is a logic operator its used to compare 
    console.log(`Sale is approved`)
}else{
    console.log(`out of stock`);
    console.log(`cannot process sale`);
}


let quantity = 5;
let price1 = 500000;
let payment1 = 50000;
if (quantity >5 && payment >= price) {
  console.log(`discount is approved`);
} else {
  console.log(`out of stock`);
  console.log(`cannot process discount`);
}
