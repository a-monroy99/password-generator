// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
//Ask user for length
//Minimum of 8, maximum of 128

let passwordLength = parseInt(prompt("How long should the password be?"));
if (passwordLength < 8 || passwordLength > 128) {
  alert("Error, invalid password length.\nPlease chose a password greater than 8 and less than 128 characters");
  return "";
  }

//When user selects to include lowercase
  var userLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var indexLower = Math.floor(Math.random() * userLowerCase.length);
  var criteria1 = userLowerCase[indexLower];
  
}


//Ask the user which characters to include
var includeLowercase = confirm("Include lowercase letters in password");
var includeUppercase = confirm("Include uppercase letters in password");
var includeNumbers = confirm("Include numbers in password?");
var includeSpecialCharacters = confirm("Include special characters?");


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();