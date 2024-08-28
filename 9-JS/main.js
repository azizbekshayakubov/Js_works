
const arr = [23,54,65]

// for (let index = 0; index < arr.length; index++) {
// //    console.log(arr[index]);
   
// }


//syntx sugar

// let name =  "Azizbek Shoyoqubov"

let obj = {
    name: "Azizbek",
    suname:"Shoyoqubov",
    age: 25
}

let  keys = Object.keys(obj)
let  entries = Object.entries(obj)
let values = Object.values(obj)
 

for (let index = 0; index < keys.length; index++) {
     console.log(obj[keys[index]]);
     
    
}


// for (el of obj) {
//     // console.log(el);
    
// }