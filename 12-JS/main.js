const buttons = document.querySelectorAll ("button")

const freeSpace = document.querySelector ("#freeSpace")

let arrBtn = Array.from(buttons)

arrBtn.map(item=> {

    item.addEventListener('click' , (e) =>{
         let valu = e.target.textContent

         switch(valu) {
                case 'DEL':
                    return freeSpace.textContent = freeSpace.textContent.slice(0,-1)
                    break;
                    case 'C':
                        return freeSpace.textContent = ""
                        break;
                        case '=':
                        try{
                            return freeSpace.textContent = eval(freeSpace.textContent)   
                        } catch {
                            freeSpace.textContent = err.message 
                        }
                default:
                    freeSpace.textContent += valu
         }


    })
})