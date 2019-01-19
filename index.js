 function generatePassword(length) {
      console.log("length is " + length)
      let nums='0123456789';
      let lowers='abcdefghijklmnopqrstuvwxyz';
      let uppers='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let specials='!#$%&()*+,-./:;<=>?@[\]^_{|}~';
      let allChars= nums + lowers + uppers + specials;
     for (;;) {
      let shuffled = allChars.split('').sort(function(){return 0.5-Math.random()}).join('');
      console.log(shuffled);
        let password=shuffled.slice(0,length); //can't add two different kinds of objects together
        console.log("password is" + password);
       if (
         /[A-Z]/.test(password) &&
         /[a-z]/.test(password) &&
         /[0-9]/.test(password) &&
         /['!#$%&()*+,-./:;<=>?@[\]^_{|}~']/.test(password)
         ) {console.log(password);
           return password
          }
        else {continue}
      break;
     }
 } 

document.addEventListener("DOMContentLoaded", function (e) {
  let formEvent=document.getElementById("form")
  formEvent.addEventListener("submit", function(e) {
    e.preventDefault()
    let crab=document.getElementById('testy').value
    let testpw=generatePassword(crab);
    console.log(testpw);
    end.innerHTML=generatePassword(crab);
    }
    )})

    
     // -1 means that the character does not exist in the string because it's not found in the index, index starts at 0
     //take a piece of string and test for required parameters
     //only need to prove that there is one of each type of specified character in the password
     //semi-colons not necessary after a function block