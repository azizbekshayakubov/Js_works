const form = document.querySelector(".quiz-form")

const correktAnwor = ["B","A","A","B"]

form.addEventListener('submit', e =>{
    e.preventDefault()
    let userAnwor = [
        e.target.q1.value, 
        e.target.q2.value,
        e.target.q3.value,
        e.target.q4.value
    ];
    
})