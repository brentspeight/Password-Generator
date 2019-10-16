//create valid characters used for the password
var charAlpha = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'"
var numbers = "1234567890"
var specialCharacters = "!@#$%^&*()"

var choosenValues = ""



//create dom for display

var createPwd = document.getElementById("generateBtn")
var displayB = document.querySelector('#display')

createPwd.addEventListener("click", function(event) {
  var password = ""
  var promptCharacters = prompt(
    "Choose a number 8 to 128  to generate password"
  )
  if (promptCharacters < 8 || promptCharacters > 128) {
    alert("Please enter a valid entry")
    return
  } else {
    alert("You chose"+ '' + "" + promptCharacters)
  }

  var specialChar = confirm(
    "Would you like to add a special character to your password?"
  )

  var chosenAlpha = confirm("Would you like letters?")

  //Ask if they want to choose a numeric number for the password
  var num = confirm(
    "Would you like to add a numeric character to your password?"
  )

  // compare to see what characters to include
  if (specialChar) {
    choosenValues = choosenValues + specialCharacters
  }

  if (num) {
    choosenValues = choosenValues + numbers
  }

  if (chosenAlpha) {
    choosenValues = choosenValues + charAlpha
  }

  

  //1) create loop choosing characters that match peramiters
  for (var i = 0; i < promptCharacters; i++) {
      password = password + choosenValues.charAt(Math.floor(Math.random() * choosenValues.length));
     
      console.log(password);

  }
  
document.getElementById('display').value = password
document.getElementById('Ppass').innerHTML += password + '<br />';

})

function copyPass() { 
  /* Get the text field */
  var copyText = document.getElementById("display"); 
  
  copyText.select ();
 
  copyText.setSelectionRange(0, 99999);
  /* Copy the text inside the text field */
  document.execCommand("copy"); 
  
  /* Alert the copied text */
  alert("Copied the text " + copyText.value); 
}