function myFunction() {         /* Function created to display concat method with multiple different variables, when this function is called the sentence will align */
    var p1 = "This is";
    var p2 = " an example";
    var p3 = " of a sentence"
    var p4 = " put together using concat method."
    var myFunction = p1.concat(p2, p3, p4);
    document.getElementById("Hidden").innerHTML = myFunction; 
}

function sliceM() {  /* Function created to display the slice method, when this function is run "All Work" will be displayed*/ 
    var sentence = "All work and no play makes Johnny a dull boy.";   
    var Section = sentence.slice(0,8);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper() {  /* Function created to display the toUpper method, when this function is run the text will be in Upper case */
    var a = "This is an example of the toUpper case method";
    var up = a.toUpperCase();
    document.getElementById("upper").innerHTML = up; 
}

function search() { /* Function created to display the searcg method, when this function is run "10" will be displayed*/
    let str = "I love to code!";
    var strs = str.search("code");
    document.getElementById("srch").innerHTML = strs;
}

function stringM() { /* Function created to display the toString method, when this function is run "34" will be displayed*/
    var x= 34;
   document.getElementById("Num_to_string").innerHTML = x.toString();
}

function precM() { /* Function created to display the toPrecision method, when this function is run "2345.764392" will be displayed*/
    var y = 2345.764392325
    document.getElementById("Prec").innerHTML = y.toPrecision(10);
}

function fix() { /* Function created to display the toFixed method, when this function is run "234.9" will be displayed*/
    var x = 234.874
    document.getElementById("Fix").innerHTML = x.toFixed(1);
}

function val() { /* Function created to display the Value of method, when this function is run "Hello" will be displayed*/
    var x = "Hello"
    document.getElementById("Val").innerHTML = x.valueOf();
}