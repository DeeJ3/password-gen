// Assignment code here
var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowers = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '1234567890';
var special = '!@#$%^&*()_+=-'

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// returning a random password
function generatePassword() {
  //keyword creation  
  var password = '';
  var characters = '';

  //Initial user prompt  
  var pwdLength = prompt("Between 8 and 128 how long would you like your password to be?");
 
  //alert to user that password must be a number between 8-128  
  while (pwdLength < 8 || pwdLength > 128) {
    alert('Your password must be a number between 8 and 128 characters only.');
    pwdLength = prompt("Between 8 and 128 how long would you like your password to be?");
  };

  //asking user what characters should be included  
  var wantsUpper = confirm('Would you like uppercase letters?');
  var wantsLower = confirm('Would you like lowercase letters?');
  var wantsNumbers = confirm('WOuld you like numbers?');
  var wantsSpecial = confirm('Would you like special characters?');

  //ensuring user selects at least one character type 
  while (!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial) {
    alert('You must choose at least one character type.');
    wantsUpper = confirm('Would you like uppercase letters?');
    wantsLower = confirm('Would you like lowercase letters?');
    wantsNumbers = confirm('WOuld you like numbers?');
    wantsSpecial = confirm('Would you like special characters?');
  };

  //conditional creation
  if (wantsUpper) {
    characters += uppers
  };
  if (wantsLower) {
    characters += lowers
  };
  if (wantsNumbers) {
    characters += numbers
  };
  if (wantsSpecial) {
    characters += special
  };

  console.log('characters', characters);

  //ensuring that the password length is correctly generated  
  for (var i = 0; i < pwdLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
};


// Add event listener to generate button
