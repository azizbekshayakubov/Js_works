
const candy  ={
  name: "Chocotella",
  weight: "500g",
  color:"black",
  ingredients:[ 'sugar' , 'cacao' , 'nut' , 'milk']
}


class Candy {
  //members
  //behaviours/method
  //field/attribete/key

  name
  weight
  color
  ingredients  
   
  constructor(n, w, c, i) {
    this.name = n
    this.weight = w
    this.color = c 
    this.ingredients = i
  }

  isOpen(){
    return `${this.name} is Open`;
    
  }

}


const snikers = new Candy (
  

  "Snikers" ,"250g", "black" , [ 'sugar' , 'cacao' , 'nut' , 'milk']
)

const Chocotella = new Candy (
  "Chocotella" ,"350g", "red" , [ 'sugddar' , 'cacado' , 'nudt' , 'mildk']
)

console.log(snikers.isOpen());
console.log(Chocotella.isOpen());
