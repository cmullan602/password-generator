

var combinedArray = [];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



function generatePassword(){

  var passwordLength = prompt("How many Characters would you like?");

  if (passwordLength < 8 || passwordLength >  128) {
  alert("Password must be between 8 & 128 characters");
  return " ";
  }

 
  var numberChoice = confirm("Click OK to confirm you want to use numbers.");

  var characterChoice =confirm("Click OK to confirm you want to use special characters.");

  var upperChoice =confirm("Click OK to confirm you want to use upper case.");

  var lowerChoice =confirm("Click OK to confirm you want to use lower case");

  
  if(!numberChoice && !characterChoice && !upperChoice && !lowerChoice) {
  alert("Must use at least one.")
  return " ";
  }

  else if(numberChoice && characterChoice && upperCase && lowerCase) {

    combinedArray = combinedArray.concat(numbers, specialCharacters, upperCase, lowerCase);

    var code = new Array();

    for ( i=0; i<passwordLength; i++) {
   
     Math.floor(Math.random() * combinedArray.Length);

      }

  
  }
  

  else if(!numberChoice && characterChoice && upperCase && lowerCase){

  }

  else if(!numberChoice && characterChoice && upperCase && lowerCase){
    
  }

  else if(!numberChoice && characterChoice && upperCase && lowerCase){
    
  }

  else if(!numberChoice && characterChoice && upperCase && lowerCase){
    
  }
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



