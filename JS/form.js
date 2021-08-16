let inputEmail=document.getElementById("inputEmail");
let inputPassword= document.getElementById("inputPassword");

function validate(){
  if(inputEmail.value==""||inputPassword.value==""){
    alert("All fields are mandatory");
    return false;
  }
  else{
    // alert("login complete")
    return true;
  }    
}