/* WHAT ARE EVENTS?
    * Is a trigger action by a user or the browser which can result into signals , notifications  , e.t c
    * Events are a way to handle asynchronous operations in JavaScript.
    * They allow you to respond to user actions, such as clicks, key presses, and form submissions.
    * Events can be triggered by the user or by the browser itself.
    * You can listen for events and execute code in response to them.
    * This makes your web applications more interactive and dynamic.
    * 
    KEY WORDS USED IN EVENTS
    * event listening : click(buttons are always listening for click events)
    * event handling
    * event delegation
    * event propagation
    * event object  */


    //example of event listening
    let button = document.getElementById("click");   //this line is selecting the button element
    button.addEventListener("click", function() {   //this line is adding a function which is theclick event listener to the button
        alert("Button clicked!");
    });

     //example of event listening using arrow function
    let button1 = document.getElementById("click");   //this line is selecting the button element
    button1.addEventListener("click", () => {   //this line is adding a function which is theclick event listener to the button
        alert("Button clicked!");
    });

//example 2 of event handling
    let button2 = document.getElementById("click");
    button2.addEventListener("click", function() {
        console.log("You have clicked the button!");
    });



 // the example below is for updating the price in real time    (its working)


     let total1 = document.getElementById("total");
     let calcBtn = document.getElementById("calcBtn");

    function updateTotal(){
        let price = Number(document.getElementById("price").value);
        let qty = Number(document.getElementById("qty").value);

        let cost = price * qty;
        total1.textContent = `Total is UGX: ${cost.toLocaleString()}`;
        
     }


    calcBtn.addEventListener("click", updateTotal);

        //  price.addEventListener("input", updateTotal);
    //  qty.addEventListener("input", updateTotal);




    //EXAMPLE 2  (its working)

// let priceInput = document.getElementById("price");
// let qtyInput = document.getElementById("qty");
// let total = document.getElementById("total");

// function updateTotal() {
//     let price = Number(priceInput.value);
//     let qty = Number(qtyInput.value);
//     let cost = price * qty;
//     total.textContent = `Total is UGX: ${cost}`;
// }

// priceInput.addEventListener("input", updateTotal);
// qtyInput.addEventListener("input", updateTotal);









































