function breed_function(){
    var breed_output;
    var breed = document.getElementById("breed_input").value ; 
    var breed_string = " is a beautiful breed!" ;
    breed = breed.toUpperCase();
    switch(breed){
        case "SERVAL":
            breed_output = "Serval" + breed_string;
            break ; 
        case "ORANGE TABBY":
            breed_output = "Orange Tabby" + breed_string ;
            break ; 
        case "GRAY TABBY":
            breed_output = "Gray Yabby" + breed_string ;
            break ;
        case "SIAMESE" :
            breed_output = "Siamese" + breed_string ;
            break ;
        default:
            breed_output = "Please enter a bread exactly as spelled in the above list..." ;
    }
    document.getElementById("output_breed").innerHTML = breed_output ;
}

document.write( 3 + "3" + 3) ; 


function hello_world_function(){
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
    // "A" is an array of elements with class "click" inside them
}


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Create a Gradient
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Draw a filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);