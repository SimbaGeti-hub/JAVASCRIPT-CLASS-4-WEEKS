//model a phone object
//We model a phone object with properties like, color, size, type
//with methods : take picture, play music, ring
// create two phone objects, sumsung and iphone
//display the properties of the phone objects
//call the different methods of the phone object




// 2 - model a user object
//We model a phone object with properties like, email, username, gender
//with methods : login, logout
// create two user objects, Bob and Alice
//display the properties of the user objects
//call the different methods of the user object


// person 1 question 2
let Bob = {
    email: "bob@gmail.com",
    username: "bob1",
    gender: "male",
    login: function(){
        return this.username + " Has logged in!";
    },
    logout: function(){
        return this.username + " Has logged out!";
    }
}
console.log(Bob.login());
console.log(Bob.login());


// person 2 question 2
let Alice = {
  email: "alice@gmail.com",
  username: "alice1",
  gender: "male",
  login: function () {
    return this.username + " Has logged in!";
  },
  logout: function () {
    return this.username + " Has logged out!";
  },
};
console.log(Alice.login());
console.log(Alice.login());

