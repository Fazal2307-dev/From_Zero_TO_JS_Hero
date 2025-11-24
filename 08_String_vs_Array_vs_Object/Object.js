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

//#-----------------------------------Question and answer--------------------------------------------------------------------------------#
/*Q1. Create a person object with properties: name, age, and city. Then
a) Log each property as: value of “name” property is “manas” using loop.
b) Add a new property called email to the person object.
c) Delete “city” property from person object.*/ 
// let person ={
//     name:"Fazal",
//     age:24,
//     city:"Barh",
// }
// person.email="mdfazalbarh@gmail.com";
// delete person.city
// for(let key in person){
//     console.log(`Value of ${key} is ${person[key]}`)
// }

// console.log(person)


/*Q2.Create a function that takes an object with firstName, middleName, lastName properties and returns
the full name.*/

// let user ={
//     firstName:"MD",
//     middleName:"Fazal",
//     lastName:"Anjum"
// }

// let convertToFullName=(elem)=>{
// return `${elem.firstName} ${elem.middleName} ${elem.lastName}`
// }
// console.log(convertToFullName(user))

/*q3. Write a function that takes object and returns the number of properties in
 an object.
*/
// let obj ={
//     name:"Fazal",
//     age:23,
//     address:"Barh"
// }
// let numberOfProperties = (elem)=>{
// return Object.keys(elem).length
// }
//  console.log(numberOfProperties(obj))

/*q4. Write a function that returns an array of names of users who have the role “admin";*/
// const user=[
//     {name:"Alice",role:"admin"},
//     {name:"Bob",role:"user"},
//     {name:"charlie",role:"admin"}
// ]

// let nameOfAdmin =(user)=>{
// let filterItem =  user.filter((elem)=>{
//   return elem.role === 'admin'
// })

// let resultArray = filterItem.map((elem)=>{
//     return elem.name
// })
// return resultArray;
// }
//  console.log(nameOfAdmin(user))

/*5. Write a function searchProducts(products, keyword) that returns an array of products whose name
includes the given keyword (case-insensitive).
*/
// const products =[
//     {id:1,name:"iphone 14"},
//     {id:2,name:"motorola g34"},
//     {id:3,name:"realme"},
// ]

// let searchProducts =(elem,searchKeyword)=>{
// let filteredArray = elem.filter(obj=>{
//     return obj.name.toLowerCase().includes(searchKeyword.toLowerCase())
// })
// console.log(filteredArray)
// }
// searchProducts(products,"r")


/*6 Write a function groupByPost(comments) that returns an object grouping comments by postId
*/

const comments = [
    {postId:1,text:"Greet Post!"},
    {postId:2,text:"Thanks!"},
    {postId:1,text:"Very helpful"},
]


let groupByPost=(elem)=>{
let groupComments ={}
elem.forEach(value=>{
    if(groupComments.hasOwnProperty(value.postId)){
        groupComments[value.postId].push(value.text)
    }else{
        groupComments[value.postId]=[value.text]
    }
} );
console.log(groupComments)
}

groupByPost(comments)