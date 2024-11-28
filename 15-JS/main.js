
async function fetching() {
   try {
    let request = await fetch ("todos.json")
    let request2 = await fetch ("useres.json")
    let res =  await request.json()
    let res2 =  await request2.json()
    let data = res.map(item=> console.log(item))
    let data2 = res2.map(item=> console.log(item))
    return {data, data2}
   } catch (err) {
    console.log(err);
    
   }

    
        //     const container = document.querySelector ('div')
        //    const heading = document.createElement('h1')
        //    const password = document.createElement('h3')
        //    heading.textContent = item.title 
        //    password.textContent = item.completed
        //    container.append(heading)
        //    container.append(password)
    

    
    
}

fetching()







// function fetchUr() {
//   let request  = fetch('https://jsonplaceholder.typicode.com/todos/')
//       request.then(response => response.json())
//       .then(json => 
//        json.map((item => {
//        console.log(item);
       
//         if (item.id === 10) {
//             item.password = "234"
//         }

//        const container = document.querySelector ('div')
//        const heading = document.createElement('h1')
//        const password = document.createElement('h3')
//        heading.textContent = item.title 
//        password.textContent = item.completed
//        container.append(heading)
//        container.append(password)
//       }
//       ))).catch(err=>console.log(err))
      
// }

// fetchUr()


// const promise =  new Promise((resolved, rejected)=>{
//       resolved("data keldi")
//       rejected("there are some errors")
// })


//handle  promise boshqarish
// 1) then=> promise chaining .catch(err => errs)
// 2) async await

// promise.then((data)=> console.log(data)).catch(err=>console.log(err));

// function fetching (params) {
//     let request = fetch("todos.json")
//     console.log(request);
    
    
// }

// fetching()
// console.log(promise);



















































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