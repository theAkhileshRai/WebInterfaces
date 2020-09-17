var myVar=0;

function myFunction(){
    myVar+=10;
    document.getElementById("para").innerHTML=myVar;
    document.body.style.backgroundColor="#EEEEE0"+myVar;
}

function myFunction2(){
    myVar-=10;
    document.getElementById("para").innerHTML=myVar;
    document.body.style.backgroundColor="#F3F575"-myVar;
}
