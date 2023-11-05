


function concatenate_lines() {
    str1 = "I am making " ;
    str2 = "this into one " ;
    str3 = "big sentence, " ;
    str4 = "wassup instructor Jeff." ; 

    whole_sentence = str1.concat(str2, str3, str4) ;
    document.getElementById("concatenate").innerHTML = whole_sentence ; 
}

var str = "This is little jimmy, Little Jimmy has been a bad boy and is going to get spanked by his mom" ;

function slice_function() {
    var section = str.slice(15, 21) ;
    document.getElementById("slice").innerHTML = section ; 
}

function to_upper(){
        document.getElementById("upper").innerHTML = str.toUpperCase() ; 
}

function to_search() {
    document.getElementById('search').innerHTML = str.search("a");
}


function to_string(){
    str = "Todays date is November 5th, " ;
    x = 2023 ;
    document.getElementById("to_string").innerHTML = str + x.toString() ; 
}

function precision_method(){
    x = 1367.5678987654323456789 ;
    document.getElementById('precision').innerHTML = x.toPrecision(10) ;
}

function to_fixed() {
    x = 1234.98765789 ;
    x = x.toFixed(2) ; 
    document.getElementById('fixed').innerHTML = x ; 
}

function primitive(){
    x = "This is a test" ;
    b = x.valueOf() ;
    document.getElementById('primitive').innerHTML = b ;
}