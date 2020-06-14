// ARRAYS (Chapter # 14-16): Task # 1 : Declare an empty array using JS literal notation to store student names in future. 
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 1 : </h2>");

var studentsName = [];

















// ARRAYS (Chapter # 14-16): Task # 2 :  Declare an empty array using JS object notation to store student names in future.
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 2 : </h2>");

var studentsName = new Array();


























// ARRAYS (Chapter # 14-16): Task # 3 :  Declare and initialize a strings array.
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 3 : </h2>");

var stringsArray = ["Hello", "World", "Hi", "Hola" ];














// ARRAYS (Chapter # 14-16): Task # 4 :  Declare and initialize a numbers array.
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 4 : </h2>");

var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];














// ARRAYS (Chapter # 14-16): Task # 5 :  Declare and initialize a boolean array.
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 5 : </h2>");

var booleanArray = [true, false];



















// ARRAYS (Chapter # 14-16): Task # 6 :  Declare and initialize a mixed array.
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 6 : </h2>");

var mixedArray = ["Pakistan", 35, "Hello World !", true, 8787, false];














// ARRAYS (Chapter # 14-16): Task # 7 :  Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 7 : </h2>");

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h4> Qualifications : </h4>");
document.write(qualifications[0] + "<br>");
document.write(qualifications[1] + "<br>");
document.write(qualifications[2] + "<br>");
document.write(qualifications[3] + "<br>");
document.write(qualifications[4] + "<br>");
document.write(qualifications[5] + "<br>");
document.write(qualifications[6] + "<br>");
document.write(qualifications[7] + "<br>");

























// ARRAYS (Chapter # 14-16): Task # 8 :  Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each  student, display the scores & percentages of students like: (a) SCore of Michael is 320. Percentage: 64%  (a) SCore of John is 230. Percentage: 46%  (a) SCore of Tony is 480. Percentage: 96% .
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 8 : </h2>");

var studentsName = ["Bilawal", "Rashid", "Obaid"];
var studentsScore = [320, 230, 480];

document.write("Score of " + studentsName[0] + " is " + studentsScore[0] + ". Percentage: 64% <br>");
document.write("Score of " + studentsName[1] + " is " + studentsScore[1] + ". Percentage: 46% <br>");
document.write("Score of " + studentsName[2] + " is " + studentsScore[2] + ". Percentage: 96% <br>");





















// ARRAYS (Chapter # 14-16): Task # 9 :  Initialize an array with color names. Display the array elements in your browser. a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser. b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser. c. Add two more color to the beginning of the array. Display the updated array in your browser. d. Delete the first color in the array. Display the updated array in your browser. e. Delete the last color in the array. Display the updated array in your browser. f. Ask the user at which  index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser. g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

document.write("<h2>ARRAYS (Chapter # 14-16): Task # 9 : </h2>");

