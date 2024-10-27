const username = document.querySelector("#username")
const form = document.querySelector("form")

form.addEventListener('submit' , e => {
    e.preventDefault() 
    // console.log(form.username.value);
    console.log(e.target.username.value);
    
    
})









 







































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




