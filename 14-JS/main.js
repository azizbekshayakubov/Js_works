const getTodos = (callback) =>{
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
request.open('GET' , 'https://jsonplaceholder.typicode.com/todos')
request.send()
}
const container = document.querySelector('div')
getTodos((err, data)=>{

    if (!data) {
        console.log(err);
        container.innerHTML = "<h1>cloud not fetch</h1>"
        
    } else {
        data.map(item =>{
        let list = document.createElement('h3')
        let span = document.createElement('span')
        list.textContent = `Title:${item.title}`
        span.textContent = `Completed:${item.completed}`
        container.append(list)
        container.append(span)
       })
    }
})