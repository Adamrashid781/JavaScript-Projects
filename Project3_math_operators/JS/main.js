
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