// Chapter No 1 start

// Write a script to greet your website visitor using JS alert box.

alert("Wellcome dear user ")

// Write a script to display following message on your web
// page:

// Q2 Write a script to display following message on your web
// page:
alert('Error! please enter a valid password')

// Q3 Write a script to display following message on your web
// page: (Hint : Use line break    
alert("wellcoe to js land\n happy coding");

// Q4 Write a script to display following messages in sequence:
alert("wellcome to js land")
alert("happy coding")

//Q5 Generate the following message through browser’s
// developer console:
console.log("hello i can run JS through web browser console");
// Chapter No 1 End

// Chapter No 2 Start

// Q1 Declare a variable called username.
var username;

// Q2 Declare a variable called myName & assign to it a string
// that represents your Full Name.
var myName = "Hamza Yousuf";
alert(myName)

// Q4 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box

var title;
title = "hello world";
alert(title)

// Q4 Write a script to save student’s bio data in JS variables and
// show the data in alert boxes
var studentName = "hamza";
var studentAddress = "Lyari";
var studentClass = "Class E ";
var studentBatch = "Batch 123456";

alert(studentName)
alert(studentAddress)
alert(studentClass)
alert(studentBatch)

// Q5 Write a script to display the following alert using one JS
// variable:

var pizza = "Pizza\nPizz\nPiz\nPi\nP";
alert(pizza)

// Q6 Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "abc@gmail.com";
alert("my email is " + email)

// Q7 Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smart way to learn JavaScript";
alert(book)

// Q8 Write a script to display this in browser through JS
document.write("<h1 style='color:red'>Yaah i can run html content through javascript</h1>")

// Q9 Store following string in a variable and show in alert and
// browser through JS

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(design);

// Chapter No  2 End

// Chapter No  3 Start

// Q1 Declare a variable called age & assign to it your age. Show
// your age in an alert box.
var age = "My age is 24";
alert(age)

// Q2 Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page.

var record = "you have visited this page 15 times";
alert(record)

// Q3 Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
var birthYear = "1996";

var onlineStore = "hamza E-Store";
var visitorName = " Hamza ";
var productTitle = "Shirts";
var quantity = 5;

document.write(visitorName + " ordered " + quantity + " " + productTitle + " on " + onlineStore)
//document.write(onlineStore)

// Chapter No  3 End

// Chapter No  4 Start


{/* a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ___letter___, ___sign___, ,$,, _underscore
_____underscore__ and ____underscore___. and end with number
For example $my_1stVariable
c) Variables must begin with a _letter_____, ___underscore____ or  ,  and 
__$dollar sign___. 
   For example $name, _name or name
d) Variable names are case ___sensitive______ 
e) Variable names should not be JS __function, method, js predefined name_______  */}


document.write("<h1>Rules for NAMING JS Variable</h1>")

// Q1 Declare 3 variables in one statement.
document.write("var saylani, batch, section");

// Q2 Declare 5 legal & 5 illegal variable names.
var simplecase;
var camelCase;
var myName1;
var _yourname_;
var $saylani;


// Illegal Variable
//   var 1myname;
//   var @yourname;
//   var alert;
//   var class;
//   var while;
//   var ##$%5454;

// Q3 Display this in your browser


//  a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain letter,$sign,_underscore, and camelcase
// For example $my_1stVariable
// c) Variables must begin with a  letter, underscore_ and $dollar sign
// For example $name, _name or name
// d) Variable names are case sensitive
// e) Variable names should not be JS function, method and reserved keyword like for while foreach


// Chapter No  4  End


// Chapter No  5 Start


// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
document.write("MATH + - / * AND % of 3 and 5 is ")
document.write(3 + 5)

// Repeat task1 for subtraction, multiplication, division &
// modulus.
document.write(3 - 5)
document.write(3 / 5)
document.write(3 * 5)
document.write(3 % 5)


// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var mathExpression;
document.write("Show the value after variable declared is " + mathExpression)
mathExpression = 10;
document.write("initial value " + mathExpression)
mathExpression = mathExpression++;
document.write("after increment is  " + mathExpression)

mathExpression = mathExpression + 7;
document.write("value after adding is " + mathExpression)
mathExpression = mathExpression--;
document.write("initial value " + mathExpression)
document.write("the reminder is " + mathExpression)

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var price = 600;
var totalprice = price * 5

document.write("total cost of 5 ticket is " + totalprice)

