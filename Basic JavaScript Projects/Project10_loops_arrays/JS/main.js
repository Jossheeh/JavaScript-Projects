function Call_Loop() {    /*Created Function for call loop */ 
    var Digit = "";  /*Created Variable to store the output */ 
    var X = 1;  /* Created Variable x */ 
    while (X < 11) { /*Created While statement */ 
        Digit += "<br>" + X;  /* Output to display */ 
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;  /* Creating event to call and display */ 
}

function Stringl() { /*Created Function */ 
let str = "My name is Josh";  /* Using Keyword "let" to assign value to str */ 
document.getElementById("Length").innerHTML = str.length; /* Creating event to call and display */ 
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; /* Creating Variable with multiple values */ 
var Content= "";  /*Created Variable to store the output */ 
var y;  /*Created variable Y */ 
function for_Loop() {  /*Created function */ 
    for (y = 0; y < Instruments.length; y++) {  /*Created for loop */ 
        Content += Instruments[y] + "<br>";  

    }
    document.getElementById("List_of_Instruments").innerHTML = Content; /* Creating event to call and display */
}

function array_Function() {   /* Created Function */ 
    var Chelsea_team = [];  /* Created Variable Chelsea_team */ 
    Chelsea_team[1] = " Kepa Arrizabalaga";  /* Creating multiple items in Array */
    Chelsea_team[2] = " Antonio Rudiger";
    Chelsea_team[3] = " Marcos Alonso";
    Chelsea_team[4] = " Andreas Christensen";
    Chelsea_team[5] = " Jorginho";
    Chelsea_team[6] = " Thiago Silva";
    Chelsea_team[7] = " N'Golo Kante";
    Chelsea_team[8] = " Mateo Kovacic";
    Chelsea_team[9] = " Romelu Lukaku";
    Chelsea_team[10] = " Christian Pulisic";
    document.getElementById("Chelsea_Fc").innerHTML = "Chelsea FC's number 1,4 & 6 are:" + 
    Chelsea_team[1] + ", " + Chelsea_team[4] + "," + Chelsea_team[6] + "."; /* Creating event to call and display */
}
    
function Constant_function() { /* Created function */ 
    const Chelsea_jersey = {type: "short sleeve", brand: "Nike", color: "Blue" }; /* Created constant variable with elements "type, brand and color*/ 
    Chelsea_jersey.color = "Blue & Yellow"; /* Created elements "Color, Price " */ 
    Chelsea_jersey.price = "€90"; 
    document.getElementById("Constant").innerHTML = "The cost of the " +    /* Creating event to call and display */
    Chelsea_jersey.type + " Chelsea jersey is: " + Chelsea_jersey.price + ". The Jersey is made by " + Chelsea_jersey.brand + ".";
}

function Let_function() {  /* Created function */ 
    var x = 23;  /* Created variable x */ 
    let y = 13; /* used let to create local variable y */ 
    document.getElementById("Let").innerHTML = y;  /* Creating event to call and display */
}

function myFunction(name) { /* Created function */ 
    return "Hello " + name; /* Using return method to display Hello + Name */ 
}
document.getElementById("Return").innerHTML = myFunction("Josh"); /* Creating event to call and display */

let laptop = { /* Using let statement to create variable with different elements */ 
    make: "Apple",
    model: "Macbook M1",
    display: "13.3 inch",
    battery: "17 hours",
    description : function() { /* Using description method to display elements from the variable */ 
        return "The laptop is made by " + this.make + ". The model is: " + this.model + ". The display size is: " + this.display; 

    }
};
document.getElementById("Laptop_Object").innerHTML = laptop.description();  /* Creating event to call and display */

function breakk() {  /* Creating function which will have a break statement in a loop */ 
    var brr = ""; 
for (let i=1; i<=5; i++){
    if (i === 4) break;
    brr += i; 
  }
  document.getElementById("BR").innerHTML = brr;  /* Creating event to call and display */
}
 
function contt() {    /* Creating function which will have a continue statement in a loop */ 
    var ctt = "";
  for (let i=1; i<=5; i++){
    if (i === 4) continue;
    ctt += i; 
  }
  document.getElementById("CT").innerHTML = ctt;   /* Creating event to call and display */
}