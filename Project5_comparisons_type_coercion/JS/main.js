



document.write('10' + 5); // This is type-coercion this converts the value to the type it chooses
document.write(typeof 'the'); // typeof will return the type of value being inputed

function my_function1(){
    document.getElementById('Test1').innerHTML = 0/0 ; 
    // The result would be Nan (Not a Numver) because we cant divide 0 by 0
}

function my_function2() {
    document.getElementById('Test2').innerHTML = "<br>" + isNaN('This is a string') ;
    // This tests to see if the element enteres is Not a Number, will return true
}

function my_function3() {
    document.getElementById('Test3').innerHTML = "<br>" + isNaN('007');
        // This tests to see if the element enteres is Not a Number, will return false
}

document.write("<br>" + 2E310); // Will display 'Infinity' on webpage 
document.write("<br>" + -2E310); // Will display '-Infinity' on webpage 


document.write("<br>" + 123456789876543235678765435678654345678654323456789098765432123456789098765432123456789098765432123456789098765432123456789098765432 * 4567897654567890876543098789876789878987898778987689878987678987689087898789878987898789878908789878987898789878976897689878987689876789875678909876543567 * 56786543234567876543234567876543245678); // Will display 'Infinity' on webpage 
document.write("<br>" + -123456789876543235678765435678654345678654323456789098765432123456789098765432123456789098765432123456789098765432123456789098765432 * 4567897654567890876543098789876789878987898778987689878987678987689087898789878987898789878908789878987898789878976897689878987689876789875678909876543567 * 56786543234567876543234567876543245678); // Will display '-Infinity' on webpage 




document.write("<br>" + (6 > 2)) ; // Will display true 
document.write("<br>" + (6 < 2)) ; // Will display false

console.log(2 + 2) ;  // Will display "4" in the console of the browser page, use CTRL + SHFT + I 
console.log(4 < 2) ;  // Will display false in the console of the browser page
console.log(4 == (2 + 2));  // Will display true in the console of the browser page
console.log(4 == (1 + 2)); // Will display false in the console of the browser page

date1 = 10 ;
date2 = 10 ;
date3 = '10' ;
date4 = 'ten' ; 

// Triple equal sign This tells the computer to check 
// whether the two pieces of data are equal in both VALUE and TYPE.
document.write("<br>");
document.write(date1 === date2) ; // TRUE
document.write("<br>");
document.write(date1 === date4) ; // FALSE
document.write("<br>");
document.write(date2 === date3) ; // FALSE
document.write("<br>");
document.write(date3 === date4) ; // FALSE
document.write("<br>");


// AND operator 
document.write('AND operator') ; 
document.write("<br>");
document.write( 5 > 4 && 6 > 2); // TRUE
document.write("<br>");
document.write( 4 > 6 && 7 > 2); // FALSE
document.write("<br>");

// OR operator
document.write('OR operator') ; 
document.write("<br>");
document.write( 5 > 6 || 6 > 2) // TRUE
document.write("<br>");
document.write( 5 > 8 || 1 > 2) // FALSE
document.write("<br>");

// NOT operator 
document.write("NOT operator");
document.write("<br>");
document.write(20 != 19); // TRUE
document.write("<br>");
document.write( ! (20 > 21)); // TRUE
document.write("<br>");
document.write(20 != 20); // FALSE
document.write("<br>");
document.write( ! (20 < 21)); // TRUE
document.write("<br>");


