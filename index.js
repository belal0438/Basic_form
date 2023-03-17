
var form = document.getElementById("my-form");
var NameInput = document.getElementById("name");
var EmailInput = document.getElementById("email");
var submitbtn = document.querySelector(".btn");


form.addEventListener("submit",onsubmit);

function onsubmit(e){
    e.preventDefault();

    localStorage.setItem("Name",NameInput.value);
    localStorage.setItem("Email",EmailInput.value);
}