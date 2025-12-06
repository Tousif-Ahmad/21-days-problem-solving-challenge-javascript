console.log("Hello Sam");

// q1. find the maximum number
// function maxOfThree(num1, num2, num3) {
//   if (num1 >= num2 && num1 >= num3) {
//     console.log("Num1 is greater", num1);
//   } else if (num2 >= num1 && num2 >= num3) {
//     console.log("Num2 is greater", num2);
//   } else {
//     console.log("Num3 is greater", num3);
//   }
// }
// maxOfThree(20,20,10)

// q2. check if number is zero, positive or negative
// let checkNumber = function(num){
//     if (num === 0){
//         console.log("Number is zero", num);
//     }
//     else if (num < 0){
//         console.log("Number is negative", num);
//     }
//     else{
//         console.log("Number is positive", num);
//     }
// }
// checkNumber(10);
// checkNumber(0);
// checkNumber(-10);

// q3. calculate electricity bill
// let totalBill;
// function calculateElectricityBill(units){
//     if (units <= 100){
//         totalBill = units * 5;
//     }
//     else if (units <= 200){
//         totalBill = (100 * 5) + (units - 100) * 7;
//     }
//     else if (units <= 300){
//         totalBill = (100 * 5) + (100 * 7) + (units - 200) * 10;
//     }
//     else{
//         totalBill = (100 * 5) + (100 * 7) + (100 * 10) + (units - 300) * 12;
//     }
//     console.log("Your Total Bill is ", totalBill);

// }
// calculateElectricityBill(20)
// calculateElectricityBill(120)
// calculateElectricityBill(230)

// q4. check if a character is a vowel or consonant
// let char = "S";
// let charLowerCase = char.toLowerCase();
// if (charLowerCase === "a" || charLowerCase === "e" || charLowerCase === "i" || charLowerCase === "o" || charLowerCase === "u"){
//     console.log("Vowel", char);
// }
// else{
//     console.log("Consonant", char);
// }

// q5. check leap year
// function checkLeapYear(year){
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//         console.log("It's a leap year", year);
//     }else{
//         console.log("Not a leap year", year);
//     }
// }
// checkLeapYear(2024);
// checkLeapYear(1900);
// checkLeapYear(2001);

// q6.  check characters
// function checkCharacters(char){
//     if (char.length !== 1){
//         alert("plz enter character at a time.")
//     }
//     if (/[a-z]/.test(char)){
//         console.log("LowerCase Character", char);
//     }
//     else if (/[A-Z]/.test(char)){
//         console.log("Uppercase Character", char);
//     }
//     else if (/[0-9]/.test(char)){
//         console.log("Digit Character", char);
//     }
//     else if (/[!@#$%^&*()_\-+={}[\]:;"'<>,.?/|]/.test(char)){
//         console.log("Special Character", char);
//     }
// }
// checkCharacters("a")
// checkCharacters("A")
// checkCharacters("10")
// checkCharacters("%")

// q7. check right angled triangle
// function checkRightAngled(a,b,c){
//     // let sides = [a,b,c].sort((x,y)=>x-y);
//     // let x = sides[0];
//     // let y = sides[1];
//     // let z = sides[2];
//     if (a * a + b * b === c * c){
//         console.log("Right Angled triangle");
//         return;
//     }
//     else if (a === b && b === c){
//         console.log("Equilateral Triangle");
//         return;
//     }
//     else if (a === b || b === c || a === c){
//         console.log("Isosceles Triangle");
//         return;
//     }
//     else{
//         console.log("Scalene Triangle");
//     }
// }
// checkRightAngled(2,2,9)

// q8.. Calculate income tax based on slabs
// function calculateIncomeTax(income) {
//   let tax = 0;

//   if (income <= 250000) {
//     tax = 0; // No tax
//   } else if (income <= 500000) {
//     // 5% on income above 2,50,000
//     tax = (income - 250000) * 0.05;
//   } else if (income <= 1000000) {
//     // 5% on second slab + 20% on remaining
//     tax = (500000 - 250000) * 0.05; // Second slab
//     tax += (income - 500000) * 0.2; // Third slab
//   } else {
//     // 5% on second slab + 20% on third slab + 30% on remaining
//     tax = (500000 - 250000) * 0.05; // Second slab
//     tax += (1000000 - 500000) * 0.2; // Third slab
//     tax += (income - 1000000) * 0.3; // Fourth slab
//   }

//   return tax;
// }

// // Example usage:
// let income = 750000;
// let tax = calculateIncomeTax(income);
// console.log("Income Tax for ₹" + income + " = ₹" + tax);

// SECOND APPROACH 
function calculateIncomeTax(income) {
    let tax = 0; // Start with 0 tax

    // First slab: 0 – 2,50,000 → 0% tax
    if (income <= 250000) {
        tax = 0; // No tax in this slab
    } 
    // Second slab: 2,50,001 – 5,00,000 → 5% tax
    else if (income <= 500000) {
        // Only the part above 2,50,000 is taxable at 5%
        let taxableAmount = income - 250000;
        tax = taxableAmount * 0.05;
    } 
    // Third slab: 5,00,001 – 10,00,000 → 20% tax
    else if (income <= 1000000) {
        // Step 1: Tax for second slab (5% on 2,50,000)
        let secondSlabTax = (500000 - 250000) * 0.05;

        // Step 2: Tax for third slab (20% on income above 5,00,000)
        let thirdSlabTax = (income - 500000) * 0.20;

        // Step 3: Total tax = second slab + third slab
        tax = secondSlabTax + thirdSlabTax;
    } 
    // Fourth slab: Above 10,00,000 → 30% tax
    else {
        // Step 1: Tax for second slab (5% on 2,50,000)
        let secondSlabTax = (500000 - 250000) * 0.05;

        // Step 2: Tax for third slab (20% on 5,00,000)
        let thirdSlabTax = (1000000 - 500000) * 0.20;

        // Step 3: Tax for fourth slab (30% on income above 10,00,000)
        let fourthSlabTax = (income - 1000000) * 0.30;

        // Step 4: Total tax = sum of all slabs
        tax = secondSlabTax + thirdSlabTax + fourthSlabTax;
    }

    return tax;
}

// Example usage:
let income = 750000;
let tax = calculateIncomeTax(income);
console.log("Income Tax for ₹" + income + " = ₹" + tax);
