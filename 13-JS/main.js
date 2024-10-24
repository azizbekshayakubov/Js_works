const itmes = document.querySelectorAll("li")
const list = document.querySelector("ul")
const btn = document.querySelector("button")
const div = document.querySelector("div")

div.addEventListener("mouseover" , (e)=>{
    console.log(`x:${e.offsetX}, y:${e.offsetY}`);
    
})

// itmes.forEach((item)=>{
 
//    item.addEventListener("click" , (e) =>{
//     // e.target.classList.toggle("active")
//     console.log("Clicked");
//     e.stopPropagation()
     
//    })
// })


btn.addEventListener("click" , (e)=>{
    list.innerHTML += `<li>New items</li>`
    
})


list.addEventListener("click" , (e)=>{
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("active")
    }
    e.stopPropagation()
    
})


