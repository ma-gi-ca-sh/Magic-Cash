var password ="q1p2q3p4";
function passcheck(){
    if(document.getElementById('pass1').value!=password){
        alert('Wrong Password,Try Again');
        return false;

    }
    if(document.getElementById('pass1').value==password){
        alert('Correct Password.Click ok to Enter answerers.');
        
        
    }
} 