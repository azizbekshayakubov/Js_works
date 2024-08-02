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


let arr= [1,2,3,4,5]

function x (arr) {
    let arr1 = []
    let sum = 0

    for (let index = 0; index < arr.length; index++) {
        
        console.log(arr[index]);
        

         if (arr[index] % 2 === 0) {
         
        // sum += arr[index]
        arr1.unshift(sum)
    } else {
        sum = sum +arr[index]

        arr1.push(sum)
    }
        
        
    }

    return [arr1]
}

console.log(arr1);








