// ways of declaring variables


// 1- Declaration function

/*

function add(a,b){
    return a + b;
}

*/





// 2 - Expression function

/*

const subtract=function(a,b){
    return a - b
}

*/





// 3 - Anonymous function

/*

setTimeout(function()){
    console.log("This is an anoymous function");
},1000;

*/




// 4 - Arrow function

//   const multiply = (a,b) => a * b;

// function functionName(){
//     //write any code here
//     //return
//     //console.log
// }

// functionName()



// function functionName(parameter) {
//   //write any code here
//   //return
//   //console.log
// }

// functionName(argument);

function addMoreNumbers(){
    let x = 17;
    let y = 29;
    let sum = x + y;
    console.log(sum)
}
addMoreNumbers()  //this code is for calling the function above to give output


function addTwoNumbers() {
  let x = 17;
  let y = 29;
  let sum = x + y;
  // console.log(sum)
  return sum;
}
console.log(addTwoNumbers())



function addTwoNumbers(x, y) {   //this method is more powerfull because the number is not permanent you can put in as many and diffrent numbers as you want
 
  let sum = x + y;
  // console.log(sum)
  return sum;
}
console.log(addTwoNumbers(48, 15));
console.log(addTwoNumbers(8, 5));
console.log(addTwoNumbers(4, 1));
console.log(addTwoNumbers(58, 85));


//write a function to square any number

function squareAnyNumber(x){   //this whole command will give you the square root of the any number you will put when calling the function down.
    return x * x
}
console.log(squareAnyNumber(20))


// let squareAnyNumber = function(x){
//     return x * x
// }
// console.log(squareAnyNumber(5));



// the code below is for calculating the total cost 

function totalCost(quantity, unitPrice, transportFee) {
//   const transportFee = 5000;
//   let subTotalCost = quantity * unitPrice;
  let totalCost = quantity * unitPrice + transportFee
//   let total = subTotalCost + transportFee;
  return totalCost;
}
console.log(totalCost(2, 350000, 5000));



function calculateTotalCost(quantity, unitPrice){
    const transportFee = 5000
    let subTotalCost = quantity * unitPrice; 
    // let totalCost = quantity * unitPrice 
    let total = subTotalCost + transportFee
    return total
}
console.log(calculateTotalCost(2,350000))


// adding VAT to the total cost
let totalBeforeVat = calculateTotalCost(2, 350000);
function calculatePriceAfterTax(total){
    const vat = 0.18
    let vatFee = total * vat
    let priceAfterTax = total - vatFee
    return {priceAfterTax,vatFee};
}
console.log(calculatePriceAfterTax(totalBeforeVat));

// the code bellow is for print full name 
function printFullName(){
    let firstName = "Simba";
    let lastName = "Geti";
    let space = " "
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())

// bellow is an array of functions, if you are putting a list in an array, you separate each with a comma
let actions = [
    function greet(){
    console.log("Hello")
},

function calculate() {
  console.log(1 + 1);
},

function thankYou() {
  console.log("Thank you for using our system");
}
]
actions[0]()  //this code will call the whole array to display a function that is on the the number 0 while counting them and put thebrackets at the end to make the code display exactly what you want
actions[1]()
actions[2]()
console.log(actions)





