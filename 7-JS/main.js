let users =  {
   id:1,
   name:"Firdavs",
   surname:"Solijonov",
   age:18,
   isMarried: false,
   phone: ["+9989111122333","+9989334555544","+998900009988"],
   loginIN: function(name) {
     return (`${this.name} Login in, and his age is ${this.age}` );
   },

   logOut () {
    return `${this.name} is log out `
   },
   phoneMeto(){
    return this
   }
}

//Contextgacha bo'lgan yo'lni korsatadigan keyword- this

// console.log(users.logOut());
// console.log(users.phoneMeto());
// console.log(this.document);
// console.log(this.location);


let obj = {
    title:"lorem",
    whattile(){
        return this
    }
}

console.log(obj.whattile());



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