//for loop example 1
// for (i  = 0; i<= 5; i++){
//     console.log(i);
// }


// for (let i  =0, i<=5; i++){
//     console.log(i)
// }

/* LOOPS THAT EXIST IN JAVASCRIPT
1 - for loop
2 - while loop
3 - do--while loop
4 - for--in loop
5 - for--of loop
6 - higher-order loop
*/


//example 2
// const products = ["chairs", "table", "cupboard", "wardrobe"]
// for (i = 0; i<products.length; i++){
//     console.log(`item ${i + 1}: ${products[i]}`)
// }

//initialize
//while (condition eg stock availability){code if condition is true ; increament or decreament}

//example 1
let stock = 20;
while (stock>0){
    console.log(`Selling item -- stock left is; ${stock}`)
    stock--;
}


//example 2 of do--while loop

let order;
let totalStock = 1000;
do {
    console.log(`checking available stock`)
}while(stock > 0);
{
    console.log(`Selling item -- stock left is; ${stock}`);
    stock--;
}


//example 3

let i = 0;
do{
    console.log(i)
    i++;
}
while (i<=5)

//example 2.1
const products1 = ["chairs", "table", "cupboard", "wardrobe"];
//for fixed repeatitions, loop through the code
for (i = 0; i < products1.length; i++) {
  console.log(`item ${i + 1}: ${products1[i]}`);
}


//example 1.1
let stock1 = 20;
while (stock1>0){
    console.log(`Selling item -- stock left is; ${stock1}`)
    stock1--;
}



//example 3.1
let x = 0;
do {
  console.log(x);
  x++;
} while (x <= 5);



const itemsSold = ["chair", "table", "cupboard"]
for (const item of itemsSold){
    console.log(`sold ${item}`)
}

//example of for--in loop
const sale = {
    customer: "Simba",
    product: "sofa",
    quantity: 5,
    price:500
}
for(const key in sale){
    console.log(`${key}:${sale[key]}`)
}