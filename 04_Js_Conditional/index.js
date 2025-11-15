//scenario:on e-commerce website show message when product is out of stock;
let product = 0;
if(product === 0){
    console.log("Product is Out of Stock")
}else{
    console.log("PRoduct is in outStock")
}

let whether = "raining";
if(whether === "raining"){
console.log("Take umberalla with you")
}else{
    console.log("enjoy Your sun Shine")
}
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
let amount = 4500;
if(amount<4000){
    console.log("No Discount you will get:",amount)
}else if(amount>=4000 && amount<=8000){
    let discount = amount -(amount*0.10)
    console.log("you will get 10% discount and your total amount is:",discount)
}else if(amount>8000){
    let discount = amount - (amount*0.20)
    console.log("You will get 20% discount and your total amount is:",discount)
}

//Scenario:On video Straming platfrom ,verify user to access  to premium content
/*
write a program to check if they have subscription or not if they have check which type of subcription they have
if "premium" show all content 
if"standard"  show some content
if they don't have subcription tell pleaase subscribe
*/