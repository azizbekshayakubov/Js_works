
let users = [
    {
        id:1,
        surname: "Shoyoqubov",
        name: "Azizbek",
        isStudent: true,
        budjet:1250
    },
    {
        id:2,
        surname: "Shermuhamedov",
        name: "Odil",
        isStudent: false,
        budjet:1100
    },
    {
        id:3,
        surname: "To'laganov",
        name: "Odil",
        isStudent: false,
        budjet:1350
    },
]


const arr = [123,456,6554]

// let user = arr.includes(123)

// let user = users.find(function(item,index, arr){
//     return item.name == "Odil"
// })


// let user = users.filter(function(item,index, arr){
//     // return item.isStudent == false
   
// //    let bud = item.budjet > 1000

//     if (item.budjet > 1900) {
     
//         return item
//     } 

   
// })

// console.log(user);

// const ages = [40,50,19]

// let checkAge = ages.every(function(ages){
//     return ages > 18
// })

// console.log(checkAge);

// const ages = [40,15,19]

// let checkAge = ages.some(function(ages){
//     return ages > 18
// })

// console.log(checkAge);

const ages = [40,50,19,14]

let checkAge = ages.sort(function(ages){
    return ages > 18
})

console.log(checkAge);


