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
    name;
    constructor(ism){
    this.name = ism
    }
}

//drived class
class Dog extends Animal {
    
  constructor (rang){
    super("Rex")
    this.color = rang
  }

}


const rext = new Dog ("Blur")

console.log(rext);

//drived class
class Cat extends Animal {
    
    constructor (rang){
      super()
    this.color = rang
  }
}

const Garfild = new Cat("Garfild", "Red")
console.log(Garfild);