//  Write a script to display multiplication table of any
// number in your browser. E.g

let tableNumber = parseInt(prompt("Enter Table number you want"))
let number = 0;

document.write("<br><br>")
document.write(`${tableNumber} X ${++number} = ${tableNumber * number} <br />`)
document.write(`${tableNumber} X ${++number} = ${tableNumber * number} <br />`)
document.write(`${tableNumber} X ${++number} = ${tableNumber * number} <br />`)
document.write(`${tableNumber} X ${++number} = ${tableNumber * number} <br />`)
document.write(`${tableNumber} X ${++number} = ${tableNumber * number} <br />`)
document.write(`${tableNumber} X ${++number} = ${tableNumber * number} <br />`)
document.write(`${tableNumber} X ${++number} = ${tableNumber * number} <br />`)
document.write(`${tableNumber} X ${++number} = ${tableNumber * number} <br />`)
document.write(`${tableNumber} X ${++number} = ${tableNumber * number} <br />`)
document.write(`${tableNumber} X ${++number} = ${tableNumber * number}`)
document.write("<br><br><br>")

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
let celsius = 60;

const cTemp = celsius;
const cToFahr = cTemp * 9 / 5 + 32;
const celsiusMessage = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
document.write(celsiusMessage);
document.write("<br><br><br>")
let fahrenheit = 45;

const fTemp = fahrenheit;
const fToCel = (fTemp - 32) * 5 / 9;
const fahrenheitMessage = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
document.write(fahrenheitMessage);

//   Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

// Compute the total cost & show the receipt in your browser.
const item1price = 650;
const item2price = 100;
const item1quantity = 3;
const item2quantity = 7;
const shippingCharges = 100;

document.write("<br /><h1>Shopping Cart</h1><br />")
document.write(`Price of item 1 is ${item1price}<br />`)
document.write(`Quantity of item 1 is ${item1quantity}<br />`)
document.write(`Price of item 2 is ${item2price}<br />`)
document.write(`Quantity of item 2 is ${item2quantity}<br />`)
document.write(`Shipping Charges is ${shippingCharges}<br />`)
document.write(`Total Cost of Your Order is ${(item1price * item1quantity) + (item2price * item2quantity) + shippingCharges}<br />`)
document.write("<br />")


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var totalMarks = 700;
var obtainedMarks = 550;
var result = obtainedMarks / totalMarks * 100;
result = result.toFixed(2);
document.write(`<br>Total Marks ${totalMarks}`)
document.write(`<br>Obtained Marks ${obtainedMarks}`)
document.write(`<br>Percentage ${result} %`)

// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<br><h1>Currency in PKR</h1>")
var dollar = 157.15;
var riyal = 41.87;
document.write(`<h4>Total Currency in PKR: ${(dollar * 10) + (riyal * 25)}</h4>`)


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var someNumber = 55;
var result = (someNumber + 5) * 10 / 2;
document.write(result + "<br>");

//  11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// Output them to the screen like so: “They are either NN or NN
// years old”.

var currentyear = 2020;
var birthyear = 1996;
var age = currentyear - birthyear;
document.write("<br><h1>Age Calculator</h1>")

document.write("<br>Current Year" + currentyear)
document.write("<br>Birth Year" + birthyear)
document.write("<br>You are " + age + " Years Old")


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// MATH EXPRESSIONS | JAVASCRIPT


// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius = 5;
var radiusCircle = Math.PI * radius * radius;
var area = 2 * Math.PI * radius;

document.write("<br /><h1>Geometrizer</h1>")
document.write("<br />Radius of a Circle is" + radius)
document.write("<br />The Circumference  is" + radiusCircle)
document.write("<br />The Area  is" + area)



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<br><h1>The Lifetime Supply Calculator</h1>")

var favoriteSnack = " Kit Kat ";
var currentAge = 24;
var maximumAge = 65;
var estimatedAmount = 50;
var perday = 3
document.write("<br>Favorite Snack " + favoriteSnack)
document.write("<br>Current Age: " + currentAge)
document.write("<br>Estimated MAximum  Age: " + maximumAge)
document.write("<br>Amount of Snack per Day: " + perday)
document.write(`<br>You will need   
 ${estimatedAmount * perday}  ${favoriteSnack}  to last you untill tyhe ripe old age of ${maximumAge}`);


// Chapter No  5  End

