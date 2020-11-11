var num = process.argv[2];
let unit = num % 10;
let tens = Math.floor(num / 10) % 10;
let hundreds = Math.floor(num / 100) % 10;
let thousands = Math.floor(num / 1000) % 10;
console.log("Units : " + unit + " Tens : " + tens + " Hundreds : " + hundreds + " Thousands : " + thousands);