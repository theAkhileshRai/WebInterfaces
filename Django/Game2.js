var start;
var clicked;


window.onload = rerun();

function run(){
    var delayTime = Math.floor((Math.random() * 3) + 1)*1000;
    document.getElementById("shapeDiv").style.display="none";
    clicked=Date.now();
    var reactionTime = (clicked-start)/1000;
    alert(reactionTime);
    setTimeout(rerun, delayTime);

}

function rerun(){
        var randomTop = Math.random()*400;
        var randomLeft = Math.random()*300;
        var randomHeight = Math.random()*200+10;
        var randomWidth = Math.random()*200+10;
        var randomCurve = Math.random();
        var randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
        if (randomCurve<0.5){
            document.getElementById("shapeDiv").style.borderRadius=25+'px';
        }else{
            document.getElementById("shapeDiv").style.borderRadius=0+'px';
        }
        document.getElementById("shapeDiv").style.top=randomTop+"px";
        document.getElementById("shapeDiv").style.left=randomLeft+"px";
        document.getElementById("shapeDiv").style.left=randomWidth+"px";
        document.getElementById("shapeDiv").style.left=randomHeight+"px";
        document.getElementById("shapeDiv").style.display="block";
        document.getElementById("shapeDiv").style.backgroundColor=randomColor;
        start=Date.now();

        //alert(start);

}
