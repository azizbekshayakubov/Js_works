

// let  a = "stengin"
// let b = a 
// b = "sister"
// // console.log(a);


// let obj = {
//     id:1,
//     name: "Anvar",
//     type: "Strong"
// }


// let x = obj
 
// x=obj

// console.log(obj);


// let arr = [1,3,5,6]

// let a = arr

// arr = null

// a = "Salom"

// console.log(a);

// let name = "Saidmurod"

// let  a = name

// let b = a

// a = "Bobur"

// console.log(name);



const container = document.querySelector('div')

// console.log(container.children);
// console.log(Array.from(container.children)[3]);

let list = Array.from(container.children)

list.map(item=>{
    console.log(item);
    
})