var colorNames = ["Green ", "Yellow ", "Orange ", "Red " ];
document.write("Color Array : " + colorNames + "<br><br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
colorNames.unshift(prompt("Enter Color name to Add at The Beginning of the following Array : " + colorNames));
document.write("a.)  " + colorNames + "<br><br>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
colorNames.push(prompt("Enter Color name to Add at The End of the following Array : " + colorNames));
document.write("b.)  " + colorNames + "<br><br>");

// c. Add two more color to the beginning of the array. Display the updated array in your browser.
colorNames.unshift(prompt("Enter Color name/(s) to Add at The Beginning of the following Array : " + colorNames));
document.write("c.)  " + colorNames + "<br><br>");

// d. Delete the first color in the array. Display the updated array in your browser.
colorNames.shift();
document.write("d.)  " + colorNames + "<br><br>");

// e. Delete the last color in the array. Display the updated array in your browser.
colorNames.pop();
document.write("e.)  " + colorNames + "<br><br>");

// f. Ask the user at which  index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
var index = (+prompt("Enter index number to Add  The Color of the following Array : " + colorNames));
var arr = [];
arr = prompt("Enter Color name/(s) to Add at The given index of the following Array : " + colorNames);
colorNames.splice((index-1), 0, arr);
document.write("f.)  " + colorNames + "<br><br>");

// g. Ask the user at which  index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
var startIndex = (+prompt("Enter The Starting index number to Delete  The Color of the following Array : " + colorNames));
var endIndex = (+prompt("Enter The Number of Elements to Delete  The Color/(s) of the following Array : " + colorNames));
colorNames.splice((startIndex-1), endIndex);
document.write("g.)  " + colorNames + "<br><br>");


























// ARRAYS (Chapter # 14-16): Task # 10 :  Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. (Example Scores of Students : 320, 230, 480, 120    Ordered Scores of Students : 120, 230, 320, 480)
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 10 : </h2>");

var studentScores = [320, 230, 480, 120];
document.write("Array Before Sorting : <br>" + studentScores + "<br><br>");

studentScores = studentScores.sort();
document.write("Array After Sorting : <br>" + studentScores);
























// ARRAYS (Chapter # 14-16): Task # 11 :  Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. (Example : Cities list : Karachi, Lahore, Islamabad, Quetta, Peshawar     Selected cities list : islamabad , Quetta)
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 11 : </h2>");

var cities = ["Karachi ", "Lahore ", "Islamabad ", "Quetta ", "Peshawar " ];
document.write("Cities list : <br>" + cities + "<br><br>");

var selestedCities = [];
selestedCities = cities.slice(2, 4);
document.write("Selected cities list : <br>" + selestedCities + "<br><br>");






















// ARRAYS (Chapter # 14-16): Task # 12 :  Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 12 : </h2>");

var arr = ["This" , " is ", " my ", " cat "];
document.write("Array : <br>" + arr + "<br><br>");

var stringArr = [];
stringArr = arr.join(" ");
document.write("String : <br>" + stringArr + "<br><br>");






















// ARRAYS (Chapter # 14-16): Task # 13 :  Create a new array. Store values one by one in such  a way that you can access the values in the order in which  they were stored. (FIFO-First In First Out)
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 13 : </h2>");

var devices = ["keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices : <br>" + devices + "<br><br>");

var deviceOut = devices.shift();
document.write("Out : <br>" + deviceOut + "<br><br>");
deviceOut = devices.shift();
document.write("Out : <br>" + deviceOut + "<br><br>");
deviceOut = devices.shift();
document.write("Out : <br>" + deviceOut + "<br><br>");
deviceOut = devices.shift();
document.write("Out : <br>" + deviceOut + "<br><br>");

























// ARRAYS (Chapter # 14-16): Task # 14 :  Create a new array. Store values one by one in such  a way that you can access the values in reverse order. (Last InFirst Out)
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 14 : </h2>");

var devices = ["keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices : <br>" + devices + "<br><br>");

var deviceOut = devices.pop();
document.write("Out : <br>" + deviceOut + "<br><br>");
deviceOut = devices.pop();
document.write("Out : <br>" + deviceOut + "<br><br>");
deviceOut = devices.pop();
document.write("Out : <br>" + deviceOut + "<br><br>");
deviceOut = devices.pop ();
document.write("Out : <br>" + deviceOut + "<br><br>");



























// ARRAYS (Chapter # 14-16): Task # 15 :  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
document.write("<h2>ARRAYS (Chapter # 14-16): Task # 15 : </h2>");

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier" ];

// document.write('<div class="btn-group"> <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Dropdown </button> <div class="dropdown-menu"> <a class="dropdown-item" href="#">' + manufacturers[0] +'</a> <a class="dropdown-item" href="#">' + manufacturers[1] +'</a> <a class="dropdown-item" href="#">' + manufacturers[2] +'</a> <a class="dropdown-item" href="#">' + manufacturers[3] +'</a> <a class="dropdown-item" href="#">' + manufacturers[4] +'</a> <a class="dropdown-item" href="#">' + manufacturers[5] +'</a> </div>');

document.write("<select>");
for (var i = 0 ; i <= manufacturers.length ; i++){
    document.write("<option>" + manufacturers[i] + "</option>");
}
document.write("</select>");

