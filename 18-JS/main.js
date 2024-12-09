
// const candy  ={

//   name: "Chocotella",
//   weight: "500g",
//   color:"black",
//   ingredients:[ 'sugar' , 'cacao' , 'nut' , 'milk']
// }


// class Candy {
//   //members
//   //behaviours/method
//   //field/attribete/key

//   name
//   weight
//   color
//   ingredients  
   
//   constructor(n, w, c, i) {
//     this.name = n
//     this.weight = w
//     this.color = c 
//     this.ingredients = i
//   }

//   isOpen(){
//     return `${this.name} is Open`;
    
//   }

//  //set / get

//  get inform () {
//   return  ` its ${this.name}  and is has ${this.weight}`
//  }
   
// }


// const snikers = new Candy (
  

//   "Snikers" ,"250g", "black" , [ 'sugar' , 'cacao' , 'nut' , 'milk']
// )

// const Chocotella = new Candy (
//   "Chocotella" ,"350g", "red" , [ 'sugddar' , 'cacado' , 'nudt' , 'mildk']
// )

// console.log(snikers.isOpen());
// console.log(Chocotella.inform);


class Tools {
  constructor (book, pencil,lunchBox, era){
    this.book = book
    this.pencil = pencil
    this.container = lunchBox
    this.eraser = era
  }

  //ecncapulation

  get bag() {
    return `Bu bagni ichida ${this.book}, ${this.pencil} , ${this.container}, ${this.eraser}  bor`
  }

  set changeBox (newName) {
    if (typeof newName === "string") {
      return this.book = newName
    } else {
      return this.book
    }
  }
}



//instance

const obj = new Tools ( "Viqro" , "Ruchka" ,"Box", "Eraa" )
obj.changeBox= ["hello"]
console.log(obj);

