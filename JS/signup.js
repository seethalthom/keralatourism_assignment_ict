let inputEmail = document.getElementById("inputEmail");
let inputPassword1 = document.getElementById("inputPassword1");
let inputPassword2 = document.getElementById("inputPassword2");
let mobileNumber = document.getElementById("mobileNumber");
let match = document.getElementById("match");

function validate(){
   
    let regexp =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
   

    let pwd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
   
    let mob=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;


if(regexp.test(inputEmail.value)==false){
    alert("Invalid email");
    return false;
}

else if(pwd.test(inputPassword1.value)==false){
    alert("Weak Password");
    return false;
 
 }

else if(inputPassword1.value!=inputPassword2.value){
   alert("Password doesn't match");
   return false;

}
else if (mob.test(mobileNumber.value)==false){
    alert("Invalid Mobile Number");
    return false
}
else{
    return true;

}
}

