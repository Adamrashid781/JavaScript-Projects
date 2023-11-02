

var x = 3, b = 4;

function function2(){
    document.getElementById("function2").innerHTML = x + b;
}

function myFunction(){  // adding more to str1 by using += 
                        // without deleting what was there already
    var str1 = 'This is the first half ';
    str1 += 'this is the second half'; 
    document.getElementById('concatenate').innerHTML = str1 ; 
}