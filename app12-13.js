//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 1 :  Write a program that takes a Character (number or string) in a variable & Checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
document.write("<h2>IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 1 : </h2>");
var character = prompt("Enter a Character To Check is a Number , Uppercase Letter or lowercase Letter : ")
var char = character.charCodeAt();

if (char >= 48 && char <= 57){
    document.write("It's a Number !");
}
else if (char >= 65 && char <= 90){
    document.write("It's an Uppercase Letter !");
}
else if (char >= 97 && char <= 122){
    document.write("It's a Lowercase Letter !");
}














//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 2 :  Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
document.write("<h2>IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 2 : </h2>");
var integer1 = (+prompt("Enter integer 1 : "));
var integer2 = (+prompt("Enter integer 2 : "));

if (integer1 > integer2){
    document.write( integer1 + " is Greater than  " + integer2 + "<br>");
}
else if (integer2 > integer1){
    document.write(integer2 + " is Greater than " + integer1 + "<br>");
}
else if (integer1 === integer2){
    document.write(integer1 + " is Equal to  " + integer2 + "<br>");
}














//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 3 :  Write a program that takes input a number from user & state whether the number is positive, negative or zero.
document.write("<h2>IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 3 : </h2>");

var num = (+prompt("Enter a Number To Check Whether The Number is Positive , Negative or Zero : "));
if (num > 0){
    document.write("Positive Number Entered");
}
else if (num === 0){
    document.write("Zero Entered");
}
else if (num < 0){
    document.write("Negative Number Entered");
}











//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 4 :  Write a program that takes a Character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
document.write("<h2>IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 4 : </h2>");

var char = prompt("Enter a Character to Check Whether it is Vowel or not : ");

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
    document.write("True , It's a vowel !");
}
else{
    document.write("False , It's not a vowel !");
}














//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 5 :  Write a program that a. Store correct password in a JS variable. b. Asks user to enter his/her password c. Validate the two passwords: i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.
document.write("<h2>IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 5 : </h2>");
var password = "SaylaniWebMob";
var inputPassword = prompt("Enter Your Password : ");

if (inputPassword.length <= 0){
    document.write("Please enter your password");
}
else if (inputPassword === password){
    document.write("Correct! The password you entered matches the original password");
}
else if (inputPassword != password){
    document.write("Incorrect password");
}












//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 6 :  
document.write("<h2>IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 6 : </h2>");



var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    document.write(greeting);
}
else {
    greeting = "Good evening";
    document.write(greeting);
}














//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 7 :  
document.write("<h2>IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS (Chapter # 12-13): Task # 7 : </h2>");

var inputTime = (+prompt("Enter Time in 24 hours Format ( example : 1900 ) : "));

if (inputTime >= 0000 && inputTime < 1200){
    document.write("Good Morning !");
}
else if (inputTime >= 1200 && inputTime < 1700){
    document.write("Good Afternoon !");
}
else if (inputTime >= 1700 && inputTime < 2100){
    document.write("Good Evening !");
}
else if (inputTime >= 2100 && inputTime <= 2359){
    document.write("Good Night !");
}

