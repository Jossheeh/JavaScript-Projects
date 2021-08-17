function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;  /*Addition Math function*/
}

function subtraction_Function() {                                             
    var Subtraction = 6 - 2;
    document.getElementById("MathS").innerHTML = "6 - 2 = " + Subtraction; /*Subtraction Math function*/
}

function multiply_Function() {
    var Multiply = 1 * 4;
    document.getElementById("MathM").innerHTML = "1 * 4 = " + Multiply; /*Multiplication Math function*/
}

function division_Function() {
    var Division = 12 / 3;
    document.getElementById("MathD").innerHTML = "12 / 3 = " + Division; /*Division Math function*/
}

function more_Math() {
    var simple_Math = (12 + 3) * 10 / 2-5;
    document.getElementById("MathA").innerHTML = "12 plus 3, multiplied by 10, Divided in half and then subtracted by 5 equals " + simple_Math;
}  /*Multiple Math functions*/

function modulus_Operator() {
    var Mod_op = 25 % 6;
    document.getElementById("MathMo").innerHTML = "When you dived 25 by 6 you have a remainder of: " + Mod_op;
} /*Math function to get the remainder*/

function negation_Operator() {
    var x = 10;
    document.getElementById("MathN").innerHTML = - x;
}
/*Math function to get the negative*/

function increment() {
var x = 5;
x++;
document.getElementById("inc").innerHTML = " " + x; /*Math function to increment*/
}

function decrement() {
var y = 5.25;
y--;
document.getElementById("dec").innerHTML="" + y;
}   /*Addition Math to decrement */

function rand() {
    var rand_1 = (Math.round(Math.random() * 100))
    document.getElementById("rand_1").innerHTML = "Here is a random number from 1-100: " + rand_1; /*Math function to get random number from 1-100 and round it to nearest integer*/
}

function rounded() {
    var round_1 = Math.round(6.75);
    document.getElementById("round_1").innerHTML ="" + round_1;  /*Math function to round number to nearest integer*/
}


