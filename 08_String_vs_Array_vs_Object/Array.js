//-------------------------ARRAY----------------------------------//
// let arr = [23,45,67,443,32,[34,23,26]];
// console.log(arr[5[1]])

//constructor

// let arr2 = new Array(2,4,4,"fsadd",("Faszal"))
// console.log(arr2)

// let arr = [20]
// let con = new Array(20);
// console.log(arr,typeof arr)
// console.log(con,typeof con) object

// let arr = [2,3,4,5,6]
// console.log(arr)//2,3,4,5,6
// arr[2]=99;
// console.log(arr);//2,3,99,5,6
//that means array are mutable 

// let arr = [1,4,7,8,9]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// for(let elem of arr){
//     console.log(elem)
// }
// for(let index in arr)(
//     console.log(index)
// )

// let arr = [2,3,4,5,"fds",'df']
// console.log(arr,arr.length);
// arr.push("we")
// console.log(arr,arr.length)
// arr.pop();
// console.log(arr)

// let arr = [2,23,45,65,67]
// console.log(arr)
// arr.unshift("def")
// console.log(arr)
// arr.shift();
// console.log(arr)

// let arr = [14,12,89,65,"dsf0",'dhdgf']
// console.log(arr)
// let newarr =  arr.slice(1,4)//you have to create in new variable
// console.log(newarr)
// arr.splice(2,1)
// console.log(arr)
// arr.splice(3,0,'fdef','fdr','erf')
// console.log(arr)

// let arr = [12,34,54,56,76,89]
// // console.log(arr)
// let arr2 = ['asd','ret',45,67]
// // console.log("arr2",arr2)
// let arr3 = [34,23,12,43];
// // console.log("arr3",arr3)
// // let newarr = arr.concat(arr2,arr3)
// // console.log("newarr:",newarr)
// //spread operator
// let newarr = [...arr,...arr2,...arr3]
// console.log(newarr);

//join()
// let arr = ["mango","apple","grapes"]
// let newarr = arr.join(" & ")
// console.log(arr)
// console.log(newarr)

//includes()
// let arr = ["mango","apple","grapes"]
// let newarr = arr.includes("apple")
// console.log(newarr)

//.toString()
// let arr = [2,3,4,56]
// console.log(arr,typeof arr)
// let newarr = arr.toString()
// console.log(newarr,typeof newarr)

//.indexOf()
// let arr = [2,3,4,5,6]
// let newarr = arr.indexOf(4)
// console.log(newarr)

// let arr = [2,3,4,56,78,32]
// console.log(arr)
// arr.reverse()//reverse original array
// console.log(arr)
// let arr = [32,45,12,65,9,4,2]
// console.log(arr)
// arr.sort()
// console.log(arr)

//find()
// let fruit = ["apple","mango","Banana","apple"]
// console.log(fruit)
// let test = fruit.find((item)=>{
//    return  item ==="apple"
// })
// console.log(test)

//flat()
// let avenger = ["ironman","thor",["thor1","thor2",["shehulk","ironfiest"]]]
// console.log(avenger)
// let marvel = avenger.flat(Infinity)
// console.log(marvel)

//sort()
// let heroes =['wanda','ironman','spiderman','captainamerica','hulk','hawkey']
// console.log(heroes)
// heroes.sort()
// console.log(heroes)
//in string sorting work properly

// let num = [12,32,10,9,4]
// // num.sort()
// // console.log(num)//[10,12,32,4,9] but it is not correct 
// //why we get this answer because it will check through 1 and then 0 check
// //then goto 9
// // for getting correct answer you should do this
// num.sort((a,b)=>{
//     return  a-b;
// })
// console.log(num)//[4,9,10,12,32]

//map()
// let arr = [12,23,43,56,65]
// let newarr = arr.map((elem,index)=>{
//     return (elem*2)
// })
// console.log(newarr)

//forEach()
// let arr = [12,23,43,56,65]
// arr.forEach((elem,index)=>{
//     arr[index]= elem*2;
// })
// console.log(arr)

//filter()
// let arr = [12,23,43,56,65]
// let newarr = arr.filter((elem,index)=>{
//    return elem%2===0
// })
// console.log(arr)
// console.log(newarr)

//reduce
// let arr = [12,23,43,56,65]
// let result = arr.reduce((preVal,curreVal)=>{
//     return preVal + curreVal;
// })
// console.log(arr)
// console.log(result)

//1. For an array with marks of students find the average marks of the entire class.
// let student = [65,76,87,89,90,93,32]
// let sum = student.reduce((preVal,currVal)=>{
//     return preVal + currVal;
// })
// let average = sum / 2;
// console.log(average)


//2. Create an array with the given length(n) and fill with 0.

// let arr = new Array(20).fill(0)
// console.log(arr)


//3. Create an array with the given length (n) and store natural numbers from 1 to n.
// let arr = new Array(20).fill(0)
// arr.forEach((item,index)=>{
//     arr[index] = index+1;
// })
// console.log(arr)

//4. Consider an array of mcu heroes ([ironman, captain, black widow,
//  wanda, hulk, black panther]).
//Now:
// a) Add spiderman at the end and thor at the start.
// b) Remove black widow and add hawkeye in its place.
// c) Check whether captain is present in the array.

// let mcu = ["ironman","captaain","black widow","wanda","hulk","black panther"]
// console.log(mcu)
// //a.
// mcu.push("spiderman")
// console.log(mcu)
// mcu.unshift("thor")
// console.log(mcu)
// //b.
// mcu.splice(3,1,"hawkay")
// console.log(mcu)
// //c.
// console.log(mcu.includes("captaain"))

//5. How to check if given thing is array or not? How to convert other datatypes to array? What if we try
//to convert an object into an array?

// Arra.of()
/*6. We have three variables a, b, c, a contains any number, b contains any string, c contains any object,
and d contains any array. Can we create an array from all these four variables? If yes, How?*/

// let a = 12
// let b = "string"
// let c ={
//     name:"manas"
// }
// let d =[12,25,78];

// console.log(Array.of(a,b,c,d)) 


//7. Check whether given string is palindrome or not.

// let str = "ollo"
// let revstr = str.split("").reverse().join("");
// if(str === revstr){
//     console.log("plaindrom string")
// }else{
//     console.log("Not plaindrom")
// }
//


//8. Capitalize the first letter of every word in a sentence.
// let str = "hello are you " 
// let newarr = str.split(" ").map((elem)=>{
//     return elem.charAt(0).toUpperCase()+elem.slice(1)
// })

// console.log(newarr.join(" "))