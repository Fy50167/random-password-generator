// Assignment code here

function generatePassword() {
  var passwordLength = parseInt(prompt("Please enter a password length between 8 and 128. (Note: Use numbers, not letters)"));
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("It appears your password length was either less than 8 or more than 128. Please input a valid length."));
  }
  function characterPrompts() {
    var includesLowercase = confirm("Do you want to include lowercase characters in your password?");
    var includesUppercase = confirm("Do you want to include uppercase characters in your password?");
    var includesNumeric = confirm("Do you want to include numeric characters in your password?");
    var includesSpecial = confirm("Do you want to include special characters (ie. @, #, $, %, etc.) in your password?");
    if ([includesLowercase, includesUppercase, includesNumeric, includesSpecial].every(element => element === false)) {
      alert("It looks like you didn't select any character types. Please choose at least one.");
      characterPrompts();
    }
  }
  characterPrompts();
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
