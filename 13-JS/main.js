const form = document.querySelector(".quiz-form")
const result = document.querySelector(".result")
const userScore = document.querySelector(".score")

const correktAnwor = ["B","A","A","B"]

form.addEventListener('submit', e =>{
    let score = 0
    e.preventDefault()
    let userAnwor = [
        e.target.q1.value, 
        e.target.q2.value,
        e.target.q3.value,
        e.target.q4.value
    ];

    for (let index = 0; index < userAnwor.length; index++) {
        if (userAnwor[index] ===  correktAnwor[index]) {
           score += 25
        }
        
    }
    scrollTo(0,0)
    result.classList.remove("d-none")
    let i =0
    let timer = setInterval(() => {
    userScore.textContent = `${i}%`
    
    if (i == score) {
        clearInterval(timer)
    }else{
        i++
    }
    
}, 25);

    

})


// setTimeout(() => {
    
// }, 1000);