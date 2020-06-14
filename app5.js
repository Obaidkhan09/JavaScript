// MATH EXPRESSIONS(Chapter #5): Task # 1 :  Write a program that take two numbers & add them in a new variable. Show the result in your browser. : Sum of 3 and 5 is 8
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 1</h2>");
var num1 = 3 , num2 = 5 ;
var total = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + total );












// MATH EXPRESSIONS(Chapter #5): Task # 2 :  Repeat task1 for subtraction, multiplication, division & modulus.
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 2</h2>");

// Subtarction:
var num1 = 3 , num2 = 5 ;
var total = num1 - num2;
document.write("Subtraction of " + num1 + " from " + num2 + " is " + total + "<br>" );

// Multiplication:
var num1 = 3 , num2 = 5 ;
var total = num1 * num2;
document.write("Multiplication of " + num1 + " from " + num2 + " is " + total + "<br>" );

// Division:
var num1 = 3 , num2 = 5 ;
var total = num1 / num2;
document.write("Division of " + num1 + " from " + num2 + " is " + total + "<br>" );

// Modulus:
var num1 = 3 , num2 = 5 ;
var total = num1 % num2;
document.write("Modulus of " + num1 + " from " + num2 + " is " + total + "<br>" );















// MATH EXPRESSIONS(Chapter #5): Task # 3 :  Do the following using JS Mathematic Expressions a. Declare a variable. b. Show the value of variable in your browser like “Value after variable declaration is: ??”. c. Initialize the variable with some number. d. Show the value of variable in your browser like “Initial value: 5”. e. Increment the variable. f. Show the value of variable in your browser like “Value after increment is: 6”. g. Add 7 to the variable. h. Show the value of variable in your browser like “Value after addition is: 13”. i. Decrement the variable. j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3. l. Output : “The remainder is : 0”.
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 3</h2>");
var num;
document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value is : " + num + "<br>");

num++;
document.write("Value after increment is : " + num + "<br>");

num = num + 7;
document.write("Value after Addition by 7 is : " + num + "<br>");

num--;
document.write("Value after decrement is : " + num + "<br>");

num = num % 3;
document.write("Remainder after division by 3 is : The remainder is = " + num + "<br>");















// MATH EXPRESSIONS(Chapter #5): Task # 4 :  Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: Total cost to buy 5 tickets to a movie is 3000 PKR
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 4</h2>");
var Cost = 600 , numberOfTickets = 5;
var totalCost = Cost * numberOfTickets ;
document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");
















// MATH EXPRESSIONS(Chapter #5): Task # 5 :  Write a script to display multiplication table of any number in your browser.
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 5</h2>");
var num = 7;


document.write(num + " X 1 = " + num*1 + "<br>");
document.write(num + " X 2 = " + num*2 + "<br>");
document.write(num + " X 3 = " + num*3 + "<br>");
document.write(num + " X 4 = " + num*4 + "<br>");
document.write(num + " X 5 = " + num*5 + "<br>");
document.write(num + " X 6 = " + num*6 + "<br>");
document.write(num + " X 7 = " + num*7 + "<br>");
document.write(num + " X 8 = " + num*8 + "<br>");
document.write(num + " X 9 = " + num*9 + "<br>");
document.write(num + " X 10 = " + num*10 + "<br>");













// MATH EXPRESSIONS(Chapter #5): Task # 6 :  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. a. Store a Celsius temperature into a variable. b. Convert it to Fahrenheit & output “NNoC is NNoF”. c. Now store a Fahrenheit temperature into a variable. d. Convert it to Celsius & output “NNoF is NNoC”. Conversion Formulae:[ °C = ( °F-32 ) X 5/9 ] , [ °F = ( °C X 9/5 ) + 32 ]
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 6</h2>");
var celsius =25  , fahrenheit = 70; 
document.write(celsius + "°C is " +  (( celsius * (9/5) ) + 32) +"°F" + "<br>" );
document.write(fahrenheit + "°F is " +  (( fahrenheit-32 ) * (5/9)) +"°C" );










