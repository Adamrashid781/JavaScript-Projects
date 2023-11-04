
// Ternary ? Operator 
document.write("Ternary \'?\' operator");
function Ride_Function() {
    var Height, Can_ride ;
    Height = document.getElementById("Height").value ;
                // if height is greater than 52 (false), the second state will be printed
                // if height is less than 52 (true), the first statement will be printed
                                // TRUE                 FAlSE
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride." ; 
}


function Age_Function() {
    var Age, legal_age ;
    Age = document.getElementById("Age").value ;
    legal_age = (Age >= 18) ? "You are":"You are not" ;
    document.getElementById("Age_Response").innerHTML = legal_age + " old enough to vote." ; 

}

// class wtf {
//     string Fullname ;
//     Boolean active ;
//     wtf(string name){
//         Fullname = name ;
//         active = true ;
//     }
// }

function Vehicle(make, model, year, color){
    this.Vehicle_make = make ;
    this.Vehicle_model = model ;
    this.Vehicle_year = year ;
    this.Vehicle_color = color ; 
}
var jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var erik = new Vehicle("Ford", "Pinto", 1971, "Mustard") ; 
// Ternary ? Operator 
document.write("Ternary \'?\' operator");
function Ride_Function() {
    var Height, Can_ride ;
    Height = document.getElementById("Height").value ;
                // if height is greater than 52 (false), the second state will be printed
                // if height is less than 52 (true), the first statement will be printed
                                // TRUE                 FAlSE
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride." ; 
}
function myfunction() {
    document.getElementById("Keywords_and_constructors").innerHTML = "Erik drives a "
    + erik.Vehicle_color + "-colored " + erik.Vehicle_model + " manufactured in " 
    + erik.Vehicle_year ; 
}

function count_function() {
    document.getElementById("nested_function").innerHTML = count() ;
    function count() {
        var starting_point = 9 ;
        function plus_one() { starting_point += 1; }
        plus_one() ; 
        return starting_point ; 
    }
}