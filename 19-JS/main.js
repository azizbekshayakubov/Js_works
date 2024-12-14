// let number = 6.4

// // console.log(Math.random());
// // console.log(Math.floor(number));
// // console.log(Math.ceil(number));
// console.log(Math.trunc(number));
// console.log(Math.round(number));
// console.log(Math.round(number));
// console.log(Math.pow(4, 1/2));
// console.log(Math.abs(-5));

// Super class
class Animal {
    constructor(name){
    this.name = name
    }

    speak (){
      return `My name is ${this.name}`
    }
}

//drived class
class Dog extends Animal {}

const rext = new Dog ("Rex")

console.log(rext.speak());

//drived class
class Cat extends Animal {
    
    constructor (rang){
      super()
    this.color = rang
  }
}

const Garfild = new Cat("Garfild", "Red")
console.log(Garfild);
