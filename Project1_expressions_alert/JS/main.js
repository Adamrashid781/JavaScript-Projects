
var x = "life qoute \"the now is called the Present because it\'s a gift\"";
var b = "\"Be who you are and say what you feel, "                             // You can extent a string by 
+ "because those who mind don\'t matter to those who matter don\'t mind.\" "    // Ending the qoutation, putting a
+ "-Dr. Seuss\n" ;                                                              // comma, then a "+" sign on the 
                                                                                // next line 

var ten = 10, dad = 'Fayeq', mom = 'Yusra' ;
window.alert(x);
document.write(b, "<br>");
document.write(dad, " ", mom);
document.write( "<br>", 3 + 3); // To add a end line, put the <br> in quotations 

var sent1 = '<br>This is the beginning of the string ' ;
var sent2 = 'and this is the end of the string' ; 
document.write(sent1 + sent2);

function My_First_function() {
    var str = "This is my button text!" ;   
    document.getElementById("Button_Text").innerHTML = str ; 
    // document.getElementById("Button_Text").innerHTML = ____  is what sends the variable to the HTML file with the "Button_Text" Id
}
