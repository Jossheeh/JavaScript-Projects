function myFunction() {  /*Creating Function*/ 
    let carName = "Volvo";              /*Local Variable*/
        document.getElementById("Car").innerHTML = carName; /*Using Get element by Id method to show the local variable*/ 
  }

let carName1 = "Toyota"  /* Global Variable */

function myFunction1() { /*Creating Function*/ 
    document.getElementById("Car1").innerHTML = carName1;  /*Using Get element by Id method to show the global variable*/ 
}

function error() {   /* Created Function */ 
    var x = 2;       /*Created two variables one which did not have value until I used the console log to debug, amend and save changes to my file */
    var v = 1;
    console.log(x + v); 
}
error();

function Time_function() {   /*Creating Function*/ 
    var Time = new Date().getHours(); /*Created variables "Team" & "Reply"*/
    var Reply;
    if (Time < 12 == Time > 0) {      /*Created if statement: If the time is less than 12 a reply will be shown "It is Morning time"*/
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {   /*Created else if statement: If the time is greater than 12 but less than 18 a reply will be shown "It is the afternoon"*/
        Reply = "It is the afternoon.";
    }
    else {          /*Created else statement: For all other possibilites a message will be show "It is evening time"*/
        Reply ="It is evening Time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


function Team_Function() {                /*Creating Function*/ 
    var Team;                     /*Created variable "Team"*/
    Team = document.getElementById("TTeam").value; /*Getting Variable "Team" from user input */
    if (Team == "Chelsea") {  /*Created if statement: If the users input = Chelsea then the below message will be shown*/
    document.getElementById("team").innerHTML = "Champions of europe we know what we are!";  
    }
    else if (Team == "Man city") /*Created else if statement: If the users input = Man city then the below message will be shown*/
    {
        document.getElementById("team").innerHTML= "Premier league champions!";
    }
    else {
        document.getElementById("team").innerHTML ="Better luck next year!"; /*Created else statement: If the users input doesn't = Chelsea or Man city then the below message will be shown*/
    }
}





