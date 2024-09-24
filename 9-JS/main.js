

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






//avvalgisini  arryni o'zgaritiradi = (reverse,pop,shift,unshift,push,splice)
 


// let newArr = arr.map(function (item, index , arr){
    
//     return  item + 5

// });


// console.log(newArr , arr);




// const arr = [23,54,65,76,88]

const arr = [
    {
        id:1,
        nama: "Bek",
        surname: "Bekzodov"
    },
    {
        id:2,
        nama: "yello",
        surname: "Bhell"
    },
    {
        id:3,
        nama: "eee",
        surname: "Bekzoddddov"
    },
]

// const deletItem = arr.splice(0,1)
// const insterItem = arr.ins
 


let Findarr = arr.find(function (item,i,arr){

    if (item.nama === "eee") {

        return  true

    }

})


console.log(Findarr);
