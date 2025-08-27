/*
Data types
The data types below are called primitive data values. (They cannot be changed directly)
Primitive data types are like small pockets in programing because they can only keep one data

1- string/text
2- Numbers (integers, decimals, big-integers)
3- Booleans (true or false)
4- undefined data type
5- Null (when something is equals to zero or no value.. eg    "let x = null")
6- Symbol (used for uniqueness)
7- Big Integers

*/

let productName = "timber"
console.log(typeof(productName))  // this code hepls tell you the type of data type you are using              
let productCost = 3500
let transportIsNeeded = true
let tableColor
let discount = null
console.log(productCost * 2)

/*
None primitive data types  (they can be changed directly without reassigning the value)
Non Primitive data types are like big in programing because they can keep more that one data
Non Primitive data types are also reffered to as Data structures

1- Array  (it is a list of items,  eg  numbers, sting. and they should always be in quotation marks and separated by a comma)
       (All arrays are in a form of urdered list and the numbering begins from 0)
      eg,......   let productList =["sofa","table","cupboard"]  ------string
                  let productlist =[2,1,3,5]  --------number
2- Object  (In javascript everything is an object)    
       eg,....
       ProductDescription{
       name:"Sofa"
       price:400
       color:blue
       }  
3- Date
4- Function  

*/
let ProductName = "Dining Table"
let quantity = 2
let price = 350
let totalCost = quantity * price

console.log(totalCost)


let diningTableObject= {
ProductName: "Dining Table",
quantity: 2,
price: 350,
totalCost: quantity * price
}

console.log(totalCost);

let paymentType = "cash"
const VAT = 0.05 // const means ,that values cannot be changed
const PI = 3.14   





