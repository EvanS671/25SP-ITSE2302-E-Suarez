//Each of my sentences
var sentence1 =
  "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are identical twins and the other child is the oldest by 1 year.";
var sentence2 =
  "The family has 6 relatives living in the San Antonio area, and 2 more relatives who live within 100 miles of the area.";
var sentence3 =
  "This summer they plan on traveling to El Paso to visit as many family members as possible.";

//All my sentence slices getting individual ones
var app1 = sentence1.slice(10, 11);
var app2 = sentence1.slice(52, 53);
var app3 = sentence1.slice(127, 128);
// console.log(app3);
var app4 = sentence2.slice(15, 16);
var app5 = sentence2.slice(63, 64);
var app6 = sentence2.slice(96, 99);
// console.log(app6);
var app7 = sentence2.slice(96, 98);
var app8 = sentence2.slice(98, 99);
// console.log(app7);
// console.log(app8);

//each of my app parsed numbers
app1 = parseInt(app1);
app2 = parseInt(app2);
app3 = parseInt(app3);
app4 = parseInt(app4);
app5 = parseInt(app5);
app6 = parseInt(app6);
app7 = parseInt(app7);
app8 = parseInt(app8);
// adding each app to make the sumtotal
sumtotal = app1 + app2 + app3 + app4 + app7 + app5;
console.log("The variable sumTotal is storing +" + sumtotal);
//replaces El Paso wih San Antonio
var app8 = sentence2.slice(41, 52);
var appS1 = sentence3.replace("El Paso", "San Antonio")
console.log(appS1);
//My while loop for the amount of cars seen 10 times
var i = 0;
while(i <= app7) {
    console.log("I saw " + i + " car(s) on my trip");
    i++
   
}