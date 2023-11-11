

// BAsic input validation for HTML 

function validateForm1() {
    let x = document.forms["my_form"]["fname"].value;
    if (x == ""){
        alert("names must be filled out.");
        return false;
    }
}

function validateForm2() {
    let x = document.forms["my_form"]["lname"].value;
    if (x == ""){
        alert("names must be filled out.");
        return false;
    }
}