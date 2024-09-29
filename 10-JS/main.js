
let users = [
    {
        id:1,
        surname: "Shoyoqubov",
        name: "Azizbek",
        isStudent: "true",
        budjet:1250
    },
    {
        id:2,
        surname: "Shermuhamedov",
        name: "Mushtariy",
        isStudent: "false",
        budjet:1100
    },
    {
        id:3,
        surname: "To'laganov",
        name: "Odil",
        isStudent: "false",
        budjet:1350
    },
]


const arr = [123,456,6554]

// let user = arr.includes(123)

let user = users.find(function(item,index, arr){
    return item.name == "Odil"
})

console.log(user);