// MATH EXPRESSIONS(Chapter #5): Task # 7 :  Write a program to implement Checkout process of a shopping cart system for an e-commerce website. Store the following in variables a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping Charges Compute the total cost & show the receipt in your browser.
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 7</h2>");
var item1Price = 650 , item1Quantity = 3 , item2Price = 100 , item2Quantity = 7 , Shipping = 100 , total = ( (item1Price*item1Quantity) + (item2Price*item2Quantity) + Shipping ); 
document.write("<h5>Shopping Cart</h5><br><br><br>");
document.write("Price of item 1 is : " + item1Price + " PKR <br>");
document.write("Quantity of item 1 is : " + item1Quantity + "<br>");
document.write("Price of item 2 is : " + item2Price + " PKR <br>");
document.write("Quantity of item 2 is : " + item2Quantity + "<br>");
document.write("Shipping Charges : " + Shipping + " PKR <br><br>");
document.write("Total cost of your order is : " + total + " PKR <br>");













// MATH EXPRESSIONS(Chapter #5): Task # 8 :  Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 8</h2>");
var marksObtain = 804 , marksTotal = 980 , percentage = ( (marksObtain / marksTotal) * 100) ;
document.write("<h5>Marks Sheet</h5><br><br><br>");
document.write("Total marks : " + marksTotal + "<br>");
document.write("Marks Obtained : " + marksObtain + "<br>");
document.write("Percentage : " + percentage + " %<br>");











// MATH EXPRESSIONS(Chapter #5): Task # 9 :  Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 9</h2>");
var UsDollar = 10 , SaudiRiyal = 25 , totalCurrency = ( (UsDollar * 104.80) + (SaudiRiyal * 28) ) ; 
document.write("<h5>Currency in PKR</h5><br><br><br>");
document.write("Total Currency in PKR : " + totalCurrency + "<br>");














// MATH EXPRESSIONS(Chapter #5): Task # 10 :  Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 10</h2>");
var num = 1;
num = ( (((num + 5) * 10) / 2) );
document.write(num);















// MATH EXPRESSIONS(Chapter #5): Task # 11 :  The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. Output them to the screen like so: “They are either NN or NN years old”.
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 11</h2>");
var currentYear = 2020 , birthYear = 1997 , age = (currentYear - birthYear) ;
document.write("<h4>Age Calculator</h4><br><br><br>");
document.write("Current Year : " + currentYear + "<br>");
document.write("Birth Year : " + birthYear + "<br>");
document.write("Your Age is : " + age + "<br>");















// MATH EXPRESSIONS(Chapter #5): Task # 12 :  The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 12</h2>");
var radius = 20 , circumference = (2 * 3.142 * radius) , area = ( 3.14 * ( radius * radius )) ; 
document.write("<h4>The Geometrizer</h4><br><br><br>");
document.write("Radius of a circle is : " + radius + "<br>");
document.write("The Circumference is : " + circumference + "<br>");
document.write("The area is : " + area + "<br>");














// MATH EXPRESSIONS(Chapter #5): Task # 13 :  The Lifetime Supply Calculator: Ever wonder how much  a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
document.write("<h2>MATH EXPRESSIONS(Chapter #5): Task # 13</h2>");
var favSnack = "Kurkure" , curAge = 22 , estimateAge = 70 , snacksPerDay = 5 , totalSnacks = (5*(estimateAge - curAge)*365*12*30*7) ;
document.write("<h4>The Lifetime Supply Calculator</h4><br><br><br>");
document.write("Favorite snack : " + favSnack + "<br>");
document.write("Current age  : " + curAge + "<br>");
document.write("Estimated Maximum Age : " + estimateAge + "<br>");
document.write("Amount of snacks per day : " + snacksPerDay + "<br>");
document.write("You will need  " + totalSnacks + " " + favSnack + " to last you until the ripe old age of " + estimateAge +"<br>");











