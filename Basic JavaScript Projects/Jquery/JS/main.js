$(document).ready(function() {     //When the document is ready going to add
    $("html").append(              //The following h1 & P to the body section of the page using the append method
        "<body>\
        <div id='container'>\
            <div id='inner'>\
                <h1>Basic Jquery</h1>\
                <p id='1'>Paragraph 1</p>\
                <p id='2'>Paragraph 2</p>\
                <p id='3'>Paragraph 3</p>\
                </div>\
            </div>\
        </body>"   
    );
    $("#2").css({"color":"red"});       //Using Jquery library to change the css code to display the element p with id "2" in red
    $("#3").click(function() {          //Using on click method to hide the h1 tag when P id"3" is clicked
        $('h1').hide();
    
    });
    $( "#1" ).click(function() {       //Using the on click method to display "You clicked paragraph 1" in the console log
        console.log( "You clicked paragraph 1" );  //when the paragraph 1 is clicked
    });

    $( "#2" ).hide( 1500 ).delay( 1500 ).show( 300 ); //using hide, delay and show methods to hide the p id"2" after 1.5 seconds
                                                    //then delay its return for 1.5 seconds and show it again within .3 of a second 
    
    });