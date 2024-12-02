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


class Car {
    name;
    color;
    cost;
    type;

    constructor(name,color,cost,type) {
        this.name=name
        this.color=color
        this.cost=cost
        this.type=type
    }
}

const Malibu = new Car("Malibu", "red", 30000, "sedan")
const Spark = new Car("Spark", "black", 50000, "supercar")
console.log(Malibu);
console.log(Spark);


