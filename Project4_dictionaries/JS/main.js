

function First_Dictionary() {
    var cat = {
        color: 'white',
        hair: 'short' ,
        sex: 'male',
        age: '14 months'

    };
    delete cat.sex ; 
    document.getElementById("Dictionary").innerHTML = 'My cat is ' + cat.sex;
}


