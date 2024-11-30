// const now = new Date ()
// const befor = new Date("Sat Nov 30 2023 22:10:43")
// let differ = now-befor
// let minut = Math.round(differ /1000/60)
// let hour = Math.round(minut/60)
// let day = Math.round(hour/24)
// console.log(now.getTime(), befor.getTime(), minut,hour,day);

// console.log(`last seen ${day} ago`);




// console.log(now);

// console.log("Year: ", now.getFullYear());
// console.log("Month", now.getMonth() +1);

// //Hafta kuni

// console.log("Day", now.getDay());

// // Sana 
// console.log("Day:",now.getDate());

// //Hours
// console.log("Hours", now.getHours());
// console.log("Minuts", now.getMinutes());
// console.log("Sekunds", now.getSeconds());


// //Timestap
// console.log(now.getTime());
// console.log(now.toDateString());
// console.log(now.toLocaleString());
// console.log(now.toTimeString());




// // Math.ceil()
// // Math.floor()
// // Math.random()
// // Math.round()
// // Math.trunc()
// // Math.pow()



const now = new Date()
 
 const  hours = now.getHours()
const minuts  = now.getMinutes()
const sekunds = now.getSeconds()

console.log(`${hours}: ${minuts}: ${sekunds}`);
