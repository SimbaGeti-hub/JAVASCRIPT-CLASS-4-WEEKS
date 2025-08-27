/* Conditional statements / control flow statements:
1 - if
2 - if else
3 - if else if else chain
4 - switch statements
5 - Ternary operator
6 - nested if statements
7 - switch statements
8 - if statements with logical operators in conditions
9 - nullish operator
*/



// // write code that allows someone to vote

let age = prompt(`Please enter your age:`)
age = Number(age);

if (age >= 18) {
    window.alert(`You are an adult, You are eligible to vote.`);
} else {
    window.alert(`You are a minor, You are not eligible to vote.`);
}


// //below is a nested if statement
let age1 = prompt(`Please enter your age:`);
age1 = Number(age1);

if (isNaN(age1) || age1 < 0) {
  window.alert(`Invalid age entered.`);
}else{
    if (age1 >= 18) {
        window.alert(`You are an adult, You are eligible to vote.`);
    } else {
        window.alert(`You are a minor, You are not eligible to vote.`);
    }
}


// //Switch statement example1
switch (expression) {
  case value1:
    //write code when expression matches value1
    break;
  case value2:
    //write code when expression matches value2
    break;
  case value3:
  //write code when expression matches value3
  default:
  //write code when expression does not match any case
}

//Switch statement example2 browser display

let paymentType1 =  prompt(`Enter payment method: (Cash, Mobile Money, Bank)`)
switch (paymentType1) {
  case "cash":
    alert(`Process cash payment at the counter`)
    break;
  case "Mobile Money":
    alert(`Verify mobile payment details before proceeding`)
    break;
  case "bank":
    alert(`Verify bank payment details before proceeding`);
  default:
    alert(`Unknown payment method please try again`)
}   


//if its furniturw display in ware house

let product = prompt(`Enter product type: (Wood, Furniture)`);
switch (product) {
  case "Wood":
    alert(`Please store in Warehouse`);
    break;
  case "Furniture":
    alert(`Please store in showroom`);
    break;
  default:
    alert(`Please enter valid product type`);
}   

//code alerting for restocking products

let number = prompt(`Enter number`);
switch (true) {
  case number > 0:
    alert(`Number is positive`);
    break;
  case number == 0:
    alert(`Number is zero`);
    break;
  case number < 0:
    alert(`Number is negative`);
    break;
  default:
    alert(`Please enter valid number`);
}   


//code alerting for restocking products example 2.
let stockCount = prompt(`Enter number of stock`);
switch (true) {
  case stockCount > 10:
    alert(`This product is in plenty`);
    break;
  case stockCount > 0 && stockCount <= 10:
    alert(`This product is almost out of stock, consider restocking soon`);
    break;
  case stockCount === 0:
    alert(`Out of stock! Restock immediately.`);
    break;
  default:
    alert(`Invalid stock value.`);
}   

