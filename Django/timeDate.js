
function run(){
    var checker = 323;
    var value = 345;
    var hour = new Date().getHours();
    if(hour<9){
        document.getElementById("output").innerHTML="Equal";
    } else if(hour>12 && hour<18){
        document.getElementById("output").innerHTML="Not Equal";
    } else {
        document.getElementById("output").innerHTML="Almost Equal "+ hour ;
    }
}
