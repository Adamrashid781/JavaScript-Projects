
// This is a global Variable
var a = 205 ;

function add_number1(){
    console.log(a + 200); 
}

// console.log will show what the error is with this function 
// in the console of the broswer
function add_numbers(){
    console.log(x + a) ;      
}
add_numbers() ;
add_number1() ; 

function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you doing today?" ;
    }
}

function myOwn() {
    if (new Date().getHours() < 3 && new Date().getHours() >= 2) {
        document.getElementById("Good morning").innerHTML = "What are you doing awake? Go to sleep fooo!" ; 
    }
}


// function for the age button and age input 
function age_function() {
    age = document.getElementById("age").value ;
    if ( age >= 18) {
        vote = "You are old enough to vote!" ; 
    }
    else {
        vote = "You are not old enough to vote!" ; 
    }
    document.getElementById("how_old_are_you?").innerHTML = vote ; 
}


// My own if statement functions 
function two_nums(){
    num1 = document.getElementById("first_number").value ;
    num2 = document.getElementById("second_number").value ; 
    if ( (1 <= num1) && (num1 <= 10) && (1 <= num2) && (num2 <= 10)) {
        response = num1 + " * " + num2 + " = " + (num1 * num2) + "." ;
    }
    else( response = "You inputed numbers that are out of scope.") ; 

    document.getElementById("Math_Response").innerHTML = response ; 
}


// Time function
function time_function(){
    var time = new Date().getHours() ;
    var reply; 
    if (time < 12 == time > 0) {
        reply = "It is morning time!" ;
    }
    else if (time >= 12 == time < 18){
        reply = "It is afternoon." ;
    }
    else {
        reply = "It is evening time." ;
    }
    document.getElementById("time_of_day").innerHTML = reply ; 

}