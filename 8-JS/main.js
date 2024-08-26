//  const title = document.querySelectorAll(".title")   
//  const title2 = document.getElementById("title")   
//  const title = document.getElementsByClassName("title")   
//  const title = document.getElementsByTagName("h1") 

// const subtitle = document.querySelector("p")
// const title = document.querySelectorAll("h1")

// // subtitle.innerHTML = "<h1>Hello worddddd</h1> "
// // title.innerText = "salom dunyo"

// for (let index = 0; index < title.length; index++) {
    
// console.log(title[index]);
// title[index].innerText = "Salom"
// }

const link = document.querySelector("a");

// console.log(link.getAttribute("href"));



link.setAttribute("href" , "github.com")
link.innerText= "Hello"
link.setAttribute("class" , "link")

//css  style In Inline

link.style.border = "1px solid red"
// link.style.color  = "aqua" 

link.classList.add("havola")
link.classList.add("nimadir")
link.classList.remove("havola")
link.classList.toggle("link")
link.textContent = ("Social medio")

function  switchUp (number){

  let  arr =   ["One" , "Two" , "Three" ]


  return arr[number]

}


console.log(switchUp(2));


  