//THIS EXAMPLE IS FOR MAKING THE TABLE CAPTURE INFORMATION FROM THE FORM

const form = document.getElementById("userForm")
const tableBody = document.querySelector("#userTable tbody")

form.addEventListener("submit", submitForm)

function submitForm(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value
    //create new row
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${name}</td> <td>${email}</td> <td>${age}</td>`
    //attatch to table
    tableBody.appendChild(newRow);
    form.reset();
}


//example 1
// const form = document.getElementById("userForm");
// const tableBody = document.querySelector("#userTable tbody");

// form.addEventListener("submit", submitForm)

// function submitForm(event){
//     event.preventDafault();  //by default, forms take the submit button as a refresh , so this code tell javascript not to use the button to refresh but rather do what it has been told to do.
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const age = document.getElementById("age").value;

//     //create new row , what we are doing below tells the table to create a new row for the new information that the user has submitted
//     const newRow = document.createElement("tr");
//     newRow.innerHTML = `<td>${name}</td> <td>${email}</td> <td>${age}</td>`

//     //Attarching the new row to the table
//     tableBody.appendChild(newRow);
//     form.reset();   // this tell the form to reset after the user has submitted their input
// }

// form.addEventListener("submit", submitForm());



//example 2

// const form1 = document.getElementById("userForm");
// const tableBody1 = document.querySelector("#userTable tbody");

// form.addEventListener("submit", submitform);

// function submitform(event) {
//     event.preventDefault(); // stop page refresh

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const age = document.getElementById("age").value;

//     // create a new row
//     const newRow = document.createElement("tr");
//     newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${age}</td>`;

//     // attach to the table
//     tableBody.appendChild(newRow);

//     // clear form
//     form.reset();
// }





//example 3


// const form = document.getElementById("userForm");
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const age = document.getElementById("age");
// const tableBody = document.querySelector("#userTable tbody");

// // form.addEventListener("submit", submitform());

// function submitForm(event){
//     event.preventDafault();  //by default, forms take the submit button as a refresh , so this code tell javascript not to use the button to refresh but rather do what it has been told to do.
//     const name = name.value;
//     const email = email.value;
//     const age = age.value;
//     console.log(name);
//     //create new row , what we are doing below tells the table to create a new row for the new information that the user has submitted
//     const newRow = document.createElement("tr");
//     newRow.innerHTML = `<td>${name}</td> <td>${email}</td> <td>${age}</td>`
//     //Attarching the new row to the table
//     tableBody.appendChild(newRow);
//     form.reset();   // this tell the form to reset after the user has submitted their input
// }
// form.addEventListener("sunmit", submitForm)
















































































