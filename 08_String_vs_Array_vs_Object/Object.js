//--------------------------Object--------------------------
// let user = {
//     name:"FAZAL",
//     email:"mdfazalbarh@gmail.com",
//     Address:"Barh,Patna"
// }
// console.log(user.name)
// console.log(user)

// let car = {
//     brand:"toyota",
//     color:"red",
//     speed:120,
//     drive:function(){
//        return "Car is running"
//     },
//     stop:()=>{
//      return "stopping the car"
//     }
// }
// console.log(car.drive())
// console.log(car["brand"])

// let obj = new Object({
//     name:"Fazal"
// })
// obj.age = 23;
// console.log(obj)

//  let obj = {
//     name:"Fazal",
//     email:"mdfazalbarh@gmail.com"
//  }
//  obj.address = "Barh"
//  console.log(obj)
// delete obj.address;
// console.log(obj)

//this keyword
// let obj={
//     name:"alpha",
//     greet:function (){
//         return `hello i am ${this.name}`
//     }
// }
// console.log(obj.greet())

// let obj ={
//     name:"alpha",
//     age:23,
// }

// let keys = Object.keys(obj)
// console.log(keys)
// let value = Object.values(obj)
// console.log(value)

// for(test in obj){
//     console.log(obj[test])
// }

// 
// let object1 = Object.entries(obj)
// console.log(object1)

// let obj ={
//     name:"alpha",
//     age:23,
// }
//freez()
// Object.freeze(obj)
// obj.name = "Fazal";


//{}-Literals

//Destructring

// const user={
// name:'Fazal',
// age:23,
// address:"Barh,Patna"
// }

// let  {name,age,address}=user;
// console.log(name,age,address)