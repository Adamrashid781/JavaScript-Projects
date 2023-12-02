// JSON.stringify() method 
// First the JS object
var myObj = {'name':'adam', 'age':22, 'city':'Santa Ana'};

// convert it into JSON
var myJSON = JSON.stringify(myObj);


// send JSON
window.location = "demo_json.php?x=" + myJSON ; 