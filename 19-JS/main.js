// let number = 6.4

// // console.log(Math.random());
// // console.log(Math.floor(number));
// // console.log(Math.ceil(number));
// console.log(Math.trunc(number));
// console.log(Math.round(number));
// console.log(Math.round(number));
// console.log(Math.pow(4, 1/2));
// console.log(Math.abs(-5));

// // Super class
// class Animal {
//     constructor(name){
//     this.name = name
//     }

//     speak (){
//       return `My name is ${this.name}`
//     }
// }

//drived class


class Animal{
  constructor(options) {
    this.name = options.ism;
    this.hasTail = options.dumiBormi;
    this.color = options.rangi
    this.type = options.turi

  }
 }


class Dog extends Animal {
  constructor(options) {
    super(options)
    this.paroda = options.nasl
  }
}

const rext = new Dog ({
  ism: "Rex",
  dumiBormi: true,
  rangi: "red",
  turi: "Yertqich",
  nasl: "Bo'ribosar"
})


console.log(rext);


class Cat extends Animal {
  constructor(options) {
    super(options) 
    this.aga = options.yosh
  }
}


const Mosh = new Cat ({
   ism: "Mosh",
  dumiBormi: true,
  rangi: "wihit",
  turi: "uy xayvoni",
  yosh: 24
})


console.log(Mosh);






