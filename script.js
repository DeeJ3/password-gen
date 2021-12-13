// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = '';

  var pwdLength = prompt("Between 8 and 128 how long would you like your password to be?");

  while (pwdLength < 8 || pwdLength > 128) {
    alert('Your password must be a number between 8 and 128 characters only.');
    pwdLength = prompt("Between 8 and 128 how long would you like your password to be?");
  };

  var wantsUpper = confirm('Would you like uppercase letters?');
  var wantsLower = confirm('Would you like lowercase letters?');
  var wantsNumbers = confirm('WOuld you like numbers?');
  var wantsSpecial = confirm('Would you like special characters?');

  while (!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial) {
    alert('You must choose at least one character type.');
    wantsUpper = confirm('Would you like uppercase letters?');
    wantsLower = confirm('Would you like lowercase letters?');
    wantsNumbers = confirm('WOuld you like numbers?');
    wantsSpecial = confirm('Would you like special characters?');
  }

  return password;
}


// Add event listener to generate button
