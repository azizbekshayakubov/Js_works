// //Masala-1
// // function findAverga(array) {
    
// //     let x = 0
// // if (array.length > 0) {
// //     for (let index = 0; index < array.length; index++) {

// //     x= (array[index]+x )
// // }
// // return x/array.length   
// // } else {
// //     return 0
// // }

// // }

// // let array = [1,2,3,4,5,6]

// // console.log(findAverga(array));



// //Masala-2

// // function sum(numbers) {
    
// //     let x = 0
// // if (numbers.length > 0) {
// //     for (let index = 0; index < numbers.length; index++) {

// //     x= (numbers[index]+x )
// // }
// // return x   
// // } else {
// //     return 0
// // }

// // }

// // let array = [1,2,3,4,5]

// // console.log(sum(array));


// //Masala-3

// function ageYour(name) {

//     if (name[0] ==="R" || name [0]=== "r") {
//         return `${name} play banjo`
//     } else{
//         return `${name} does not play banjo`
//     }
// }

// ageYour(name)

// console.log(ageYour("Rahim"));

// function removeLastEl (str) {
  
//     if (str.slice(-1) === "!") {
        
//         return str.slice(0, -1)
//     } else {
       
//         return str
//     }
// }
// }
// console.log(removeLastEl("Hell!"));


// let arr= [1,2,3,4,5]
// let arr1=[]
// let sum = 0

// for (let index = 0; index < arr.length; index++) { 
     
//     if (arr[index] % 2 === 0) {
//         sum += arr[index]
//         arr1.push(sum)
//     } else {
//         arr1.push
//     }
// }

// console.log(arr1);


// let arr= [1,2,3,4,5]

// function x (arr) {
//     let arr1 = []
//     let sum = 0

//     for (let index = 0; index < arr.length; index++) {
        
//         console.log(arr[index]);
        

//          if (arr[index] % 2 === 0) {
         
//         // sum += arr[index]
//         arr1.unshift(sum)
//     } else {
//         sum = sum +arr[index]

//         arr1.push(sum)
//     }
        
        
//     }

//     return [arr1]
// }

// console.log(arr1);


// function x (arrr) {
//     let a = 0
//     let b = 0
    
//     for (let index = 0; index < arrr.length; index++) {
        
//        if (arrr[index] % 2 === 0) {
         
//         a+= arrr[index]
//         a = a + arrr[index]

//        } else {
//          b  += arrr[i]
//        }

//     }
//     return [a , b]

    
// }

// console.log(x (arrr));



// let x = "Rohit Mehra"


// console.log(x.split(" "));


// let str = "Robert Sharma"

// for (let index = 0; index < str.length; index++) {
//     console.log(str[index], "sss");
    
//     if (str[index] == " ") {
//         console.log(true);
        
//     }
    
// }





// function checkTypof(arr) {
//     let sum = 0

// for (let index = 0; index < arr.length; index++) {
   
//      if ( typeof arr[index] === "number") {
        
//          sum += arr[index]

//      }
// }
// return sum
    
// }

// console.log(checkTypof([1, "Olma" , "Anor" ,15]));



// function unitlNumber(num) {
    
// let x = 1

// for (let index = 1; index <= num; index++) {
//    x *= index
    
// }

// return x
    
// }

// console.log(unitlNumber(6));



    
//  function numberr(n, x) {

//     let  a = []
    
//     for (let index = 1; index <= n; index++) {
        
//         if (index % x === 0) {
            
//             a.push(index)
//         }
        
//     }

//     return a
//  }

//  console.log(numberr( 10, 3));
 

// let name = prompt("Ismingizni kiriting")
// let surname = prompt("Familyangizmi kiriting")

// alert(`${name} ${surname}`)


// let num = prompt("Son kiriting")
// let fruts = prompt("Meva nomi")

// let  str = " "

// for (let index = 1; index <= num; index++) {
    
//     str += fruts
    
// }

// alert(str)


// let arr =["behi" , "olma" , "anor"]
// let someArr = ""

// for (let index = 0; index < arr.length; index++) {
//    for (let j = arr[index].length-1; j >=0; j--) {
//     someArr += arr[index][j]
    
//    }
// }

// console.log(someArr.split(' '));



function remo (str) {

    let result = ""
    let arr = str.splite('');

   for (let index = 0; index < arr.length; index++) {
      for (let j =  arr[index].length-1; j>=0 ; j--) {
        
        result += arr[index][j]
        
      }
      result += " "
    
   }

return  result;

}


console.log(remo(' B Hello'));















