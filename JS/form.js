let inputEmail = document.getElementById("inputEmail");
let inputPassword = document.getElementById("inputPassword");
let error = document.getElementById("error");
let pwerror = document.getElementById("pwerror");
// let passwordStrength = document.getElementById("progress-strength");
var strength = document.getElementById("progress-strength");
const togglePassword = document.querySelector('#togglePassword');
var audio = document.getElementById("myaudio");

audio.volume = 0.1;

function validemail() {

    var Regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,3})$/;

    if (Regexp.test(inputEmail.value) && inputEmail.value != "") {
        //  alert("Invalid Email");
        inputEmail.style.border = "2px solid green";
        error.innerHTML = "";
        // inputEmail.style.backgroundColor ="green";
        return true;


    } else {
        inputEmail.style.border = "2px solid red";
        error.innerHTML = "Invalid Email";
        error.style.color = "red";
        return false;
    }
}
var pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

function pass() {
    if (pwd.test(inputPassword.value.trim()) && inputPassword.value.trim() != "") {
        inputPassword.style.border = "2px solid green";
        pwerror.innerHTML = "";
        return true;
    } else {
        inputPassword.style.border = "1px solid red ";
        pwerror.innerHTML = "Incorrect Password";
        pwerror.style.color = "red";
        return false;
    }
}



togglePassword.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = inputPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    inputPassword.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});


function validate() {

    if (validemail() && pass()) {

        return true;
    } else {
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


// //   When the user clicks on the password field, show the message box
// inputPassword.onfocus = function() {
//     document.getElementById("message").style.display = "block";
// }

// //  When the user clicks outside of the password field, hide the message box
// // inputPassword.onblur = function() {
// //         document.getElementById("message").style.display = "none";
// //     }
// // var strength = 0;




// inputPassword.onkeyup = function() {

//     var letter = document.getElementById("letter");
//     var capital = document.getElementById("capital");
//     var number = document.getElementById("number");
//     var length = document.getElementById("length");

//     var score = 0;

//     // Validate lowercase letters
//     var lowerCaseLetters = /[a-z]/g;

//     if (inputPassword.value.match(lowerCaseLetters)) {
//         letter.classList.remove("invalid");
//         letter.classList.add("valid");
//         score += 25;
//         // strength.classList.remove('bg-primary');
//         // strength.style.backgroundColor = "red";
//         // strength.style.width = "25%";
//         // strength.innerHTML = "25%";
//     } else {
//         letter.classList.remove("valid");
//         letter.classList.add("invalid");
//         // strength.style.width = "0%";

//     }
//     // Validate capital letters
//     var upperCaseLetters = /[A-Z]/g;

//     if (inputPassword.value.match(upperCaseLetters)) {
//         capital.classList.remove("invalid");
//         capital.classList.add("valid");
//         // strength.classList.remove('bg-primary');
//         // strength.style.backgroundColor = "orange";
//         // strength.style.width = "50%";
//         // strength.innerHTML = "50%";
//         score += 25;

//     } else {
//         capital.classList.remove("valid");
//         capital.classList.add("invalid");
//         // strength.style.width = "25%";
//     }

//     // Validate numbers
//     var numbers = /[0-9]/g;
//     if (inputPassword.value.match(numbers)) {
//         // strength += 1;
//         number.classList.remove("invalid");
//         number.classList.add("valid");
//         score += 25;
//     } else {
//         number.classList.remove("valid");
//         number.classList.add("invalid");
//     }

//     // Validate length
//     if (inputPassword.value.length >= 8) {
//         // strength += 1;
//         length.classList.remove("invalid");
//         length.classList.add("valid");
//         //  window.location.href = "index.html"
//         score += 25;
//     } else {
//         length.classList.remove("valid");
//         length.classList.add("invalid");

//     }

//     if (score >= 100) {

//         strength.style.width = "100%";
//         strength.classList.remove('bg-primary');
//         strength.style.backgroundColor = "green";
//         strength.innerHTML = "100%";

//     } else if (score >= 75) {
//         strength.style.width = "75%";
//         strength.classList.remove('bg-primary');
//         strength.style.backgroundColor = "orange";
//         strength.innerHTML = "75%";
//     } else if (score >= 50) {
//         strength.style.width = "50%";
//         strength.classList.remove('bg-primary');
//         strength.style.backgroundColor = "orange";
//         strength.innerHTML = "50%";
//     } else if (score >= 25) {
//         strength.style.width = "25%";
//         strength.classList.remove('bg-primary');
//         strength.style.backgroundColor = "red";
//         strength.innerHTML = "25%";
//     } else if (score == 0) {
//         strength.style.width = "0%";

//     }


// }





// //   var pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

// //    function pro(){
// //   var strength = document.getElementById("progress-strength");
// //   var strongRegex = /(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{8,})/

// //   //  var strongRegex = /^(?=.{12,})(?=.[A-Z])(?=.[a-z])(?=.[0-9])(?=.\\W).*$", "g"$/;
// //     var mediumRegex = new RegExp ("^(?=.{10,})(((?=.[A-Z])(?=.[a-z]))|((?=.[A-Z])(?=.[0-9]))|((?=.[a-z])(?=.[0-9]))).*$", "g");
// //     var enoughRegex = /((?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[^A-Za-z0-9])(?=.{2,}))|((?=.[a-z])(?=.[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/

// //     if(inputPassword.value.length == 0) {
// //       strength.style.width = "1%";
// //       strength.style.color = "white";
// //       return false;
// //   } else if (false == enoughRegex.test(inputPassword.value)) {
// //     strength.style.width = "40%";
// //     strength.innerHTML = " 40%"
// //     strength.style.color = "white";
// //       return false;
// //   } else if (strongRegex.test(inputPassword.value)) {
// //     strength.style.width = "100%";
// //     strength.innerHTML = " 100%"
// //     strength.style.color = "white";
// //       return true;
// //   } else if (mediumRegex.test(inputPassword.value)) {
// //     strength.style.width = "70%";
// //     strength.innerHTML = " 70%"
// //     strength.style.color = "white";
// //       return false;
// //   } else {
// //     strength.style.width = "0%";
// //       return false;
// //   }
// // }