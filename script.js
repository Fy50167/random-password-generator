// Assignment code here

function generatePassword() {
  let passwordLength = parseInt(prompt("Please enter a password length between 8 and 128. (Note: Use numbers, not letters)"));
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("It appears your password length was either less than 8 or more than 128. Please input a valid length."));
  }
  let includesLowercase = confirm("Do you want to include lowercase characters in your password?");
  let includesUppercase = confirm("Do you want to include uppercase characters in your password?");
  let includesNumeric = confirm("Do you want to include numeric characters in your password?");
  let includesSpecial = confirm("Do you want to include special characters (ie. @, #, $, %, etc.) in your password?");
  while ([includesLowercase, includesUppercase, includesNumeric, includesSpecial].every(element => element === false)) {
    alert("It looks like you didn't select any character types. Please choose at least one.");
    includesLowercase = confirm("Do you want to include lowercase characters in your password?");
    includesUppercase = confirm("Do you want to include uppercase characters in your password?");
    includesNumeric = confirm("Do you want to include numeric characters in your password?");
    includesSpecial = confirm("Do you want to include special characters (ie. @, #, $, %, etc.) in your password?");
  }
  let identifiers = [];
  if (includesLowercase) {
    identifiers.push(1);
  } 
  if (includesUppercase) {
    identifiers.push(2);
  }
  if (includesNumeric) {
    identifiers.push(3);
  }
  if (includesSpecial) {
    identifiers.push(4);
  }
  let password = [];
  let currentCharacter = 0;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "!\"#$%'()*+,-./:;<>=?@[]{}^_`|~\\";
 
  for (let i = 0; i < passwordLength; i++) {
    const identifier = identifiers[Math.floor(Math.random() * identifiers.length)];
    if (identifier === 1) {
      currentCharacter = alphabet[Math.floor(Math.random() * alphabet.length)].toLowerCase();
      password.push(currentCharacter);
    } else if (identifier === 2) {
      currentCharacter = alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();
      password.push(currentCharacter);
    } else if (identifier === 3) {
      currentCharacter = Math.floor(Math.random() * 10);
      password.push(currentCharacter);
    } else if (identifier === 4) {
      currentCharacter = specialChars[Math.floor(Math.random() * specialChars.length)];
      password.push(currentCharacter);
    };
  };
  return password
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
