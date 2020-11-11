var day = process.argv[2];
var monthName = process.argv[3];
var month = 0;
if (monthName == 'June') {
    month = 5;
}
else if (monthName == 'May') {
    month = 4;
}
else if (monthName == 'April') {
    month = 3;
}
else if (monthName == 'March') {
    month = 2;
}
var start = new Date(2020, 02, 20);
var end = new Date(2020, 05, 20);
var dateCheck = new Date(2020, month, day);
var isPresent = false;
if (dateCheck.getTime() <= end.getTime() && dateCheck.getTime() >= start.getTime()) {
    isPresent = true;
}
console.log(isPresent); 