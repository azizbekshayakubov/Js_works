const request =  new  XMLHttpRequest()
console.log(request.readyState);


//GET, POST,DELETA,UPDATE

request.addEventListener('readystatechange' , ()=>{
    console.log(request, request.readyState);
    
})

request.open('GET' , 'https://jsonplaceholder.typicode.com/todos')
request.send()


