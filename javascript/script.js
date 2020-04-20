let username=document.getElementById("username");
let password=document.getElementById("password");
let confirmpass=document.getElementById("confirm");
const Name="arthnangia";
const pass="nangiaarth";
function validatorForm() {
    if(username.value === "") {
        document.getElementById("error").innerHTML="*Username Require";
        return false;
    }
    else if(password.value === "") {
        document.getElementById("error").innerHTML="*Password Require";
        return false;
    }
    else if(confirmpass.value === "") {
        document.getElementById("error").innerHTML="*Please Confirm your Password";
        return false;
    }
    else if(password.value.length<8){
        document.getElementById("error").innerHTML="";
        alert("Password must be 8 character long");
        return false ;
    }
    else if(password.value!=confirmpass.value){
        alert("Password do not matched!!!  \nPlease try again");
        return false ;
    }
    else if(username.value === Name && password.value === pass){
        alert("Successfully logged In");
        return true;

    }
    else {
        alert("No user found. \nIncorrect username and password.");
    return false;
    }
}
