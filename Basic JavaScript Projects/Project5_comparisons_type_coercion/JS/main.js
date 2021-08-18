document.write(typeof "word");

function my_Function() {
    document.getElementById("nan").innerHTML = 0/0;  /*creating function to display "NaN" as it is not a possible math equation*/
}

function my_Function1 () {
document.getElementById("nan1").innerHTML = isNaN('This is a string'); /*creating  function to display "True" as it is not a number*/
}

function my_Function2 () {
    document.getElementById("nan2").innerHTML = isNaN('007');  /*creating function to display "False" as it is a number*/
    }

function infinity() {
    document.getElementById("infin").innerHTML = (2E310);  /*creating function to display "infinity" as the number is too large to display*/
}

function minfinity() {
    document.getElementById("-infin").innerHTML = (-3E310); /*creating function to display "-infinity" as the minus numnber is too large to display*/
}


function boolean() {
    document.getElementById("bol").innerHTML = (15 > 2);  /*creating clickable function to display "True" as it is a true boolean statement*/
}

function booleanf() {
    document.getElementById("fbol").innerHTML = (1 > 5); /*creating clickable function to display "False" as it is a false boolean statement*/
}

console.log(9-2); /*Performing a math equation which will be displayed in the console log*/

function coercion(){
document.getElementById("coerc").innerHTML = ("10" + 5);   /*creating function to display "10 + 5" as "105" due to coercion*/
}

console.log(1>5); /*Displaying "False" in the console log due to a false boolean statement*/

function tequal() {
    document.getElementById("t_equal").innerHTML = (10 == 10); /* Creating a clickable function to display a true equal statement */
}
function fequal() {
    document.getElementById("f_equal").innerHTML = (10 == 15); /*Creating a clickable function to display a false equal statement*/
}

function tripe1() {
    x = 1;
    y = 1;
    document.getElementById("tr_equal1").innerHTML = (x === y); /*-Creating a function to display a true triple = statement*/
}

function tripe2() {
    x = 2;
    y = "Dog";
    document.getElementById("tr_equal2").innerHTML = (x === y); /*-Creating a function to display a false triple = statement as the data types and values are different*/
}

function tripe3() {
    x = 2;
    y = "2";
    document.getElementById("tr_equal3").innerHTML = (x === y); /*-Creating a function to display a false triple = statement as the data types are different*/
}

function tripe4() {
    x = "Cat";
    y = "Dog";
    document.getElementById("tr_equal4").innerHTML = (x === y); /*-Creating a function to display a false triple = statement as the data values are different*/
}


function nd() {
    document.getElementById("and_").innerHTML = (5 > 1 && 2 > 1);
}

function fnd() {
    document.getElementById("fand_").innerHTML = (5 > 1 && 2 > 5);
}

function or() {
    document.getElementById("or_").innerHTML = (5 > 6 || 2 > 1);

}

function forr() {
    document.getElementById("for_").innerHTML = (5 > 6 || 2 > 6);

}

function not() {
    document.getElementById("not_").innerHTML = ! (5 > 6);

}

function fnot() {
    document.getElementById("fnot_").innerHTML = ! (5 > 1);

}

