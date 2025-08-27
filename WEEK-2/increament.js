//increament and decreament

let x = 5; x++   //The code below will make the value of x increase by 1.
let y = 4; y--   //The code below will make the value of y decrease by 1.

console.log(x)
console.log(y)

let stockQuantity = 20; stockQuantity--;
console.log(`stock left is: ${stockQuantity}`)

let stockQty = 20;stockQty -= 2;              //this code will reduce the number be 2 if you want it to reduce by any number you want then you do the same put change the number eg,... stockQty-=3
console.log(`stock left is: ${stockQty}`);

let productSold = 0; productSold++;
console.log(`Total products sold today: ${productSold}`)


let productSold2 = 0; productSold++;
let message = `Total products sold today: ${productSold2}`;
console.log(message);


function recordProductSale(){
    productSold++;
    let message = `Total products sold today: ${productSold}`;
    console.log(message);
}
recordProductSale();

