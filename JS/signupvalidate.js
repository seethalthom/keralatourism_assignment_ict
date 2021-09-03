let inputEmail = document.getElementById("inputEmail");
let inputPassword1 = document.getElementById("inputPassword1");
let inputPassword2 = document.getElementById("inputPassword2");
let mobileNumber = document.getElementById("mobileNumber");
let match = document.getElementById("match");
var strength = document.getElementById("progress-strength");
var firstName = document.getElementById("firstName");

function firstname() {
    if (firstName.value != "") {
        firstName.style.border = "2px solid green";
        return true;
    } else {
        firstName.style.border = "2px solid red";
        return false;
    }
}


function mail() {
    let regexp = /^[^\W_](?:[\w.]*[^\W_])?@(?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.|(?:[\w-]+\.)+)(?:[a-zA-Z]{2,3}|[0-9]{1,3})\]?$/;
    if (regexp.test(inputEmail.value) == true) {
        // alert("Invalid email");
        inputEmail.style.border = "2px solid green";
        return true;
    } else {
        inputEmail.style.border = "2px solid red";
        return false;
    }
}

function pass1() {
    let pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (pwd.test(inputPassword1.value.trim()) == false && inputPassword1.value.trim() == "") {
        // alert("Weak Password");
        inputPassword1.style.border = "2px solid";
        return false;
    } else {
        inputPassword1.style.border = "2px solid green";
        return true
    }
}
togglePassword1.addEventListener('click', function(e) {
    // toggle the type attribute
    const type = inputPassword1.getAttribute('type') === 'password' ? 'text' : 'password';
    inputPassword1.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});
//   When the user clicks on the password field, show the message box
inputPassword1.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

//  When the user clicks outside of the password field, hide the message box
// inputPassword1.onblur = function() {
//     document.getElementById("message").style.display = "none";
// }

inputPassword1.onkeyup = function() {

    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");

    var score = 0;

    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;

    if (inputPassword1.value.trim().match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
        score += 25;
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;

    if (inputPassword1.value.trim().match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
        score += 25;
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (inputPassword1.value.trim().match(numbers)) {

        number.classList.remove("invalid");
        number.classList.add("valid");
        score += 25;
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (inputPassword1.value.trim().length >= 8) {

        length.classList.remove("invalid");
        length.classList.add("valid");
        score += 25;
        //  window.location.href = "index.html"
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");

    }
    if (score >= 100) {

        strength.style.width = "100%";
        strength.classList.remove('bg-primary');
        strength.style.backgroundColor = "green";
        strength.innerHTML = "100%";

    } else if (score >= 75) {
        strength.style.width = "75%";
        strength.classList.remove('bg-primary');
        strength.style.backgroundColor = "orange";
        strength.innerHTML = "75%";
    } else if (score >= 50) {
        strength.style.width = "50%";
        strength.classList.remove('bg-primary');
        strength.style.backgroundColor = "orange";
        strength.innerHTML = "50%";
    } else if (score >= 25) {
        strength.style.width = "25%";
        strength.classList.remove('bg-primary');
        strength.style.backgroundColor = "red";
        strength.innerHTML = "25%";
    } else if (score == 0) {
        strength.style.width = "0%";

    }

}

function pass2() {
    let pwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (inputPassword1.value.trim() == inputPassword2.value.trim()) {
        inputPassword2.style.border = "2px solid green";
        return true;

    } else {
        inputPassword2.style.border = "2px solid red";
        return false;
    }
}

function mob() {
    let mob = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
    if (mob.test(mobileNumber.value) == false) {
        mobileNumber.style.border = "2px solid red";
        return false
    } else {
        mobileNumber.style.border = "2px solid green";
        return true;

    }
}

function validate() {

    if (firstname() && mail() && pass1() && pass2() && mob()) {
        return true;
    } else {
        return false;
    }

}