//  function Cars (model , color) {
//     this.model= model
//     this.color= color  
//  }

// let malibo = new  Cars("Model" ,"Red")
// let matiz = new  Cars("Sedan" ,"Black")

// console.log(malibo,matiz);

// class Cars {
//     model;
//     color;
// }

// let malibo = new Cars()


// const Malibu = {
//     name: "Malibu",
//     color:"Red",
//     cost:30000,
//     type:"Supercar"
// }


// class Car {
//     name;
//     color;
//     cost;
//     type;

//     constructor(name,color,cost,type) {
//         this.name=name
//         this.color=color
//         this.cost=cost
//         this.type=type
//     }
// }
// //instance 1
// const Malibu = new Car("Malibu", "red", 30000, "sedan")

// //instance2
// const Spark = new Car("Spark", "black", 50000, "supercar")
// console.log(Malibu);
// console.log(Spark);

// class Cat {
//     name;
//     color;
//     age;
//     paroda;
//     constructor(name, color, age, paroda  ) {
//         this.color= color 
//         this.name= name;
//         this.age = age
//         this.paroda = paroda    

//     }

//   //metod

//   speak(){
//     console.log( `Salom dunyo mening ismi ${this.name}`);
    
//   }
// }

// //metod




// const Gardild = new Cat("Garfidd" , "grawn" , 23 , "look")
// const mushuk = new Cat("Etilik mushuk" , "orange" , 23 , "Hello")

// console.log(Gardild.speak());



  
class Animal {
    
    name;
    color;

    constructor(name, color){
      this.name = name
      this.color = color 
    }
}


class Dog extends Animal{
     name;
     color;
     constructor(name, color) {
        super()
        this.name= name
        this.color = color
     }
}


//instance from DOG
const pitbull= new Dog( "Pitbull" , "yellow")

console.log(pitbull);

