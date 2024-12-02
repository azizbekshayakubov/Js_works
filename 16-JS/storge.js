// //store data in localstorge

// localStorage.setItem("username", "Shoyoqubov")
// localStorage.setItem("age", "25")
// localStorage.setItem("isMerrid", true)

// //get data
// let a =localStorage.getItem("username") 
// let b =localStorage.getItem("age") 
// let d =localStorage.getItem("isMerrid") 
// console.log(a)
// console.log(b)
// console.log(d)

// //update

// localStorage.setItem("isMerrid" ,false)
// localStorage.username = "BEk"
// localStorage.username = "BEk"
// localStorage.clear()

// //delete

// // localStorage.removeItem("age")


const todos = [
    { 
      id:1,
      title:"lorem"
    },
     { 
      id:2,
      title:"lorem44"
    },
     { 
      id:3,
      title:"loremrere"
    }, { 
      id:4,
      title:"loremfasfs"
    },
];

let jstodos = JSON.stringify(todos)

localStorage.setItem("td", jstodos)
let b = localStorage.getItem("td")

console.log(JSON.parse(b));



