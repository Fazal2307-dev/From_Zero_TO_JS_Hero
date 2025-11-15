//1. Calculate sum of first ‘n’ numbers.
// let n =  10;
// let sum = (n*(n-1))/2
// console.log(sum)

// const { prompt } = require("readline-sync");

// const { prompt, promptCL } = require("readline-sync");

// let n = Number(prompt("Enter your value:"))
// let sum = (n*(n-1))/2;
// console.log(sum)

// 2. Calculate the sum of numbers from ‘m’ to ‘n’.

// let m =2;
// let n =10;
// let sum =0;
// for (let i =m;i<=n;i++){
//     sum =sum + i;
// }
// console.log(sum);

// let m = Number(prompt("Enter your m value:"))
// let n = Number(prompt("Enter your n value:"))
// let sum =0;
// for (let i=m;i<=n;i++){
//     sum = sum + i;
// }
// console.log("sum of m and n are=",sum)
// 3. Print all odd numbers  from 0 to ‘n’.
// let n =50;
// for(let i =0;i<=n;i++){
//     if(i%2!==0 && i%3===0)
//         console.log(i)
// }
// 4. Create a “Number Knock” game. (ask the user to keep guessing the number 
// until the user enters correct guess) .
// let computerValue = 6;
// let guess = null;
// while(guess!==computerValue){
//     guess = Number(prompt("Enter your number: "))
//     if(isNaN(guess)){
//         alert("Please Provide Correct no")
//     }else if(guess<computerValue){
//         alert("Value is too loo,please provide other no")
//     }else if(guess>computerValue){
//         alert("Value is too high, please provide other no")
//     }
//     else{
//         alert("Congrats your no is correct")
//     }
// }

// 5. Simple Password Checker (Fixed Attempts)

// let dbPassword = "fazal";
// let userPassword = null;
// let attemp =0;
// while(dbPassword !== userPassword && attemp<3){
//     userPassword = prompt("Enter your password")
//     attemp++;
//     if(dbPassword === userPassword){
//         alert("congrats your password is correct ")
//     }else{
//         alert("your password is incorrect")
//     }
// }






















// 6. Create a program to find the factorial of ‘n’.

// let num =5;
// let fact =1;
// for(let i=1;i<=num;i++){
//     fact = fact*i;
// }
// console.log(fact);

// 7.  Print the following pattern. (build it for nth numbers)
let n1=5;
for(let i =1;i<=n1;i++){
    let str = "";
    for(let j=1;j<=i;j++ ){
        str = str + j +" ";
    }
    console.log(str)

}


// let str = "MD FAZAL"
// for(let ch of str){
//     console.log(ch)
// }

//how many vowel and consonent are there 
let str = "aluminimum";
let vowelCount=0;
let consonentCount =0;
for(let ch of str){
    if(ch === 'a' || ch==='e' || ch==='i' || ch==='o' ||ch==='u' || ch ==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U'){
        vowelCount++;
    }else{
        consonentCount++;
    }
}
console.log("VowelCount are =",vowelCount)
console.log("ConsonentCount are=",consonentCount)

//7
let playAgain = 'yes';

while (playAgain === 'yes') {
    alert("You wake up in the dark forest!");

    let userChoice = prompt("Do you want to go left or right? ");

    if (userChoice === 'left') {
        alert("You see something shiny in the mud!");
        userChoice = prompt("Do you pick it up? (yes or no) ");
        if (userChoice === 'yes') {
            alert("It is a magical stone! you are teleported to safety, you win!");
        } else {
            alert("mar gya tu!")
        }
    } else {
        alert("you find a cave!");
        userChoice = prompt("Do you  Want to enter the cave? (yes or no) ")
        if (userChoice === 'yes') {
            alert("you barely escape!")
        } else {
            alert("acha raat beetega apka!");
        }
    }

    userChoice = prompt("Do you want to play again? (yes or no)")
    if(userChoice === 'no'){
        playAgain = 'no';
        alert("Thanks for playing!")
    }
}