// ans 1
// let n = 10;
// for (let i = 1; i<=n; i++){
//     console.log(i);
// }

// ans 2 
// let n = 10;
// for (let i = 1; i<=n; i++){
//     console.log(n - i + 1);
// }

// ans 3 .
// let n = 10;
// for(let i = 1; i<=n; i++){
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }

// ans 4.
// let n = 5;
// let sum = 0;
// for (let i = 1; i<=n; i++){
//     sum = sum + i;

// }
// console.log("Sum = ", sum);

// SECOND METHOD 
// optimized way
// brute force solution
// console.time()
// let num4a = 10000000000;
// let sum = num4a * (num4a + 1) / 2;
// console.log(sum);
// console.timeEnd()

// ans 5.
// let n = 5;
// let fact = 1;
// for(let i = 1; i<=n; i++){
//     fact = fact * i;
// }
// console.log("Factorial = ", fact);

// ans 6. 
// let n = 10;
// let sum = 0;
// for(let i = 1; i<=n; i++){
//     if (i % 2 === 0){
//         sum = sum + i;
//     }
// }
// console.log("Sum of Even numbers from 1 to n is ", sum);

// ans 7. 
// let n = 5;
// for(let i = 1; i<=n; i++){
//     console.log(i * i);
// }

// HOME WORK 
// q1.
// console.time("test")
// let n = 30;
// for(let i = 1; i<=n; i++){
//     if (i % 3 === 0 && i  % 5 === 0){
//         console.log(i);
//     }
// }
// console.timeEnd("test");

// q2.
// let n = 10;
// let sum = 0;
// for(let i = 1; i<=n; i++){
//     if (i % 2 !== 0){
//         sum+=i;
//     }
// }
// console.log(sum);

// q3.
// let n = 5;
// for(let i = 1; i<=n; i++){
//     console.log(i * i * i);
// }

// q4. 
// let n = 20;
// for(let i = 1; i<=n; i++){
//         let sqrt = Math.sqrt(i);

//         if (Number.isInteger(sqrt) && i % 2 === 0){
//             console.log(i);
//         }
// }
// console.time()
// THIS IS CALLED BRUTE FORCE SOLUTION 
// IT TAKES 2 SECONDS 
// let num = 100000000;
// let sum = 0;

// for (let i = 1; i<=num; i++){
//     sum = sum + i;
// }
// console.log(sum);

// console.timeEnd()

// OPTIMIZED SOLUTION 
// console.time()
// let num = 100000000;
// // let sum = 0;
// let sum = num * (num + 1) / 2;
// console.log(sum);

// console.timeEnd()

// let num = 20;
// for (let i = 1; i<=num; i++){
//     let root = Math.sqrt(i)
//     if (i % 2 === 0 &&  Number.isInteger(root)){
//         console.log(i);
//     }
// }


// DOM QUESTIONS  (qs)
// let inputField = document.querySelector(".inputField")
// let btn = document.querySelector(".btn");
// let numbers = document.querySelector(".numbers");
// function generateNumbers(){
//     let value = Number(inputField.value);
//     numbers.innerHTML = "";
//     for(let i = 1; i<=value; i++){
//         let divElem = document.createElement("div");
//         divElem.textContent = i;
//         numbers.append(divElem)

//     }
//     inputField.value = "";
// }
// btn.addEventListener("click", generateNumbers)

// (qs 2)
const homework1 = (e) => {
  e.preventDefault();
  let inputValue = parseInt(e.target[0].value);
  const displayDiv = document.getElementById("number-div");
  displayDiv.innerHTML = "";
  for (let i = 1; i <= inputValue; i++) {
    if (i % 3 === 0 && i % 5 === 0) displayDiv.innerHTML += `${i} - `;
  }
  e.target[0].value = "";
};
