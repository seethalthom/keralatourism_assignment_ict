let inputEmail = document.getElementById("inputEmail");
let inputPassword1 = document.getElementById("inputPassword1");
let inputPassword2 = document.getElementById("inputPassword2");
let mobileNumber = document.getElementById("mobileNumber");
let match = document.getElementById("match");



inputEmail.onkeyup = function(){
    let regexp =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
    if(regexp.test(inputEmail.value)==false){
        // alert("Invalid email");
        inputEmail.style.border="2px solid red";
        return false;
    } else {
        inputEmail.style.border="2px solid green";
        return true
    }
}
inputPassword1.onkeyup = function(){
    let pwd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(pwd.test(inputPassword1.value)==false){
        // alert("Weak Password");
        inputPassword1.style.border="2px solid red";
        return false;  
    } 
    else{
        inputPassword1.style.border="2px solid green";
        return true
    }
}
inputPassword2.onkeyup = function(){
    let pwd=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (inputPassword1.value!=inputPassword2.value) {
        inputPassword2.style.border="2px solid red";
        
    } else {
        inputPassword2.style.border="2px solid green";
        return true
    }
}
mobileNumber.onkeyup = function(){
    let mob=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
    if (mob.test(mobileNumber.value)==false){
        mobileNumber.style.border="2px solid red";
        return false
    }
    else{
        mobileNumber.style.border="2px solid green";
        return true;
    
    }
}

