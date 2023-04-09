// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //Ask user for length
  //Minimum of 8, maximum of 128
  let passwordLength = parseInt(prompt("How long should the password be?"));
  //Validate Length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error, invalid password length.\nPlease chose a password greater than 8 and less than 128 characters");
    return "";
  }

  //Ask the user which characters to include
  var includeLowercase = confirm("Include lowercase letters in password");
  var includeUppercase = confirm("Include uppercase letters in password");
  var includeNumbers = confirm("Include numbers in password?");
  var includeSpecialCharacters = confirm("Include special characters?");

  //Validate types of characters
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("Error, invalid character types.\nPLease Include at least one character type.");
    return "";
  }

  //Generate random password
  let passwordCharacters = [];
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  //If Lower Case letters are included 
  if (includeLowercase) {
    passwordCharacters = passwordCharacters.concat(lowerCase.split(""));
  }

  //If Upper Case letters are included 
  if (includeUppercase) {
    passwordCharacters = passwordCharacters.concat(upperCase.split(""));
  }

  if (includeNumbers) {
    passwordCharacters = passwordCharacters.concat(number.split(""));
  }

  //If special characters are included
  if (includeSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
  }

  let results = "";
  //This for loops is used until the condition is no longer. "i" can't be greater than passwordLength if it is than condition would be false and won't be able to run anymore
  for (var i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordCharacters.length)
    randomCharacter = passwordCharacters[randomIndex];
    results += randomCharacter
  }

  return results;
 
  }





// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();