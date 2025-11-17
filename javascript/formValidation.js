document.getElementById("myform").addEventListener("submit", myfunc)

function myfunc(event){
  event.preventDefault();
  if (myfunc2 == true){
    console.log("You have submitted your work.");
  } else{
    myfunc2();
  }
}
function myfunc2(){
let username = document.getElementById("name");
let email = document.getElementById("email");

if( username.value == "" ) { 
alert ("You are missing your name");
username.focus();
return false;
}

if( email.value == "" ) { 
  alert ("You are missing your email");
  email.focus();
  return false;
  }

  return true;


}
function myfunc3(){
const Siamesecat = document.getElementById ("Siamese cat")
const British  = document.getElementById ("British")
const MaineCoon = document.getElementById ("Maine Coon")
const Persiancat = document.getElementById ("Persian cat")
const Ragdoll = document.getElementById ("Ragdoll")}
 
  

  console.log("sim: " + Siamesecat);