const getTodos = (url ,callback) =>{
const request =  new  XMLHttpRequest()
request.addEventListener('readystatechange' , ()=>{
    if (request.readyState === 4 && request.status === 200) {
       let data = JSON.parse(request.responseText)
       callback(undefined,data)
    } else if(request.readyState === 4){
        callback("cloud not fetch" , undefined) 
    }
})
// CRUD 
request.open('GET' , url)
request.send()
}



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