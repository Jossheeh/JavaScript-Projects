function Vote_Function() {                /*Creating Function*/ 
    var Age, Can_vote;                     /*Created variables "Age & Can_vote"*/
    Age = document.getElementById("Age").value; /*Getting Variable "Age" from user input */
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough"; /*Checking if "Age" is less than 18 or not. The correct message will be chosen*/
    document.getElementById("vote").innerHTML = Can_vote + " to vote.";  /*Message will be displayed accordingly a long with string "to vote"*/
}

function Vehicle(Make, Model, Year, Color, Condition, ) {     /*Creating Function with an object constructor "Vehicle" also*/
    this.Vehicle_Make = Make;   /*List of keywords created using "this"*/ 
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
    this.Vehicle_Condition = Condition;
}

Var = Jack = new Vehicle( "Dodge ", "Viper", 2020, "Red", "Great");        /* Creating list of entries using "New" adding values to the keywords for each entry*/ 
Var = Emily = new Vehicle( "Jeep ", "Trail Hawk", 2019, "White and black", "Bad");
Var = Erik = new Vehicle( "Ford ", "Pinto", 1971, "Mustard", "Ok");
Var = James = new Vehicle( "Toyota", "Yaris", 2018, "White", "Good");

function myFunction() {               /*Creating function to display selected data from our keywords and constructors*/
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function myFunction1() {                 /*Creating function to display selected data from our keywords and constructors*/
    document.getElementById("New_and_This").innerHTML = 
    "James drives a " + James.Vehicle_Color + "-colored " + James.Vehicle_Make + James.Vehicle_Model + 
    " manufactured in " + James.Vehicle_Year + ". The car is in " + James.Vehicle_Condition + " condition.";
}

function double_Function() {                 /*Creating function which will contain a nested function*/
    document.getElementById("Nested_Function").innerHTML = Double();
    function Double() {             
        var Starting_point = 8;       /*Setting starting point value*/
         function by_two() {Starting_point *= 2;}  /*Creating nested function which will multiply starting value by 2*/
         by_two();
        return Starting_point;  /*Returning starting value multiplied by 2*/
    }
}
