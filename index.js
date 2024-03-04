/* 1. write the pseudocode for the HTML and javascript files
2. copy the text from the assignment page in order to identify the elements required for the pseudocode
3. using the JS console, create a string for the user saying: "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
4. using the JS console, create 3 variables representing 3 different parts of a lock combination
5. create a function using at least three different arithmetic operators, wherein the results will be the created variables
6. the final results must be 10 - 40 - 39
7. create some kind of message to display the results in an alert
8. ensure comments are made on various parts of the code explaining their function
9. commit the code to github repo
10. submit the github URL for a grade! */

//these declare the variables for this document //
const welcome = document.getElementById ("welcome") ;
const numOne = 5;
let comboOne = (numOne + 5);
let comboTwo = (comboOne * 4);
let comboThree = (comboTwo - 1);

//this function separates the welcome message in order to change it before the pop up appears //
function howdy () {
    welcome.innerText = ("You have received this message because you have been chosen to open an important vault. Here is the secret combination:")
}

//generates a pop up with the combo //
function unlock () {    
    alert (`${comboOne} ${comboTwo} ${comboThree}`)
}

howdy ()

//delays the pop up to give users time to read the message //
setTimeout (unlock, 3000)