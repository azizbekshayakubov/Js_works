// const username = document.querySelector("#username")
const form = document.querySelector("form")
const span = document.querySelector("span")
let pattern = /^[a-zA-Z]{6,10}$/

form.addEventListener('submit' , e => {
    e.preventDefault() 
   
    let inputValue = e.target.username.value
    if (pattern.test(inputValue)) {
        span.innerText = "To'g'ri"
    } else {
        span.textContent = " "
    }
    form.reset()
})



form.addEventListener('keyup' , e =>{
let inputValue = e.target.value;
if (pattern.test(inputValue)) {
    e.target.style.border = "2px solid green"
} else {
    e.target.style.border = "2px solid red"
}
    
})

// let username = "Alijsonr"
// // let result = pattern.test(username);
// let result = username.search(pattern);

// console.log(result);


//test()  true/false
//search() 0/-1

//RegEx = Regular expression









 







































// const itmes = document.querySelectorAll("li")
// const list = document.querySelector("ul")
// const body = document.querySelector("body")
// const btn = document.querySelector("button")
// const div = document.querySelector("div")
// const span = document.querySelector("span")

// body.addEventListener("wheel" , (e)=>{
//     console.log(`x:${e.pageX}, y:${e.pageY}`);
//     if (e.pageX> 0 && e.pageY>500) {
//         span.style.display = "block"
//     }
    
// })

// // itmes.forEach((item)=>{
 
// //    item.addEventListener("click" , (e) =>{
// //     // e.target.classList.toggle("active")
// //     console.log("Clicked");
// //     e.stopPropagation()
     
// //    })
// // })


// btn.addEventListener("click" , (e)=>{
//     list.innerHTML += `<li>New items</li>`
    
// })


// list.addEventListener("click" , (e)=>{
//     if (e.target.tagName === "LI") {
//         e.target.classList.toggle("active")
//     }
//     e.stopPropagation()
    
// })




