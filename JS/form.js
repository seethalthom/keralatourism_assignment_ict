let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let error = document.getElementById("error");
let passwordStrength = document.getElementById("progress-strength");


function validemail(){

  var regexp =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;
   
 if(regexp.test(inputEmail.value)&& inputEmail.value!=""){
  //  alert("Invalid Email");
   inputEmail.style.border="2px solid green";
   error.innerHTML = "";
  // inputEmail.style.backgroundColor ="green";
  
   
 }
 else{
  inputEmail.style.border="2px solid red";
  error.innerHTML = "Invalid Email";
  error.style.color = "red";
   return false; 
 }
}

// function validpwd(){
 
//   var pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//   if(pwd.test(inputPassword.value)==true){
//     //  alert("Invalid Email");
//     window.location.href ="index.html";
     
//      return true;
//    }
//    else{
    
//      return false; 
//    }
//   }


//   When the user clicks on the password field, show the message box
   inputPassword.onfocus = function () {
   document.getElementById("message").style.display = "block";
   }

//  When the user clicks outside of the password field, hide the message box
   inputPassword.onblur = function () {
    document.getElementById("message").style.display = "none";
  }
  var strength = 0;
inputPassword.onkeyup = function (){
  
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  
  
  
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;

    if(inputPassword.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
      passwordStrength.style= 'width: 25%';
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
      // passwordStrength.style= 'width: 0%';
    } 
 // Validate capital letters
 var upperCaseLetters = /[A-Z]/g;

 if(inputPassword.value.match(upperCaseLetters)) {  
   capital.classList.remove("invalid");
   capital.classList.add("valid");
  //  passwordStrength.style= 'width: 50%';
 } else {
   capital.classList.remove("valid");
   capital.classList.add("invalid");
  //  passwordStrength.style= 'width: 25%';
   
 }

 // Validate numbers
 var numbers = /[0-9]/g;
 if(inputPassword.value.match(numbers)) {  
  strength += 1;
   number.classList.remove("invalid");
   number.classList.add("valid");
  //  passwordStrength.style= 'width: 75%';
 } else {
   number.classList.remove("valid");
   number.classList.add("invalid");
  //  passwordStrength.style= 'width: 50%';
   
 }
 
 // Validate length
 if(inputPassword.value.length >= 8) {
  strength += 1;
   length.classList.remove("invalid");
   length.classList.add("valid");
   window.location.href = "index.html"
  //  passwordStrength.style= 'width: 100%';
 } else {
   length.classList.remove("valid");
   length.classList.add("invalid");
  //  passwordStrength.style= 'width: 75%';
   
 }
}

function enter(){
  
  if(pwd.match(inputPassword.value) && regexp.match(inputEmail.value)){

    return true
  } else{
    alert ("Invalid Entry");
    return false
  }
}
