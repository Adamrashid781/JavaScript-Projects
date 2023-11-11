

function displayManu(model){
    let manufacturer = model.getAttribute("data-manufacturer");
    alert("The " + model.innerHTML + " is a " + manufacturer + "." );
}