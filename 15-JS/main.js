function fetchUr() {
  let request  = fetch('https://jsonplaceholder.typicode.com/todos/')
      request.then(response => response.json())
      .then(json => 
       json.map((item => {
       console.log(item);
       
        if (item.id === 10) {
            item.password = "234"
        }

       const container = document.querySelector ('div')
       const heading = document.createElement('h1')
       const password = document.createElement('h3')
       heading.textContent = item.title 
       password.textContent = item.completed
       container.append(heading)
       container.append(password)
       
      }
      )))
}

fetchUr()




















































// const getTodos = (url ,callback) =>{
// const request =  new  XMLHttpRequest()
// request.addEventListener('readystatechange' , ()=>{
//     if (request.readyState === 4 && request.status === 200) {
//        let data = JSON.parse(request.responseText)
//        callback(undefined,data)
//     } else if(request.readyState === 4){
//         callback("cloud not fetch" , undefined) 
//     }
// })
// // CRUD 
// request.open('GET' , url)
// request.send()
// }


// const container = document.querySelector('div')
// getTodos("users.json" , (err, data)=>{

//     if (!data) {
//         console.log(err);
        
//     } else {
//         console.log(data);
//          getTodos("todos.json" , (err, data)=>{

//     if (!data) {
//         console.log(err);
        
//     } else {
//         console.log(data);
        
        
//        }
//     }
// )
        
//        }
//     }
// )