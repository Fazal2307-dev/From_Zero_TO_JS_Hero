console.log(val)
const val =32;





//scenario:on e-commerce website show message when product is out of stock;
// let product = 0;
// if(product === 0){
//     console.log("Product is Out of Stock")
// }else{
//     console.log("PRoduct is in outStock")
// }

// let whether = "raining";
// if(whether === "raining"){
// console.log("Take umberalla with you")
// }else{
//     console.log("enjoy Your sun Shine")
// }
//for Enter bar you need 
// let age =17;
// let Id1 = 4589;
// let Id2= 7894;
// if(age>18){
//     if(Id1 === 3758){
//         console.log("Welcome To Club Aman")
//     }
//     else if(Id2 === 7894){
//         console.log("Welcome To club Rahul")
//     }
// }else{
//         console.log("You are not 18")
//     }

//scenario:A website gives discount based on total shoping cart
//q:if amount is less than 4000 no discount,4000 to 8000 discount 10%,more than 8000 give discount 20%
// let amount = 4500;
// if(amount<4000){
//     console.log("No Discount you will get:",amount)
// }else if(amount>=4000 && amount<=8000){
//     let discount = amount -(amount*0.10)
//     console.log("you will get 10% discount and your total amount is:",discount)
// }else if(amount>8000){
//     let discount = amount - (amount*0.20)
//     console.log("You will get 20% discount and your total amount is:",discount)
// }

//Scenario:On video Straming platfrom ,verify user to access  to premium content
/*
write a program to check if they have subscription or not if they have check which type of subcription they have
if "premium" show all content 
if"standard"  show some content
if they don't have subcription tell pleaase subscribe
*/

// let subcription =true;
// let subcriptionType = "standard";
// if(subcription === true){ 
//  if(subcriptionType === "premium"){
//     console.log("You will get all content")
//  }else if(subcriptionType ==="standard"){
//     console.log("you will get limited content")
//  }
// }else{
//     console.log("You have to get subscription to access content")
// }

// //Q.1- Give choice to the user to select theme color and set the selected theme color and console it.
// let color= "pink";
// switch(color){
//     case "red":
//         console.log("your color is red");
//         break;
//     case "Yellow":
//         console.log("your color is yellow");
//         break;
//     case "pink":
//         console.log("your color is Pink");
//         break;
//     default:
//         console.log("No color provided")
// }
// //Q.2- Find the smallest of three numbers. Numbers are given by the user.
// let val1 =12;
// let val2 =34;
// let val3 = 56;
// if(val1<val2 && val1<val3){
//     console.log("smallest of three no:",val1)
// }else if(val2<val1 && val2<val3){
//     console.log("smallest of three no:",val2)
// }
// else{
//     console.log("smallest of three no:",val3)
// }

/*q3 Write a program to manage Role-Based Access Control
Given a user role ("admin", "editor", "viewer"):
Admin: full access
Editor: edit access
Viewer: read-only
Any other: no access
*/


// let user = "Editor"
// switch(user){
//     case "Admin":
//         console.log("You get Full Access");
//         break;
//     case "Editor":
//         console.log("you have eonly edit access");
//         break;
//     case "Viewer":
//         console.log("you have read access");
//         break;
//     default:
//         console.log("you don;t have access")
// }

// // Q.4- Check if Number is Divisible by 3 or 5 or Both. Print "Fizz" for multiples of 3,"Buzz" for multiples of 5,
// //  "FizzBuzz
// let num = 15;
// if(num%3 ==0){
//     console.log("Fizz")
// }else if(num%5==0){
//     console.log("Buzz")
// }else if(num%3==0 && num%5==0 ){
//     console.log("fizzBuzz")
// }else{
//     console.log("no is not valid")
// }
//Q.5- Create a simple calculator. Take two numbers and an operator (+, -, *, /) and calculate the result using switch.
// let num1 = parseFloat(prompt("Enter first number:"));
// let operator = prompt("Enter operator (+, -, *, /):");
// let num2 = parseFloat(prompt("Enter second number:"));

// let result;

// switch (operator) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;
//     case '*':
//         result = num1 * num2;
//         break;
//     case '/':
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             result = "Error: Division by zero!";
//         }
//         break;
//     default:
//         result = "Invalid operator!";
// }

// alert("Result: " + result);


/*Q.6- Create a simple ATM program.
User can choose:
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
*/
// let ATM =2;
// switch(ATM){
//     case 1:
//         console.log("Check Balance");
//         break;
//     case 2:
//         console.log("Deposite");
//         break;
//     case 3:
//         console.log("Withdraw")
//         break;
//     case 4:
//         console.log("Exit");
//         break;
//     default:
//         console.log("Collect your card")
// }
