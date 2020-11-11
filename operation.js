var a = process.argv[2];
var b = process.argv[3];
var c = process.argv[4];
let result1 = a + b *c;
console.log("Operartion 0 (a + b *c): "+result1);
let result2 = a % b + c;
console.log("Operartion 1 (a % b + c): "+result2);
let result3 = c + a/b;
console.log("Operartion 2 (c + a/b): "+result3);
let result4 = a * b + c;
console.log("Operartion 3 (a * b + c): "+result4);
var max = 0 ;
var min = result1;
var opMax = 0;
var opMin = 0;
var numbers = [result1, result2, result3, result4];
for (var i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) {
        max = numbers[i];
        opMax = i;
    }
    if (min > numbers[i]) {
        min = numbers[i];
        opMin = i;
    }
}
console.log("Maximum is : " + max + " in Operation : " + opMax);
console.log("Minimum is : " + min + " in Operation : " + opMin); 
