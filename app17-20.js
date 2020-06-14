// ARRAYS AND LOOP (Chapter # 17-20): Task # 1 :  Declare and initialize an empty multidimensional array. (Array of arrays)
document.write("<h2>ARRAYS AND LOOP (Chapter # 17-20): Task # 1 : </h2>");

var array = [[1, 2]];















// ARRAYS AND LOOP (Chapter # 17-20): Task # 2 :  Declare and initialize a multidimensional array representing the following matrix:
document.write("<h2>ARRAYS AND LOOP (Chapter # 17-20): Task # 2 : </h2>");

var multiArray = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (var i = 0 ; i < 3 ; i++){
    for (var j = 0 ; j < 4 ; j++){
        document.write( multiArray[i][j]);
    }
    document.write("<br>")
}
















// ARRAYS AND LOOP (Chapter # 17-20): Task # 3 :  Write a program to print numeric counting from 1 to 10.
document.write("<h2>ARRAYS AND LOOP (Chapter # 17-20): Task # 3 :</h2>");

for (var i = 1 ; i <= 10 ; i++){
    document.write(i + "<br>");
}

















// ARRAYS AND LOOP (Chapter # 17-20): Task # 4 :  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user
document.write("<h2>ARRAYS AND LOOP (Chapter # 17-20): Task # 4 :</h2>");

var num = (+prompt("Enter a Number to show its table : "));
var len = (+prompt("Enter length of table : "));
document.write("Multiplication Table of : " + num + "<br>");
document.write("Length of Table : " + len + "<br> <br>");

for (var i = 1 ; i <= len ; i++){
    document.write( num + " X " + i + " = " + num*i + "<br>");
}


















// ARRAYS AND LOOP (Chapter # 17-20): Task # 5 :  Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
document.write("<h2>ARRAYS AND LOOP (Chapter # 17-20): Task # 5 : </h2>");

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
    
for (var i = 0 ; i <= 4 ; i++){
    document.write( fruits[i] + "<br>");
}


for (var i = 0 ; i <= 4 ; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}


















// ARRAYS AND LOOP (Chapter # 17-20): Task # 6 :  Generate the following series in your browser. See example output. (a.) Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 (b.) Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 (c.) Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 (d.) Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 (e.) Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h2>ARRAYS AND LOOP (Chapter # 17-20): Task # 6 : </h2>");

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.write("Counting : <br>");
for (var i = 1 ; i <= 15 ; i++){
    document.write(i + ",");
}
document.write("<br>");

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

document.write("Reverse Counting : <br>");
for (var i = 10 ; i >= 1 ; i--){
    document.write(i + ", ");
}
document.write("<br>");

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.write("Even Numbers : <br>");
for (var i = 0 ; i <= 20 ; i = i + 2){
    document.write(i + ", ");
}
document.write("<br>");

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("Odd Numbers : <br>");
for (var i = 1 ; i <= 20 ; i = i + 2){
    document.write(i + ", ");
}
document.write("<br>");

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("Series : <br>");
for (var i = 2 ; i <= 20 ; i = i + 2){
    document.write(i + "k, ");
}





















// ARRAYS AND LOOP (Chapter # 17-20): Task # 7 :  You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search  by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
document.write("<h2>ARRAYS AND LOOP (Chapter # 17-20): Task # 7 : </h2>");

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

var input = prompt("Welcome to ABC Bakery. What do you want to order sir/Ma'am ?");
var inputItem = input.toLowerCase();

for (var i = 0 ; i <= arr.length ; i++ ){
    if(inputItem === arr[i]){
        document.write(arr[i] + " is available at index " + i + " in our bakery");
        break
    }
    else{
        document.write("We are sorry. " + input + " is not available in our bakery");
        break
        
    }
    
}





















// ARRAYS AND LOOP (Chapter # 17-20): Task # 8 :  Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
document.write("<h2>ARRAYS AND LOOP (Chapter # 17-20): Task # 8 : </h2>");

var arr = [24, 53, 78, 91, 12];

document.write("Array items:  " + arr + " <br>");
var largestNumber = 0;

for (var i = 0 ; i < arr.length ; i++){
    if (largestNumber < arr[i]){
        largestNumber = arr[i];
    }
}
document.write("The Largest Number is : " + largestNumber);





















// ARRAYS AND LOOP (Chapter # 17-20): Task # 9 :  Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
document.write("<h2>ARRAYS AND LOOP (Chapter # 17-20): Task # 9 : </h2>");

var arr = [24, 53, 78, 91, 12];

document.write("Array items:  " + arr + " <br>");
var smallestNumber = "" ;

for (var i = 0 ; i < arr.length ; i++){
    if (smallestNumber > arr[i] || smallestNumber.length <= 0){
        smallestNumber = arr[i];
    }
}
document.write("The Smallest Number is : " + smallestNumber + "<br><br>");





















// ARRAYS AND LOOP (Chapter # 17-20): Task # 10 :  Write a program to print multiples of 5 ranging 1 to 100.
document.write("<h2>ARRAYS AND LOOP (Chapter # 17-20): Task # 10 : </h2>");


for (var i = 5 ; i <= 100 ; i = i + 5 ){
    document.write( i * 1  + ", ");
}















