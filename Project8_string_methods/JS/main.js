


function concatenate_lines() {
    str1 = "I am making " ;
    str2 = "this into one " ;
    str3 = "big sentence, " ;
    str4 = "wassup instructor Jeff." ; 

    whole_sentence = str1.concat(str2, str3, str4) ;
    document.getElementById("concatenate").innerHTML = whole_sentence ; 
}