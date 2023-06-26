// Assignment code here

function generatePassword() {
  let passwordLength = parseInt(prompt("Please enter a password length between 8 and 128. (Note: Use numbers, not letters)"));
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("It appears your password length was either less than 8 or more than 128. Please input a valid length."));
  } // While loop to determine whether or not the password length actually meets the criteria of being between 8 - 128; will infinitely loop until length is valid.

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
  } // Again, while loop to ensure that at least one identifier is chosen. Since messages are the same here, maybe some way to avoid re-using 4 lines of code?

  let identifiers = []; // Empty array; will be used later when generating the randomized password.
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
  } /* Each identifier corresponds to a number. 
  We can select a random one to determine what kind of character will be generated. Any character not chosen isn't added to the identifiers array and thus cannot be part of the generated password */

  let password = []; // Empty array to hold the characters of our password. Will be joined together into a string after characters are done being randomlmy generated.
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const specialChars = "!\"#$%'()*+,-./:;<>=?@[]{}^_`|~\\";
 
  for (let i = 0; i < passwordLength; i++) {
    const identifier = identifiers[Math.floor(Math.random() * identifiers.length)];
    if (identifier === 1) {
      password.push(alphabet[Math.floor(Math.random() * alphabet.length)].toLowerCase());
    } else if (identifier === 2) {
      password.push(alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase());
    } else if (identifier === 3) {
      password.push(Math.floor(Math.random() * 10));
    } else if (identifier === 4) {
      password.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
    };
  }; // For loop that runs for value of passwordLength that randomly selects a valid identifier and generates a corresponding character on each loop.

  password = password.join(""); // Joining together elements in password array to make a string to be displayed on the screen for the user.
  return password

  // Need to find some way to validate whether the password actually contains at least one of all of the identifiers.
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
