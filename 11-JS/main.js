

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
const span = document.querySelector('span')
const btn = document.querySelector('button')

// console.log(span.nextElementSibling.style.color = "red");

// console.log(span.previousElementSibling.classList.add('smth'));

// console.log(span.parentElement.classList.add('smth'));

let list = Array.from(container.children)

list.map(item=>{
    
    item.addEventListener('click' , (e) => {
        
        e.target.classList.toggle('smth');
        

    // item.style.color = "red "
    // item.classList.toggle('smth')
    
    })
    
})

btn.addEventListener('click' ,  (e)=> {

let lint =  document.createElement('a')
lint.textContent = "google"
lint.setAttribute("href" , "#")
// console.log(lint);

container.append(lint)



    

    // container.innerHTML += '<h2>Heading2</h2>'

//   console.log( e.target , "bosildi");
  

})







// console.log(container.children);
// console.log(Array.from(container.children)[3]);



// let list = Array.from(container.children)

// list.map(item=>{
//     item.classList.add("smth")
    
// })





//STYLE
// span.style.color = "red"
// span.style.backgroundColor = "black"

// span.setAttribute( "class" , "smth") 

// span.classList.add('smth')

// console.log(span)

