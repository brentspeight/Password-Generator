//create valid characters used for the password
let charAlpha = ["qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'", '1234567890', '!@#$%^&*()'];

//create dom for display
var displayB = document.querySelector("#display");

let password =""

//Enter prompts asking to choose characters
    var promptCharacters = prompt("Choose between 8 to 128 characters to generate password");

//If user does not choose characters between 8 to 128 cancel the prompt
if((promptCharacters <8) || (promptCharacters >128)){
    alert("Please enter a valid entry");
    }else{
    alert("You chose" +""+ promptCharacters);

    }
//Ask if they want to choose a special character for the password
var booleanSpec = confirm("Would you like to add a special character to your password?");
if (booleanSpec) {
    charAlpha[Math.floor(Math.random()*charAlpha[2])] = password;
}
//Ask if they want to choose a numeric number for the password
var booleanNum= confirm("Would you like to add a numeric character to your password?");
if (booleanNum){
    charAlpha[Math.floor(Math.random()*charAlpha[1])] = password;
}
//validate user input

//verify at least one character in the input matches critera and create a loop to choose characters
function generateRandomPassword(input){
    for (var i = 0; i < charAlpha.length; i++){
    charAlpha.charAt(Math.floor(Math.random()* Math.floor(charAlpha.length - 1)))};

}
//create a function that will generate the random characters chosen by user
function generateButton() {
    var btn = document.createElement("generatebtn");
    btn.innerHTML = "display";
    document.body.appendChild(btn);
  }
//create previous password placement
    document.getElementById("Ppass").innerHTML+= password;

//copy to clipboard
function copyClip() {
    var copyText = document.getElementById("copybtn");
    copyText.select();
    document.execCommand("copy");
    }