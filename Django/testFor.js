

var cars = ["BMW","Volvo","Supra","Ford","Audi"];
var para ="";

function run(){
    for(i=0; i<cars.length; i++){
        para += cars[i] +" <br>"
    }
    document.getElementById("alert").innerHTML=para
}
