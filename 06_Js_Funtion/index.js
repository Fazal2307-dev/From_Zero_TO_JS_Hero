

// setTimeout(function (){
//     alert("Please Login")
// },5000)


//5th. Write a function that takes a traffic light color and gives the correct instruction (e.g. "go" 
// for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else).

// function traficLight(val){
//     if(val === "go"){
//         console.log("Green")
//     }else if(val === "stop"){
//         console.log("Red")
//     }else if(val === "caution"){
//             console.log("Yellow")
//     }else{
//         console.log("invalid color")
//     }

// }

// traficLight("st")
// function sumOfN(val){
//     let sum = 0;
//     for(let i=1;i<=val;i++){

//         sum = sum + i;
//     }
//   console.log(sum)
// }
// sumOfN(5);

// function fact(val){
//      let factorial = 1;
//     for(let i=1;i<=BigInt(val);i++ ){
       
//         factorial = factorial*i;
//     }
//    return factorial;
// }

// let facto = fact(5);
// console.log(facto)


// let alpha =  function (val){
//     return val;
// }
// let beta  = alpha(4)
// console.log(beta)
// console.log(beta -"4")
// console.log(beta)




// function sum(val1,val2){
//     console.log(val1+val2) 
// }

// let ver = sum(2,3)
// setTimeout(ver,3000)

//3. Make an arrow function that takes a price and a discount, and returns the price after 
// discount.


// let product = (price,discount)=>{
//     let afterdis = price - (price * discount/100)
//         return afterdis;
// }

// let val = product(1000,25)
// console.log(val)

//1 write a regualr function to take input as a string and change to first char to uppercap

// function changeToUpper(str){
//   console.log(str.charAt().toUpperCase()+ str.slice(1))
// }
// changeToUpper("fazal");



// 4. Create a function that builds a username from a full name.
function username(fullname){
    return "@" + fullname;
}
console.log(username("fazal"))
// 5. Write a function that takes a traffic light color and gives the correct instruction (e.g. "go" 
// for green, "stop" for red, "caution" for yellow, and "invalid color" for anything else).