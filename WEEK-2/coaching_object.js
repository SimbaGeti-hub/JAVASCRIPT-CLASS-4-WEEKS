//no.1 Create a function to create a user object
//no.2 Create three users using the function
//no.3 Logout the properties of each user object
//no.4 Call the methods of each user object

//no.1 Create a function to create a user object
//example 1


function userObject(name, age, email) {
  return {
    name: name,
    age: age,
    email: email,
    greet: function () {
      console.log(`Hello, my name is ${this.name}.`);
    },
    isAdult: function () {
      console.log(this.age >= 18 ? "I am an adult." : "I am not an adult.");
    },
  };
}
//no.1 Create a function to create a user object
//example 2

function userObject(name, age, email) {
  return {
    name: name,
    age: age,
    email: email,
    greet: function () {
      console.log(`Hello, my name is ${this.name}.`);
    },
    isAdult: function () {
      if (this.age >= 18) {
        console.log("I am an adult.");
      } else {
        console.log("I am not an adult.");
      }
    },
  };
}




//no.2 Create three users using the function

const user1 = userObject("blessing", 56, "blessing@gmail.com");
const user2 = userObject("jennifer", 45, "jennifer@gmail.com");
const user3 = userObject("joyce", 12, "joyce@gmail.com");


//no.3 Logout the properties of each user object

console.log(user1);
console.log(user2);
console.log(user3);



//no.4 Call the methods of each user object

user1.greet();
user1.isAdult();

user2.greet();
user2.isAdult();

user3.greet();
user3.isAdult();



// find out the differences between function declarations and function expressions
//what are the limitations of using functions expressions over function declarations
//advantages of using function expressions