// Chapter No  6 to 9  Start

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 10;
document.write("The Value of a is " + a + "<br")
document.write("The Value of ++a is: " + ++a + "<br")
document.write("Now That The Value of a is " + a + "<br")
document.write("The Value of a++ is " + a++ + "<br")
document.write("Now That The Value of a is " + a + "<br")
document.write("The Value of --a is " + --a + "<br")
document.write("Now That The Value of a is " + a + "<br")
document.write("The Value of a-- is " + a-- + "<br")
document.write("Now That The Value of a is " + a + "<br")



// What will be the output in variables a, b & result after
// execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;  // predecremnt in a
// --a - --b; // predecremnt in a and minus predecremnt in b
// --a - --b + ++b;  // predecremnt in a and minus post increment in B
// --a - --b + ++b + b--; // predecremnt in a and minus predecremnt in b and plus preIncrement in B and plus postDecremt in B

document.write("a is " + a)
document.write("b is " + b)
document.write("result  is " + result)


// Write a program that takes input a name from user &
// greet the user.

var greet = prompt("Enter Your name")
alert("Wellcome dear " + greet)


// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var userTable = parseInt(prompt("Enter Your Favorite Number i will print the table", 5))
if (userTable == null || userTable == '') {
    var table = 5;
    var num = 0;
    document.write(`${table} X ${++num} = ${table * num}`)
    document.write(`${table} X ${++num} = ${table * num}`)
    document.write(`${table} X ${++num} = ${table * num}`)
    document.write(`${table} X ${++num} = ${table * num}`)
    document.write(`${table} X ${++num} = ${table * num}`)
    document.write(`${table} X ${++num} = ${table * num}`)
    document.write(`${table} X ${++num} = ${table * num}`)
    document.write(`${table} X ${++num} = ${table * num}`)
    document.write(`${table} X ${++num} = ${table * num}`)
    document.write(`${table} X ${++num} = ${table * num}`)
}
else {
    document.write(`${userTable} X ${++num} = ${userTable * num}`)
    document.write(`${userTable} X ${++num} = ${userTable * num}`)
    document.write(`${userTable} X ${++num} = ${userTable * num}`)
    document.write(`${userTable} X ${++num} = ${userTable * num}`)
    document.write(`${userTable} X ${++num} = ${userTable * num}`)
    document.write(`${userTable} X ${++num} = ${userTable * num}`)
    document.write(`${userTable} X ${++num} = ${userTable * num}`)
    document.write(`${userTable} X ${++num} = ${userTable * num}`)
    document.write(`${userTable} X ${++num} = ${userTable * num}`)
    document.write(`${userTable} X ${++num} = ${userTable * num}`)
}


// Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// ALERTS | JAVASCRIPT

// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

let subject1 = parseInt(prompt("Enter Your Subject one name"))
let subject2 = parseInt(prompt("Enter Your Subject two name"))
let subject3 = parseInt(prompt("Enter Your Subject three name"))
let totalMarks = 100;

let Mathematics = parseInt(prompt("Enter Your Mathematics Marks"))
let Chemistry = parseInt(prompt("Enter Your Chemistry Marks"))
let Zoology = parseInt(prompt("Enter Your Zoology Marks"))


var subjectone = Mathematics / totalMarks * 100;
var subjecttwo = Chemistry / totalMarks * 100;
var subjectthree = Zoology / totalMarks * 100;

document.write(subject1 + "percentage is" + subjectone + '%<br>')
document.write(subject2 + "percentage is" + subjecttwo + '%<br>')
document.write(subject3 + "percentage is" + subjectthree + "%<br>")

// Chapter No  6  to 9  End


// Chapter No  9 to 11 Start

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var cityName = prompt("Enter Your City Name");
if (cityName === 'karachi') {
    alert("WEllcome to city of Lights")
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter Your Gender");
if (gender === 'male') {
    alert("Good Morning Dear Sir")
}
else if (gender === 'female') {
    alert("Good Morming Ma'am")
}

// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var signalColor = prompt("Enter Signal Color");
if (signalColor === 'Red') {
    alert("Must Stop")
}
else if (signalColor === 'Green') {
    alert("Move Now")
}

else if (signalColor === 'Yellow') {
    alert("Ready to move")
}

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

var fuel = prompt("Enter Your remaining fuel in car")
if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}

// Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var English = prompt("English Number")
var Urdu = prompt("Urdu Number")
var Mathematics = prompt("Mathematics Number")

