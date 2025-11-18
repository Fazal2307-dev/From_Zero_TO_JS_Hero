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
let avenger = ["ironman","thor",["thor1","thor2",["shehulk","ironfiest"]]]
console.log(avenger)
let marvel = avenger.flat(Infinity)
console.log(marvel)