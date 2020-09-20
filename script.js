///////////////////////////////////////////////////////////////////////
// PASSWORD GENERATOR
//
// * For this assignment, you will not be changing the HTML and CSS at all.
//
// * You will need a generatePassword function is called when the user
//   clicks the Generate Password button.
//
// * You can create other functions that are called from within
//   generatePassword
//
// * Gather user input with prompt's and confirm's

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");

     passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////

//function to generate random password
function generatePassword() {
     // assigned null value to  password and charSet
     var password = "";
     var charSet = "";
     var passLength;

     //asking user to enter password length
     passLength = prompt("please enter password length between 8 and 128");

     //validating password length
     if (
          isNaN(passLength) ||
          passLength < 8 ||
          passLength > 128 ||
          passLength == 0
     ) {
          while (true) {
               if (!isNaN(passLength))
                    if (passLength >= 8 && passLength <= 128) break;
               passLength = prompt(
                    "You entered an invalid value. Please choose password length between 8 and 128"
               );
          }
     }

     // asking user for character type
     var charType = prompt(
          "Do you want add lowercase letters in password,then please enter lowercase"
     );

     //validating whether user selected lowercase or not
     if (charType != null)
          //Calling FindUserInputType method
          charSet = FindUserInputType(charType, charSet);

     // asking user for character type
     charType = prompt(
          "Do you want add uppercase letters in password,then please enter uppercase"
     );

     if (charType != null)
          //Calling FindUserInputType method
          charSet = FindUserInputType(charType, charSet);

     // asking user for character type
     charType = prompt(
          "Do you want add numeric values in password,then please enter numeric"
     );

     //validating whether user selected numeric or not
     if (charType != null)
          //Calling FindUserInputType method
          charSet = FindUserInputType(charType, charSet);

     // asking user for character type
     charType = prompt(
          "Do you want add special chars in password,then please enter special"
     );
     //validating whether user selected special or not
     if (charType != null)
          //Calling FindUserInputType method
          charSet = FindUserInputType(charType, charSet);

     //validating  whether user selected
     //at least one character type or not
     if (charSet == "") {
          //prompting user to select at least one charType
          charType = prompt(
               "Select at least one charType,lowecase or uppercase or special or numeric"
          );

          //validating whether user selected charType or not
          if (charType != null)
               //Calling FindUserInputType method
               charSet = FindUserInputType(charType, charSet);
     }

     for (var i = 0; i < passLength; i++) {
          password =
               password +
               charSet.charAt(Math.floor(Math.random() * (charSet.length - 1)));
     }

     console.log(password);
     return password;
}

//function to find user input type

function FindUserInputType(charType, charSet) {
     var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
     var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var numberSet = "0123456789";
     var specialChars = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

     if (charType.toLowerCase() === "lowercase")
          charSet = charSet + lowerCaseChars;
     else if (charType.toLowerCase() === "uppercase")
          charSet = charSet + upperCaseChars;
     else if (charType.toLowerCase() === "numeric")
          charSet = charSet + numberSet;
     else if (charType.toLowerCase() === "special")
          charSet = charSet + specialChars;
     console.log(charSet);
     return charSet;
}
