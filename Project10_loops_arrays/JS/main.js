

b = '';
x = 2;
c = "This string is going to be this many characters long: ";
function loop_function(){
    while (x < 10){
        b += '<br>' + x ;
        x++ ; 
        document.getElementById('Loop').innerHTML = b;
    }
}




function str_length(){
    document.getElementById('Length').innerHTML = "<br>" + c + c.length ;
}


list_a = ["dad", "mom", "rashid", "moamar", "suraya", "tutu", "rana", "ayia", "sadam"];

var temp ="";
function for_loop(){
    for (i = 0; i < list_a.length; i++){
        temp += list_a[i] + "<br>"; 
        document.getElementById("List_of_names").innerHTML = temp;
    }   
}


function array_function(){
    var cat_pics = [];
    cat_pics[0] = 'Sleeping.';
    cat_pics[1] = 'Eating.' ;
    cat_pics[2] = 'Playing.' ;
    cat_pics[3] = 'Jumping.' ;

    document.getElementById('array').innerHTML = "In this picture you will see a cat is "
    + cat_pics[2] ;
}


function const_test() {
    const lista = ['adam', 'john'];
    lista[1] = 'weeeee'
    const x = 25 ;
    var c = 20 ;
    {
        let c = 30
        document.getElementById('test3').innerHTML = "<br>" + c; 
    }
    // x = 10 ; 
    document.getElementById('constant').innerHTML = "<br>" + lista[1] ; 
    document.getElementById('test2').innerHTML = "<br>" + x; 
}


function return_function(){
    let x = 25 ;
    x = x/3 ;
    if ((x % 2) == 0) {
        return document.getElementById("return").innerHTML = "This is an even number" ; 
    }
    if ((x % 0) != 0){
        return document.getElementById("return").innerHTML = "This is an odd number";
    }
    // To do the same thing as above ^ but in the console log
    // ((x % 2) == 0) ? console.log("This is an even number") : console.log("This is an odd number") ;
}

// Object assignnment 
let cat = {
    breed : "short hair Siamese ",
    gender: "Male ",
    age : "10 months old ",
    description : function() {
        return "My cat is a " + this.age + this.gender + this.breed ;
    }
};
    document.getElementById("cat_object").innerHTML = cat.description() ; 



    function break_continue(){
        for(i = 0; i < 10; i++){
            if(i == 4){
                document.getElementById("continue").innerHTML = "We are skipping over " + i + "<br>" ; 
                continue ;
            }
            if(i > 8){
                document.getElementById("break").innerHTML = "We are breaking out of the loop at " + i + "<br>" ; 
            }
        }
    }