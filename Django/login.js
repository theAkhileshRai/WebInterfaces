
var correctName= 'John'
var password = '123right'
function run(){
    var userpass = document.getElementById('userid').value;
    var pass = document.getElementById('passwordid').value;
    /*alert(userpass +" "+ pass);*/
    if(correctName == userpass && password == pass){
        document.getElementById('alert').innerHTML="Login Successful! Now Redirecting...";
    }else{
        document.getElementById('alert').innerHTML="Login Failed, Username or password is incorrect.Check Again.";
    }
}
