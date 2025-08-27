// let post = `
// <div class="card">
//         <h1>${name}</h1>
//         <img src="${userLink}" alt="image">
//         <button><a href="#">like ${numberOfLikes}</a></button>
//     </div>`;



 
// this code below is for writting a post example

let name = "Simba Geti";
let userLink =
  "https://i.pinimg.com/1200x/fc/91/23/fc91231211efe5ee8413fdca829be967.jpg";
let numberOfLikes = 5000;
let content = `${name} is a good girl`; 
let date = new Date()


let post = `
<div class="card" style="width: 18rem;">
  <img src="${userLink}" class="card-img-top" alt="...">
  <div class="card-body">
    <h2 class="card-title">${name}</h2>

    <h5> Date ${date} </h5>
    <p class="card-text">${content}</p>
    <a href="#" class="btn btn-primary">likes${numberOfLikes}</a>
  </div>
</div>`;


document.body.innerHTML = post;