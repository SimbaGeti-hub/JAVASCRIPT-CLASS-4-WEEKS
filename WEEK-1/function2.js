let unitPrice
let quantity
let address
let productName
let transportFee
let vatFee

let paymentMethod
let calculateSubTotal
let calculateVat
let calculateUnitPrice

let order = {
    unitPrice: 500000,
    quantity: 3,
    address: "Uganda",
    calculateSubTotal: function(){
        return this.unitPrice * this.quantity  //we added the "this " to tell the system to only use the specified properties we mentioned "quantity  etc.." inside the object
    }
}
order.unitPrice
order.quantity
order.calculateSubTotal()

let car = {
    name: "Toyota",
    model: 700,
    weight: 1000,

    start: function(){
        return 'vroom'
    },
    stop: function(){
        return 'beep'
    }
}

car.name
car.model
car.start()
console.log(car.name);  //this code will print out the name because that is the variable we called below
console.log(car.start());


let martin = {
    weight: 49,
    age: 20,
    firstName: 'Martin',
    walk: function(){
        return this.firstName + ' is walking'
    }
        
}
console.log(martin.walk())


