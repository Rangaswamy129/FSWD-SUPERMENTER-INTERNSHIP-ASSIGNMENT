document.getElementById("myForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let valid = true;

document.getElementById("nameError").innerHTML = "";
document.getElementById("emailError").innerHTML = "";
document.getElementById("passwordError").innerHTML = "";
document.getElementById("successMessage").innerHTML = "";


if(name === ""){
document.getElementById("nameError").innerHTML = "Name is required";
valid = false;
}

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
document.getElementById("emailError").innerHTML = "Enter valid email";
valid = false;
}

if(password.length < 6){
document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
valid = false;
}

if(valid){
document.getElementById("successMessage").innerHTML = "Form submitted successfully!";
}

});