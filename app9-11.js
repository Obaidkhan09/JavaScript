//USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 1 : Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
document.write("<h2><b>USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 1</b></h2>");
var cityName = prompt("Enter your City name :");

if (cityName ===  "karachi" ){
    document.write("Welcome to city of lights !")
}
















//USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 2 : Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.
document.write("<h2><b>USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 2</b></h2>");
var userName = prompt("Enter your Gender :");
if (userName === "male" ){
    document.write("Good Morning Sir !");
}else if (userName === "female"){
    document.write("Good Morning Ma’am !");
}


















//USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 3 : Write a program to take input color of road traffic signal from the user & show the message according to this table: Signal color Message (Red : Must Stop) (Yellow : Ready to move) (Green : Move now)
document.write("<h2><b>USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 3</b></h2>");
var signalColor = prompt("Enter Signal Color :");
if (signalColor === "red"){
    document.write("Must Stop !");
}
else if (signalColor === "yellow"){
    document.write("Ready to move !");
}
else if (signalColor === "green"){
    document.write("Move now !");
}















//USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 4 : Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”
document.write("<h2><b>USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 4</b></h2>");
var fuel = prompt("Enter The Remainig Fuel in car (in litres) :");
if (fuel === "0.25"  ){
    document.write("Please refill the fuel in your car !");
}
else if ((+fuel) > 0.25 ){
    document.write("Fuel is fine in the car !");
}














//USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 5 : Run this script, & check whether alert message would be displayed or not. Record the outputs. 
// Following are the scripts to run :
document.write("<h2><b>USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 5</b></h2>");

// a.
var a = 4;
if (++a === 5){
alert("a: given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83){
alert("a: given condition for variable b is true");
}

// c.
var c = 12;
if (c++ === 13){
alert("b: condition 1 is true");
}
if (c === 13){
alert("b: condition 2 is true");
}
if (++c < 14){
alert("b: condition 3 is true");
}
if(c === 14){
alert("b: condition 4 is true");
}

// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("d: The cost equals");
}

// e. 
if (true){
alert("e: True");
}
if (false){
alert("e: False");
}

// f. 
if("car" < "cat"){
    alert("f: car is smaller than cat");
}














//USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 6 : Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:
document.write("<h2><b>USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 6</b></h2>");
var marksObtained = (+prompt("Enter your Obtained Marks : ")) , totalMarks = (+prompt("Enter Total Marks :"));
var percentage = ((marksObtained / totalMarks) * 100) , grade , remarks ;

if (percentage >= 80  ){
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + marksObtained + "<br>");
    document.write("Percentage : " + percentage + "% <br>");
    document.write("Grade : " + (grade = "A-one <br>"));
    document.write("Remarks : " + (remarks = "Excellent <br>"));
}
else if (percentage >= 70  ){
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + marksObtained + "<br>");
    document.write("Percentage : " + percentage + "% <br>");
    document.write("Grade : " + (grade = "A <br>"));
    document.write("Remarks : " + (remarks = "Good <br>"));
}
else if (percentage >= 60  ){
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + marksObtained + "<br>");
    document.write("Percentage : " + percentage + "% <br>");
    document.write("Grade : " + (grade = "B <br>"));
    document.write("Remarks : " + (remarks = "You Need To Improve ! <br>"));
}
else if (percentage < 60  ){
    document.write("Total Marks : " + totalMarks + "<br>");
    document.write("Marks Obtained : " + marksObtained + "<br>");
    document.write("Percentage : " + percentage + "% <br>");
    document.write("Grade : " + (grade = "FAIL <br>"));
    document.write("Remarks : " + (remarks = "Sorry ! <br>"));
}











//USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 7 : Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
document.write("<h2><b>USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 7</b></h2>");
var  randomNumber = Math.floor(Math.random() * 10 + 1);
var userGuess = (+prompt("Enter a Number to Guess The Secret Number ( between 1 - 10 )"));

if (randomNumber === userGuess ){
    document.write("Bingo! Correct Answer");
}
else if (randomNumber ===  (userGuess + 1) ){
    document.write("Close enough to the correct answer");
}

















//USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 8 : Write a program to Check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
document.write("<h2><b>USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 8</b></h2>");
var num = (+prompt("Enter a Number to Check it is Divisible by 3 or Not : "));
var numDiv = num % 3
if (numDiv === 0 ){
    document.write(num + " is Divisible by 3");
}
else if (numDiv > 0){
    document.write(num + " is not Divisible by 3");
}





















//USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 9 :  Write a program that Checks whether the given input is an even number or an odd number.
document.write("<h2><b>USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 9</b></h2>");
var num = (+prompt("Enter a Number to Check it is Even or Odd : "));
var x = (( num / 2 ) * 2 )
if ( x === num){
    document.write(num + " is Even Number");
}
else {
    document.write(num + " is Odd Number");
}





















//USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 10 :  Write a program that takes temperature as input and shows a message based on following criteria
document.write("<h2><b>USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 10</b></h2>");
var temperature = (+prompt("Enter The Temperature : "));

// a. T > 40 then “It is too hot outside.”

if (temperature > 40){
    document.write("It is too hot outside.");
}

// b. T > 30 then “The Weather today is Normal.”

else if (temperature > 30 && temperature <= 40){
    document.write("The Weather today is Normal.");
}

// c. T > 20 then “Today’s Weather is cool.”

else if (temperature > 20 && temperature <= 30){
    document.write("Today’s Weather is cool.");
}

// d. T > 10 then “OMG! Today’s weather is so Cool.”

else if (temperature > 10 && temperature <= 20){
    document.write("OMG! Today’s weather is so Cool.");
}

















//USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 11 :  Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: Compute & show the calculated result to user.
document.write("<h2><b>USER INPUT & CONDITIONAL STATEMENT(Chapter #9-11): Task # 11</b></h2>");
var result;

// a. First number

var firstNumber = (+prompt("Enter The First Number : "));

// b. Second number

var secondNumber = (+prompt("Enter The Second Number : "));

// c. Operation (+, -, *, /, %)

var operation = prompt("Enter The Operation to perform  (+, -, *, /, %) : ");

if (operation === "+"){
    result = (firstNumber + secondNumber);
    document.write("Addition of : " + firstNumber + " + " + secondNumber + " = " + result);
}
else if (operation === "-"){
    result = (firstNumber - secondNumber);
    document.write("Subtraction of : " + firstNumber + " - " + secondNumber + " = " + result);
}
else if (operation === "*"){
    result = (firstNumber * secondNumber);
    document.write("Multiplication of : " + firstNumber + " * " + secondNumber + " = " + result);
}
else if (operation === "/"){
    result = (firstNumber / secondNumber);
    document.write("Division of : " + firstNumber + " / " + secondNumber + " = " + result);
}
else if (operation === "%"){
    result = (firstNumber % secondNumber);
    document.write("Modulus of : " + firstNumber + " % " + secondNumber + " = " + result);
}













