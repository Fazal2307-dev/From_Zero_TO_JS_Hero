//--------------------------------String------------------------------
// console.log('fazal')

// const { prompt } = require("readline-sync");

// const { prompt } = require("readline-sync");

// const { prompt } = require("readline-sync");

// let str = "manas"
// let str2 = 'Manas'
// console.log(str)
// console.log(str2)
// let str3 = `fazal`
// console.log(str3,typeof str3)

// let firstName = "Md"
// let lastName = "fazal"
// let fullName = `${firstName} ${lastName}`
// console.log(`My Name is ${fullName}`)

// let a = 10;
// let b = 20; 
// let c = 30;
// console.log(`a value is = ${a} b value is = ${b} c value is = ${c}`)
// `` are template literal,${} are called placeholder
// ${a} are called string interpolation


// let str = new String("Manas");//string constructor
// console.log(str)

// let str = "Hello \n how are you"
// console.log(str,str.length)
// let str2 = "Fazal\nmd"
// console.log(str2,str2.length)

// let str3= "Fazal\"md"
// console.log(str3,str3.length)
//string are immutable;

// let str = "Fazal";
// for(let ch of str){
//     console.log(ch);
// }
// let str2 ="";
// for(let ch of str){
//     str2 = str2 + ch +" ";
// }

// console.log(str2)
//string Properties & Method in js
//properties-don't use () 
//Method -() use thiss 

//.toUpperCase,.toLowerCase
// let str = "Fazal"
// let upperCaseStr  = str.toUpperCase();
// let lowerCaseStr = str.toLowerCase()
// console.log(str,upperCaseStr,lowerCaseStr)

// let firstName = "MD"
// let lastName = "Fazal"
// let fullName = firstName.concat(" ",lastName)
// console.log(fullName)

//includes

// let str = "hello how are you,you"
// console.log(str.indexOf("a"))
// console.log(str.charAt(3))
// let check = str.includes("ou")
// console.log(check)

// console.log(str.replace("you","and")) // it will only change one if two value are same
// console.log(str.replaceAll("you","me"))// it will replace all how are same


// let username = "@mdfazal"
// console.log(username.slice(1,5))

// let str = "alpha beta gamma"
// console.log(str.split("a"))

//1. Create a program to take full name from user and generate a username start
// with @, followed by their full name and ends with underscore followed by the
// length of full name

// let fullName = prompt("Enter your FullName:")
// let username = `@${fullName.trim().replaceAll(" ","")}_${fullName.length}`
// console.log(username)

// 2. Take a string and a character from the user and:
// a) count how many times that character appears in the string.
// b) Case-Insensitive Version
// c) Find All Occurrence Positions

// let user = prompt("Enter a String:")
// let char = prompt("Enter a char:")

// let count =0;
// for (let index in user){
//     if(user[index].toLowerCase() === char.toLowerCase()){
//         console.log("Occurrence position = ",index)
//         count++;
//     }

// }
// console.log("count =",count)//

//3. Count the words present in a given string.
// let user = propmt("Enter a word")
// for (let ch of user){

// }
// let str = "heednf hjsqbdj hebr  "
// console.log(str.split(" ").length)
// let user = prompt("Enter word:")
// let count =0;
// for (let i =0;i<user.length;i++){
//     console.log(user[i]);
//     count++;
// }
// console.log(count);

//-------------------------ARRAY----------------------------------//
