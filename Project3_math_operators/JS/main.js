
var x = 34543 ;
var y = 234567 ;

function addTwo() {
    
    document.getElementById('add').innerHTML = 'X + Y = ' + (x + y) ;  
                // To add two numbers in the element, put them in Parenthesis
}


function subtraction() {
    var subtraction = y - x ;
    document.getElementById('subtract').innerHTML = 'Y - X = ' + subtraction ; 
}


function multiply(){
    var multiply = x * y;
    document.getElementById('multiplication').innerHTML = 'X * Y = ' + multiply ; 
}

function divide(){
    var divide = x / y;
    document.getElementById('division').innerHTML = 'X / Y = ' + divide ; 
}


function many_math(){
    var math = (y*y) - (x / 7 + 100) ;
    document.getElementById('math').innerHTML = "(y * y) - x / 7 + 100 = " + math ;
}

function modulus_operator() {
    var simple_math = 25 % 6 ; 
    document.getElementById('modulus').innerHTML = "25 % 6 = " + simple_math ;
}

function negation_operator(){
    var negation = 101 ;
    document.getElementById('negation').innerHTML = - negation;
}

var inc_dec = 10 ;

function increment(){
    inc_dec++ ;
    document.getElementById('increment').innerHTML = inc_dec ;
}

function decrement() {
    inc_dec-- ;
    document.getElementById('decrement').innerHTML = inc_dec ;
}

document.write("<br>", Math.random() * (11 - 10) + 10 ); 

function my_Dictionary() {
    var Animal = {
        species: "Dog",
        color: "Black",
        breed: "Labrador",
        age: 5,
        sound: "Bark!"
    } ;
    document.getElementById("Dictionary").innerHTML = Animal.sound; 
}