if (English <= 100 && Urdu <= 100 && Mathematics <= 100) {
    var obtainedMarks = English + Urdu + Mathematics;
    var totalMarks = 300;

    let percentage = obtainedMarks / totalMarks * 100;

    percentage = percentage.toFixed(2);


    if (percentage >= 80) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  A-one `);
        document.write(`<h2>Remarks Excellent `);
    }

    else if (percentage >= 70) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  A `);
        document.write(`<h2>Remarks Good `);
    }

    else if (percentage >= 60) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  B `);
        document.write(`<h2>Remarks You need to improve`);
    }

    else if (percentage < 60) {
        document.write(`<h2>Total Marks  ${totalMarks} `);
        document.write(`<h2>Obtained Marks ${obtainedMarks} `);
        document.write(`<h2>Percentage ${percentage} `);
        document.write(`<h2>Grade  Fail `);
        document.write(`<h2>Remarks sorry `);
    }

}

// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 7;
var userSecretNumber = +prompt("Enter Your secret Number")
if (secretNumber === userSecretNumber) {
    alert('bongo')
}
else if (secretNumber++ === userSecretNumber) {
    alert('Close enough to the correct answer.')
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var divisibleNumber = +prompt("Enter Divisible Number")
if (divisibleNumber % 3 === 0) {
    alert("Number is Divisible by 3")
}


// Write a program that checks whether the given input is an
// even number or an odd number.
var num = +prompt("Enter your Number i will tell you it is even or odd")
if (num % 2 == 0) {
    alert('Even Number');
} else {
    alert('Odd Number');
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = +prompt("Enter Your Temperature");
if (temperature > 40) {
    alert("It is too hot outside")
}
else if (temperature > 30) {
    alert("The Weather today is Normal.")
}
else if (temperature > 20) {
    alert("Today’s Weather is cool.")
}
else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.")
}
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var inputOne = parseInt(prompt("Enter First Number"))
var inputtwo = parseInt(prompt("Enter Last Number"))
var operation = prompt("type any one operator +, -, *, /, %")

if (operation === "+") {
    alert(inputOne + inputtwo)
}
else if (operation === "-") {
    alert(inputOne - inputtwo)
}

else if (operation === "*") {
    alert(inputOne * inputtwo)
}
else if (operation === "/") {
    alert(inputOne / inputtwo)
}
else if (operation === "%") {
    alert(inputOne % inputtwo)
}


// Chapter No  9 to 11  End


// Chapter No   12 to 13 Start

//  Write a program that takes a character (number or string)
//  in a variable & checks whether the given input is a
//  number, uppercase letter or lower case letter. (Hint: ASCII
//  codes:- A=65, Z=90, a=97, z=122)



var userNumber = prompt("Type any one from a or A, z or Z Alphabets so I will tell You what you Type Capital letter or small Letter ")
userNumber = userNumber.charCodeAt(0);
if (userNumber === 65) {
    document.write("You select Capital Letter  'A' Alphabet")
}
else if (userNumber === 90) {
    document.write("You select Capital letter 'Z' Alphabet")
}
else if (userNumber === 97) {
    document.write("You select small Letter 'a' Alphabet")
} else if (userNumber === 122) {
    document.write("You select small letter 'z' Alphabets")
}
else {
    document.write("please Type any one from a or A, z or Z Alphabets")

}

//      Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

if (25 > 21) {
    document.write("larger number is 25 <br>");
}
if ('abc' === 'abc') {
    document.write("both string are Same<br>");
}
else {
    document.write("both string are different<br>")
}


// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var userInput = parseInt(prompt("Enter the positive, negative or zero number<br>"))
if (userInput == 5) {
    document.write("You Select Positive Number<br>")
}

else if (userInput == -5) {
    document.write("You Select Negative Number<br>")
}
if (userInput === 0) {
    document.write("You Select Zero Number<br>")
}

// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var vowelWord = prompt("Enter Your desire Letter")
vowelWord = vowelWord.toLowerCase();
if (vowelWord === 'a' || vowelWord === 'e' || vowelWord === 'i' || vowelWord === 'o' || vowelWord === 'u') {
    alert("You typed Vowel Word")
}
else {
    alert("Your typed  not a Vowel Word")

}

// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var password = "Javascript";
var userPassword = prompt("Enter Your Password");
if (userPassword == null || userPassword == '') {
    alert("please Enter Your Password")
}
else if (userPassword === password) {
    alert("Correct! The password you entered matches the original password")
}
else {
    alert("Your typed wrong Password")
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
var times = 1900;
if (times >= 0000 && times < 1200) {
    document.write("<br /> Good Morning")
}

else if (times >= 1200 && times < 1700) {
    document.write("<br /> Good AfterNoon")
}

else if (times >= 1700 && times < 2100) {
    document.write("<br /> Good Evening")
}

else if (times >= 2100 && times < 2359) {
    document.write("<br /> Good Night")
}

// Chapter No  12 to 13   End

// Chapter No  14  to 16 Start

// Declare an empty array using JS literal notation to store
// student names in future.

var studentName = [];
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
var stringArray = ['hamza', 'yousuf', 'saylani', 'saylani welfare']
// 4. Declare and initialize a numbers array.
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// 5. Declare and initialize a boolean array.
var booleanArray = [true, false, false, true]
// 6. Declare and initialize a mixed array.
var mixedArray = ['myname ', 'hamza', 'class', 14, 5, 6, 8, 9, true, false]
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//  BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var educationArray = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
document.write("<h1>Qualification</h1>")

for (var i = 0; i < educationArray.length; i++) {
    document.write(i + "  " + educationArray[i] + "<br>")
}


// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:


var studentName = ['hamza', 'salman', 'arsalan']
var studentScore = [320, 230, 480];

var percentagestudent1 = studentScore[0] * 100 / 500;
var percentagestudent2 = studentScore[1] * 100 / 500;
var percentagestudent3 = studentScore[2] * 100 / 500;
var percentagestudents = [percentagestudent1, percentagestudent2, percentagestudent3]

for (let index = 0; index < studentName.length; index++) {
    document.write(`Score of ${studentName[index]} is ${studentScore[index]}.
    Percentage : ${percentagestudents[index]} %<br>`)
}



// 9. Initialize an array with color names. Display the array
// elements in your browser.

var colorName = ['red', 'green', 'blue', 'white', 'orange'];
for (let index = 0; index < colorName.length; index++) {
    document.write(colorName[index] + "<br>")
}
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var userColor = prompt("Enter your Favorite Color");

if (userColor != '' && userColor != undefined) {
    // colorName.splice(0, 0, userColor)
    colorName.unshift(userColor)
    document.write(colorName + "</br>");

}
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

var userColor2 = prompt("Enter your Second Favorite Color");

if (userColor2 != '' && userColor2 != undefined) {
    // colorName.splice(0, 0, userColor)
    colorName.push(userColor2)
    document.write(colorName + "</br>");

}
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colorName.unshift("pink")
colorName.unshift("skyblue")
document.write("<h3>New Updated Array: " + colorName + "</h3><br />")
// d. Delete the first color in the array. Display the updated
// array in your browser.
colorName.shift()
document.write("<h3> First item removed and now New Updated Array: " + colorName + "</h3><br />")

// e. Delete the last color in the array. Display the updated
// array in your browser.

colorName.pop()
document.write("<h3> Last item removed and now New Updated Array: " + colorName + "</h3><br />")
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
var userColorName = prompt("Enter your color name")
var userColorposition = parseInt(prompt("Enter which index you want to add color name"))
colorName.splice(userColorposition, 0, userColorName)
document.write("<h3>" + colorName + "</h3>")
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var userdeleteColor = prompt("Enter which index you want to delete color ")
var userColorposition = parseInt(prompt("Enter how many colors you want to delete"))
colorName.splice(userdeleteColor, userColorposition)
document.write("<h3>" + colorName + "</h3><br>")


// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var sortArray = [120, 350, 220, 450, 100, 650, 300];
document.write("Score of Students " + sortArray + "<br />")
document.write(" Ordered Score of Students  " + sortArray.sort())


// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var cities = ['karachi', 'lahore', 'quetta', 'islamabad', 'Multan', 'peshawar']
var selectedcities = cities.slice(2, 5);
document.write("<br>Cities List  " + cities + "<br />")
document.write("Cities List " + selectedcities + "<br />")


// Write a program to create a single string from the
// below mentioned array:
// (Use array’s join method)

var arr = ['This', 'is', 'my', 'cat'];
var stringArray = arr.join(" ")
console.log(arr)
console.log(stringArray)


//  Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

var fifoarray = [];
fifoarray.push('keyboard')
fifoarray.push('mouse')
fifoarray.push('printer')
fifoarray.push('monitor')
document.write("<h3>DEVICES: <br /> " + fifoarray + " </h3>")

var out1 = fifoarray.shift()
var out2 = fifoarray.shift()
var out3 = fifoarray.shift()
var out4 = fifoarray.shift()
document.write("<h3>Out: <br /> " + out1 + " </h3>")
document.write("<h3>Out: <br /> " + out2 + " </h3>")
document.write("<h3>Out: <br /> " + out3 + " </h3>")
document.write("<h3>Out: <br /> " + out4 + " </h3>")

// Create a new array. Store values one by one in such a way

// that you can access the values in reverse order. (Last In-
// First Out)


var lifoArray = [];
lifoArray.unshift('monitor')
lifoArray.unshift('printer')
lifoArray.unshift('mouse')
lifoArray.unshift('keyboard')

document.write("<h3>DEVICES: <br /> " + lifoArray + " </h3>")

var out1 = lifoArray.pop()
var out2 = lifoArray.pop()
var out3 = lifoArray.pop()
var out4 = lifoArray.pop()
document.write("<h3>Out: <br /> " + out1 + " </h3>")
document.write("<h3>Out: <br /> " + out2 + " </h3>")
document.write("<h3>Out: <br /> " + out3 + " </h3>")
document.write("<h3>Out: <br /> " + out4 + " </h3>")


// Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var mobilesCompanies = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier']
document.write(`<select>
<option>${mobilesCompanies[0]}</option>
<option>${mobilesCompanies[1]}</option>
<option>${mobilesCompanies[2]}</option>
<option>${mobilesCompanies[3]}</option>
<option>${mobilesCompanies[4]}</option>
<option>${mobilesCompanies[5]}</option></select>`)
// Chapter No  14 to  16 End

// Chapter No  17 to 20  Start

// Declare and initialize an empty multidimensional array.
// (Array of arrays)
var multi = [];

// Declare and initialize a multidimensional array
// representing the following matrix:

var multi1 = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        document.write(multi1[i][j] + " ");
    }
    document.write("<br>");
}

// . Write a program to print numeric counting from 1 to 10

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>")
}


// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var table = parseInt(prompt("Enter a number to show its multiplication Table"), "Enter Here");
var length = parseInt(prompt("Enter length of multiplication Table"), "Enter Here");

for (var i = 1; i <= length; i++) {
    var temp = table * i;
    document.write(table + " x " + i + " = " + temp + "<br>");
}


//Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i =0 ;i<fruits.length;i++){
//     document.write("Element at index " + i + " is " + fruits[i]+"<br>");
// }

// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


document.write("<h2>Counting : </h2>" + "<br>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ", ")
}

document.write("<h2>Reverse counting : </h2>" + "<br>");
for (var i = 10; i > 0; i--) {
    document.write(i + ", ")
}


document.write("<h2>Even : </h2>" + "<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + ", ")
    }
}


document.write("<h2>Odd : </h2>" + "<br>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        document.write(i + ", ")
    }
}


// document.write("<h2>Series : </h2>" + "<br>");
for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        document.write(i + "k, ")
    }
}


//You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var temp = 0;
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var user1 = prompt("Welcome to ABC Bakery, What do you want to order Sir/ma'am");
for (var i = 0; i < A.length; i++) {
    if (user1 === A[i]) {
        alert(A[i] + " is avaliable at index " + i + " in our bakery");
    }
    else {
        temp++
    }
}
if (temp === 5) {
    alert("We are sorry. " + user1 + " is not avaliable in our bakery.");
}



//Write a program to identify the largest number in the given array.
// B = [24, 53, 78, 91, 12].
var store;
var B = [24, 53, 78, 91, 12];
for (var i = 0; i < B.length - 1; i++) {
    if (B[i] > B[i + 1]) {
        store = B[i];
    }
}
document.write("The Largest number is " + store);


// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var store;
var B = [24, 53, 78, 91, 12];
for (var i = 0; i < B.length; i++) {
    if (B[i] < B[i + 1]) {
        store = B[i];
    }
    else if (B[i] < store) {
        store = B[i];
    }
}
document.write("The Smallest number is " + store);



//Write a program to print multiples of 5 ranging 1 to 100.
var multiple;
for (var i = 1; i <= 20; i++) {
    multiple = 5 * i;
    document.write(multiple, ", ");
}

// Chapter No  17 to 20  end
