const itmes = document.querySelectorAll("li")
const list = document.querySelector("ul")
const btn = document.querySelector("button")

itmes.forEach((item)=>{
 
   item.addEventListener("click" , (e) =>{
    e.target.classList.toggle("active")
     
   })
})


btn.addEventListener("click" , (e)=>{
    list.innerHTML += `<li>New items</li>`
    
})