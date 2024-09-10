

// for (let index = 0; index < arr.length; index++) {
// //    console.log(arr[index]);
   
// }


//syntx sugar

// let name =  "Azizbek Shoyoqubov"

// let obj = {
//     name: "Azizbek",
//     suname:"Shoyoqubov",
//     age: 25
// }

// let  keys = Object.keys(obj)
// let  entries = Object.entries(obj)
// let values = Object.values(obj)

// console.log(obj["age"]);

 

// for (let index = 0; index < keys.length; index++) {
//      console.log(obj[keys[index]]);
     
    
// }

//for of array and string , is not for  object  


// for (el of obj) {
//     // console.log(el);
    
// }


//FOR IN

// for (el of arr) {
//     // console.log(el);
//     console.log(arr[el]);
    
// }


// for (el in obj) {
//     console.log(obj[el]);
    
// }

// ForEach 
//avvalgisini o'zgaritirmaydi = 
//returin qaytaradimmi = forEach


//Map
//avvalgisini o'zgaritiramaydi = 
//returin qaytaradi = forEach



const arr = [23,54,65]

let newArr = arr.map(function (item, index , arr){
    
    return  item + 5

});


console.log(newArr , arr);
