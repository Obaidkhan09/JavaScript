// MATH EXPRESSIONS(Chapter #6-9): Task # 1 :  Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
document.write("<h2>MATH EXPRESSIONS(Chapter #6-9): Task # 1</h2>");

var a = 10;
document.write("result  : <br>");
document.write("The value of a is : " + a + "<br>");
document.write(" <br><br>");

document.write("The value of ++a is : " + ++a + "<br>");
document.write("Now the value of a is : " + a + "<br><br>");

document.write("The value of a++ is : " + a++ + "<br>");
document.write("Now the value of a is : " + a + "<br><br>");

document.write("The value of --a is : " + --a + "<br>");
document.write("Now the value of a is : " + a + "<br><br>");

document.write("The value of a-- is : " + a-- + "<br>");
document.write("Now the value of a is : " + a + "<br><br>");













//MATH EXPRESSIONS(Chapter #6-9): Task # 2 :  What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--; Explain the output at each  stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;
document.write("<h2>MATH EXPRESSIONS(Chapter #6-9): Task # 2</h2>");
var a = 2, b = 1 ,  result ;

document.write("The value of a is : " + a + "<br>");
document.write("The value of b is : " + b + "<br>");
document.write(" <br><br>");

document.write("The expression is : --a <br>");
document.write("Result is : " + (result = (--a)) + "<br>");
document.write("The value of a is : " + a + "<br>");
document.write("The value of b is : " + b + "<br><br>");
 
document.write("The expression is : --a - --b <br>");
document.write("Result is : " + (result = (--a - --b)) + "<br>");
document.write("The value of a is : " + a + "<br>");
document.write("The value of b is : " + b + "<br><br>");

document.write("The expression is : --a - --b + ++b <br>");
document.write("Result is : " + (result = (--a - --b + ++b)) + "<br>");
document.write("The value of a is : " + a + "<br>");
document.write("The value of b is : " + b + "<br><br>");

document.write("The expression is : --a - --b + ++b + b-- <br>");
document.write("Result is : " + (result = (--a - --b + ++b + b--)) + "<br>");
document.write("The value of a is : " + a + "<br>");
document.write("The value of b is : " + b + "<br><br>");














//MATH EXPRESSIONS(Chapter #6-9): Task # 3 :  Write a program that takes input a name from user & greet the user
document.write("<h2>MATH EXPRESSIONS(Chapter #6-9): Task # 3</h2>");
var Name = prompt("Enter your full name : ", "Obaid ur Rahman");
document.write("Hi " + Name);













//MATH EXPRESSIONS(Chapter #6-9): Task # 5 :  Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
document.write("<h2>MATH EXPRESSIONS(Chapter #6-9): Task # 5</h2>");
var num ;
num = prompt("Enter a number to print it's Multiplication Table :" , "5")
document.write("Table of " + num + "<br> <br>");

document.write( num + " X 1 = " + num*1 + "<br>");
document.write( num + " X 2 = " + num*2 + "<br>");
document.write( num + " X 3 = " + num*3 + "<br>");
document.write( num + " X 4 = " + num*4 + "<br>");
document.write( num + " X 5 = " + num*5 + "<br>");
document.write( num + " X 6 = " + num*6 + "<br>");
document.write( num + " X 7 = " + num*7 + "<br>");
document.write( num + " X 8 = " + num*8 + "<br>");
document.write( num + " X 9 = " + num*9 + "<br>");
document.write( num + " X 10 = " + num*10 + "<br>");














//MATH EXPRESSIONS(Chapter #6-9): Task # 6 : Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each  subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. ALERTS | JAVASCRIPT Page 3 of 3 d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
document.write("<h2>MATH EXPRESSIONS(Chapter #6-9): Task # 6</h2>");
var subject1 = prompt("Enter Subject 1 :") , subject2 = prompt("Enter Subject 2 :") , subject3 = prompt("Enter Subject 3 :") ;
var totalMarksOfSubject = 100 , sub1MarksObtain = prompt("Enter obtain marks of " + subject1 ) , sub2MarksObtain = prompt("Enter obtain marks of " + subject2) , sub3MarksObtain = prompt("Enter obtain marks of " + subject3);
var totalObtainMarks = ((+sub1MarksObtain) + (+sub2MarksObtain) + (+sub3MarksObtain)) ;
var totalPrecentage = ( (totalObtainMarks / 300) * 100 ) , percentageSub1 = (((+sub1MarksObtain) / totalMarksOfSubject) * 100 ) , percentageSub2 = (((+sub2MarksObtain) / totalMarksOfSubject) * 100 ) , percentageSub3 = (((+sub3MarksObtain) / totalMarksOfSubject) * 100 ) ;
var totalMarks = (totalMarksOfSubject + totalMarksOfSubject + totalMarksOfSubject);


document.write("Subject   Total Marks   Obtained Marks   Percentage <br>");
document.write( subject1 + " " + totalMarksOfSubject + " " + sub1MarksObtain + " " + percentageSub1 + "%<br>" );
document.write( subject2 + " " + totalMarksOfSubject + " " + sub2MarksObtain + " " + percentageSub2 + "%<br>" );
document.write( subject3 + " " + totalMarksOfSubject + " " + sub3MarksObtain + " " + percentageSub3 + "%<br>" );

document.write( totalMarks + " " + totalObtainMarks + " " + (+totalPrecentage) + "% <br>" );


