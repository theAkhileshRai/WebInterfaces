
//var Bill = document.getElementById('Amount').value;
//var Quality = document.getElementById('rate').value;
//var NumPeople = document.getElementById('NumPeople').value;

function run(){
    var Bill = document.getElementById('Amount').value;
    var Quality = document.getElementById('rate').value;
    var NumPeople = document.getElementById('NumPeople').value;
    var tipAmount = (Bill*Quality)/NumPeople;
    document.getElementById('resultAmount').innerHTML=" Tip Amount: <br>"+tipAmount

}

    //document.getElementById("alert").innerHTML=para
