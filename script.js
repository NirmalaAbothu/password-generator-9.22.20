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
     // assigning empty string to  password and charSet variables
     var password = "";
     var charSet = "";
     // declare passLength variable
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

     // asking user to enter character type
     var charType = prompt(
          "Do you want add lowercase letters in password,then please enter lowercase"
     );

     //validating whether user selected lowercase or not
     if (charType != null)
          //Calling FindUserInputType method
          charSet = FindUserInputType(charType, charSet);

     // asking user to enter character type
     charType = prompt(
          "Do you want add uppercase letters in password,then please enter uppercase"
     );

     //validating whether user selected uppercase or not
     if (charType != null)
          //Calling FindUserInputType method
          charSet = FindUserInputType(charType, charSet);

     // asking user to enter character type
     charType = prompt(
          "Do you want add numeric values in password,then please enter numeric"
     );

     //validating whether user selected numeric or not
     if (charType != null)
          //Calling FindUserInputType method
          charSet = FindUserInputType(charType, charSet);

     // asking user to enter character type
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

     //validating the charSet before generate the password
     if (charSet != "") {
          for (var i = 0; i < passLength; i++) {
               password =
                    password +
                    charSet.charAt(
                         Math.floor(Math.random() * (charSet.length - 1))
                    );
          }
     } else
          alert(
               " Sorry, we can't generate password, as you didn't select any character type to generate password,please try again"
          );

     console.log(password);
     return password;
}

//function to find user input type
function FindUserInputType(charType, charSet) {
     //initialize lowerCase Chars
     var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";

     //initialize upperCase Chars
     var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

     //initialize numeric values
     var numberSet = "0123456789";

     //initialize special characters
     var specialChars = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

     //validating whether user selected lowercase chars
     if (charType.toLowerCase() === "lowercase")
          //Adding lowercase characters to charSet
          charSet = charSet + lowerCaseChars;
     //validating whether user selected uppercase chars
     else if (charType.toLowerCase() === "uppercase")
          //Adding uppercase characters to charSet
          charSet = charSet + upperCaseChars;
     //validating whether user selected numeric values
     else if (charType.toLowerCase() === "numeric")
          //Adding numeric values to charSet
          charSet = charSet + numberSet;
     //validating whether user selected special characters
     else if (charType.toLowerCase() === "special")
          //Adding special characters to charSet
          charSet = charSet + specialChars;

     console.log(charSet);
     //return charSet
     return charSet;
}
