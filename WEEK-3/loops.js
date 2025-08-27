//example 1
let order1;
let totalStock1 = 1000;
do {
  order1 = prompt(`Enter Order (Available stock is ${totalStock1}): `);
} while (order > totalStock1);
{
  alert(`Your order has been received`);
  //   alert(`Your order of ${order} has been received`);
}



//example2

let order;
let totalStock = 1000;
do {
  order = Number(prompt(`Enter Order (Available stock is ${totalStock}): `));
} while (order < totalStock);  //order < totalStock;
{
  alert(`Your order has been received`);
  //   alert(`Your order of ${order} has been received`);
}



//example 3

let payment;
let totalDue = 500000;
do {
  payment = Number(prompt(`Enter payment (Total UGX ${totalDue}): `));
} while (payment < totalDue);   //payment < totalDue;
{
  alert(`Your order has been received`);
  //   alert(`Your order of ${order} has been received`);
}




