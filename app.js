// ------- Answer 1 --------

// function power(a, b){
//     if(b === 0) return 1;
//     return b ** a
// }

// console.log(power(2, 4));

// ------- Answer 2 --------

// program to check leap year

// function checkLeapYear(year) {

// //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = prompt('Enter a year:');

// checkLeapYear(year);

// ------- Answer 3 --------

// var side1 = parseInt(prompt('Enter side1: '));
// var side2 = parseInt(prompt('Enter side2: '));
// var side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
// var s = (side1 + side2 + side3) / 2;

//calculate the area
// var areaValue = Math.sqrt(
//   s * (s - side1) * (s - side2) * (s - side3)
// );

// console.log(
//   `The area of the triangle is ${areaValue}`
// );

// ------- Answer 4 --------

// function per() {
//   function percentage() {
//     var math = 80;
//     var urdu = 70;
//     var Eng = 60;
//     return (math + urdu + Eng) / 300 * 100;
//   }
//   return percentage();
// }

// console.log(`Percentage of student One is ${per()}%`)

// ------- Answer 5 --------

// function myIndexOf(myString, word) {
//     var len = myString.length;
//     var wordLen = word.length;
//     for(var i = 0; i < len; i++) {
//         var j = 0;
//         for(j = 0; j < wordLen; j++) {
//             if(myString[i+j] != word[j]) {
//                 break;
//             }
//         }
//         if(j == wordLen) {
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(myIndexOf("Syed Faiz Ali", "a"));

// ------- Answer 6 --------

// var sentence = "My name is Syed Faiz Aijazi. I'm Learning Javascript";

// var withOutVowels = sentence.toLowerCase().replace(/[aeiou]/g, '');

// console.log(withOutVowels);

// ------- Answer 7 --------

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var res = str.match(/[aeiou]{2}/g);
//     return res ? res : 0;
//   }
  
//   var found = findOccurrences();
  
//   console.log(found);


// ------- Answer 8 --------

// var dongtaiToGaoyou = 97;

// function meter(){
//     console.log("Dongtai To Gaoyou " + dongtaiToGaoyou * 1000 + " meter");
// }
// meter();

// function foot(){
//     console.log("Dongtai To Gaoyou " + dongtaiToGaoyou * 3280.84 + " foot");
// }
// foot();

// function inch(){
//     console.log("Dongtai To Gaoyou " + dongtaiToGaoyou * 39370.1 + " Inch");
// }
// inch();

// function centimeter(){
//     console.log("Dongtai To Gaoyou " + dongtaiToGaoyou * 100000 + " Centimeter");
// }
// centimeter();


// ------- Answer 9 --------

// function overTimePayment(){
//     var workingHours = 25;
//     var overTime = 40 - workingHours;
//     var overTimePay = overTime * 12.00;
//     console.log(`Your over time payment is ${overTimePay}`);
// }

// overTimePayment();



// ------- Answer 10 --------

var withDraw = +prompt("Enter amount to withdraw!");

function amountWithdraw() {
    var a = withDraw / 100;
    var a1 = a.toFixed("");
    var b = withDraw % 100;
    var c = withDraw / 50;
    var d = withDraw % 50;
    if(a >= 1){
        console.log(`You will have ${a1} hundred notes`)
    }
    if(b >= 50){
        console.log(`with 1 fity note`)
    }
    else if(d <= 40){
        console.log(`with ${d} rupees`)
    }
}

amountWithdraw();