// let array= [1,null,"Aziz",undefined,1.24,true]
// let numb=1
// let somt= null


// console.log(typeof array);
// console.log(typeof somt)

let userPhone="998934448899"
let userPhone1="998934448891"
let userPhone2="998934448892"


// console.log(userNumber.length);

//Join Arrayni string otkazib beradi
// console.log(userNumber.join(" "));

//Oxirida kelgan elementni qaytaradi
// console.log(userPhone.lastIndexOf("4"));


// Boshida kelgan birinchisini topib beradi
// console.log(userPhone.indexOf("3"));



//arraylarni bir-biriga qoshish uchun ishlatamiza. Avvalgi arrrayni ozgartirmaydi.

let userNumber =[ "998934448892","998934448891","998934448899"]

let newArr = ["user","password",null,9]

// console.log(userNumber.concat(newArr));
// console.log(newArr);
// console.log(userNumber);

//Array oxiriga elemnt qoshish uchun ishlatidi. Original arrayni ozgartiridi
// userNumber.push(80)
// userNumber.push("hello")
// userNumber.push(null)
// console.log(userNumber);


////Array oxiriga elemntni olib tashlash uchun ishlatidi. Original arrayni ozgartiridi
// userNumber.pop()
// console.log(userNumber);

//Array birinchi indexsni olib tashlash uchun ishlatidi. Original arrayni ozgartiridi
// userNumber.shift();
// console.log(userNumber);

//Array birinchi indexsni element qoshish uchun ishlatidi. Original arrayni ozgartiridi
// userNumber.unshift("Hello Uzbekstan");
// console.log(userNumber);




let nameEl= ["Azizbek" , "Dilbor", "Hurshida", "Bahoridr", "Bek"]
//  ["Azizbek", "Dilbar","Hurshida", "BAHODIR"]
// console.log(nameEl.length-1);// index
 let lastEl = nameEl.slice(-1).join(" ").toUpperCase();
 nameEl.pop()
 nameEl.push(lastEl)
 console.log(nameEl);

