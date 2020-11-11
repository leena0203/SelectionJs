var choice = parseInt(process.argv[2]);
var num = parseInt(process.argv[3]);
switch (choice) {
    case 1: console.log(num + " Feet = " + num * 12 + " Inch");
        break;
    case 2: console.log(num + " Feet = " + num * 0.3048 + " Meter");
        break;
    case 3: console.log(num + " Inch = " + num / 12 + " Feet");
        break;
    case 4: console.log(num + " Meter = " + num * 3.281 + " Feet");
        break;
    default:
        console.log("Invalid input");
} 