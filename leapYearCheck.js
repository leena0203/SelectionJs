var year = process.argv[2];
var leapYearCheck = false;
if (year % 4 == 0 && year % 100 != 0) {
    leapYearCheck = true;
}
else if (year % 100 == 0) {
    if (year % 400 == 0) {
        leapYearCheck = true;
    }
}
console.log(year+ " is a " +leapYearCheck);