function currentDateTime() {
  const now = new Date();                // new Date() creates a new Date object with the current date and time.  "const now" assigns that Date object to a variable called "now".

  const year = now.getFullYear();        // now.getFullYear() gets the year from the now Date object . "const year" stores that year in a variable called year.
  const month = now.getMonth() + 1;      // Get month,  In JavaScript, months are 0–11 (January = 0, December = 11), so we add 1 to make it 1–12 like a normal calendar.
  const date = now.getDate();            // Gets day of the month according to the month you are in
  const day = now.getDay() ;            
  const hours = now.getHours();         
  const minutes = now.getMinutes();      
  const seconds = now.getSeconds();      

  // console.log("Current Date and Time Details:");
  // console.log("Year:", year);
  // console.log("Month:", month);
  // console.log("Date:", date);
  // console.log("Day of Week:", day);
  // console.log("Hours:", hours);
  // console.log("Minutes:", minutes);
  // console.log("Seconds:", seconds);
  console.log(
    `Year: ${year}, Month: ${month}, Date: ${date}, Day: ${day}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`
  );

  
}


currentDateTime();

let birthday1 = new Date("2006-05-06")
let birthYear = birthday1.getFullYear()
console.log(`My birthday is ${birthYear}` )

let birthday2 = new Date(2006, 4, 6);
console.log(`My birthday is ${birthday2.getMonth() + 1}`);

let sale = {
  customer: "Simba",
  quantity: 2,
  product:"sofa",
  pricePerUnit:400,
  dateOfSale: new Date()
}
console.log(sale.dateOfSale.toDateString())


