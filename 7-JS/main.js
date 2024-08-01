// let users =  {
//    id:1,
//    name:"Firdavs",
//    surname:"Solijonov",
//    age:18,
//    isMarried: false,
//    phone: ["+9989111122333","+9989334555544","+998900009988"],
//    loginIN: function(name) {
//      return (`${this.name} Login in, and his age is ${this.age}` );
//    },

//    logOut () {
//     return `${this.name} is log out `
//    },
//    phoneMeto(){
//     return this
//    }
// }

//Contextgacha bo'lgan yo'lni korsatadigan keyword- this

// console.log(users.logOut());
// console.log(users.phoneMeto());
// console.log(this.document);
// console.log(this.location);


// let obj = {
//     title:"lorem",
//     whattile(){
//         return this
//     }
// }

// console.log(obj.whattile());



// let person = users;

// console.log(users.loginIN());
// users = null

// console.log(person);
// console.log(person.loginIN());
// console.log(users.logOut());
// console.log(users.loginIN());

// // console.log("Bu person=>", person );

// // users.name = "Doston"
// // users.loginIN = "bu string"
// // users.fullName= "Firdavs Erinov"
// console.log();
// users = null

// console.log(users ,person);

// let radius = 10;
// const pi =3.14;

// // console.log(radius,pi);

// // math operators +,-,*,/,**,

// // let result = 10%3

// // console.log(result);

// // console.log(10 / 2);

// // let result = pi * radius ** 2

// //order of operation

// // let result = 5 * (10-3) ** 2

// let like = 10

// // like = like + 1
// // like++
// // like--
// // like = like+10
// // like += 12
// // like -= 8
// // like /= 2

// // like *= 2

// // //Nan -not a number

// // console.log(5/"salom");

// // console.log(like);


// let result = 'the blog has ' + like + ' likes'

// console.log(result);


const title = 'Rastamojka qachon ochiladi ? yohud Monopoliya'
const author = "Lag'mon markazi"
const likes= 3500000

// console.log(author);
//concatentation way

// let result = 'Bu post nomi ' + title + ' ' + author + ' tominidan yozilgan.' + ' va bu posta ' + likes + ' like bor'
// console.log(result);


//template string way

// let result = `Bu post nomi ${title}, ${author} tomindan yozilgan. Va bu postda ${likes} ta like bor`

let result = `
 <h2>${title}</h2>
 <p>${author}</p> tomonidan yozilgan
 <span>${title}</span>
`

console.log(result);

