
// choices arrays
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharacters =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//generate password function
function generatePassword(){

  var passwordLength = parseInt(prompt("How many Characters would you like?"));

  if (passwordLength < 8 || passwordLength >  128) {
  alert("Password must be between 8 & 128 characters");
  return " ";
  }
  if (Number.isNaN(passwordLength)){
    alert("Password length must be a number.")
    return ' ';
  }
 
  var numberChoice = confirm("Click OK to confirm you want to use numbers.");

  var characterChoice =confirm("Click OK to confirm you want to use special characters.");

  var upperChoice =confirm("Click OK to confirm you want to use upper case.");

  var lowerChoice =confirm("Click OK to confirm you want to use lower case");


  if(!numberChoice && !characterChoice && !upperChoice && !lowerChoice) {
  alert("Must use at least one.")
  return " ";
  }

  else if(numberChoice && characterChoice && upperChoice && lowerChoice) {

    var combinedArray = [];

    let code = ' ';

    combinedArray = combinedArray.concat(numbers, specialCharacters, upperCase, lowerCase);

    var combinedArrayLength = combinedArray.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += combinedArray.at(Math.floor(Math.random() * combinedArrayLength));

    }

    return code;
  }

  else if(numberChoice && characterChoice && !upperChoice && lowerChoice) {

    var combinedArray = [];

    let code = ' ';

    combinedArray = combinedArray.concat(numbers, specialCharacters, lowerCase);

    var combinedArrayLength = combinedArray.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += combinedArray.at(Math.floor(Math.random() * combinedArrayLength));

    }

    return code;
  }

  else if(numberChoice && !characterChoice && upperChoice && lowerChoice) {

    var combinedArray = [];

    let code = ' ';

    combinedArray = combinedArray.concat(numbers, upperCase, lowerCase);

    var combinedArrayLength = combinedArray.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += combinedArray.at(Math.floor(Math.random() * combinedArrayLength));

    }

    return code;
  }

  else if(numberChoice && characterChoice && upperChoice && !lowerChoice) {

    var combinedArray = [];

    let code = ' ';

    combinedArray = combinedArray.concat(numbers, upperCase, specialCharacters);

    var combinedArrayLength = combinedArray.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += combinedArray.at(Math.floor(Math.random() * combinedArrayLength));

    }

    return code;
  }

  else if(!numberChoice && characterChoice && upperChoice && lowerChoice){

    var combinedArray = [];

    let code = ' ';

    var combinedArray = combinedArray.concat(specialCharacters, upperCase, lowerCase);

    var combinedArrayLength = combinedArray.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += combinedArray.at(Math.floor(Math.random() * combinedArrayLength));

    }
    
    return code;

  }

  else if(!numberChoice && !characterChoice && upperChoice && lowerChoice){

    var combinedArray = [];

    let code = ' ';

    var combinedArray = combinedArray.concat(upperCase, lowerCase);

    var combinedArrayLength = combinedArray.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += combinedArray.at(Math.floor(Math.random() * combinedArrayLength));

    }

    return code;
    
  }

  else if(!numberChoice && characterChoice && upperChoice && !lowerChoice){

    var combinedArray = [];

    let code = ' ';

    var combinedArray = combinedArray.concat(specialCharacters, upperCase);

    var combinedArrayLength = combinedArray.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += combinedArray.at(Math.floor(Math.random() * combinedArrayLength));

    }

    return code;
    
  }

  else if(!numberChoice && characterChoice && !upperChoice && lowerChoice){

    var combinedArray = [];

    let code = ' ';

    var combinedArray = combinedArray.concat(specialCharacters, lowerCase);

    var combinedArrayLength = combinedArray.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += combinedArray.at(Math.floor(Math.random() * combinedArrayLength));

    }

    return code;
    
  }

  else if(numberChoice && !characterChoice && !upperChoice && lowerChoice){

    var combinedArray = [];

    let code = ' ';

    var combinedArray = combinedArray.concat(numbers, lowerCase);

    var combinedArrayLength = combinedArray.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += combinedArray.at(Math.floor(Math.random() * combinedArrayLength));

    }

    return code;
    
  }

  else if(numberChoice && !characterChoice && upperChoice && !lowerChoice) {

    var combinedArray = [];

    let code = ' ';

    combinedArray = combinedArray.concat(numbers, lowerCase);

    var combinedArrayLength = combinedArray.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += combinedArray.at(Math.floor(Math.random() * combinedArrayLength));

    }

    return code;
  }

  else if(numberChoice && characterChoice && !upperChoice && !lowerChoice) {

    var combinedArray = [];

    let code = ' ';

    combinedArray = combinedArray.concat(numbers, specialCharacters);

    var combinedArrayLength = combinedArray.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += combinedArray.at(Math.floor(Math.random() * combinedArrayLength));

    }

    return code;
  }

  else if(numberChoice && !characterChoice && !upperChoice && !lowerChoice) {

    let code = ' ';

    var numbersLength = numbers.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += numbers.at(Math.floor(Math.random() * numbersLength));

    }

    return code;
  }

  else if(!numberChoice && characterChoice && !upperChoice && !lowerChoice) {

    let code = ' ';

    var specialCharactersLength = specialCharacters.length;

    for (var i=0; i < passwordLength; i++) {
   
     code += specialCharacters.at(Math.floor(Math.random() * specialCharactersLength));

    }

    return code;
  }

  else if(!numberChoice && !characterChoice && upperChoice && !lowerChoice) {

    let code = ' ';

    var upperCaseLength = upperCase.length;

    for (var i=0; i < passwordLength; i++) {

      code += upperCase.at(Math.floor(Math.random() * upperCaseLength));

    }

    return code;
  }

  else if (!numberChoice && !characterChoice && !upperChoice && lowerChoice) {

    let code = ' ';

    var lowerCaseLength = lowerCase.length;

    for (var i = 0; i < passwordLength; i++) {

      code += lowerCase.at(Math.floor(Math.random() * lowerCaseLength));

    }

    return code
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



