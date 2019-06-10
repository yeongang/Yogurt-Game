window.onload = init;

var audio = new Audio( "까치설날.mp3" );
var ctx, throwresult,throwresult1,throwresult2, throwresult3, throwresult4;
var edge=0,yutxythrow = 0, firstedge = 0, twiceedge = 0, thirdedge = 0, fouredge = 0, fiveedge = 0, r1;
var msg,msg2,msg3, i=-1;
var stuff = [];
var yut, yutyut;
var yutArray = [ '도', '개', '걸', '윷', '모' ];
var cook = ['계란.png', '김.png', '떡.png', '만두.png', '멸치.png', '소.png', '파.png'];
var cookstuff = [];

function init(){
    var canvas = document.getElementById('myCanvas');
    ctx =canvas.getContext('2d');
    // yutyut = document.getElementById('yutyut');
    // yut = document.getElementById('yut');
    r1 = new Rect(510,520,20, 20, "pink");
    stuff.push(r1);

    drawStuff();
}

    document.getElementById("startbtn")
        .addEventListener("click", function() {
  document.getElementById("start").hidden = true;
  document.getElementById("yut").hidden = false;
}, false);

document.getElementById("startbtn2")
.addEventListener("click", function() {
document.getElementById("info").hidden = true;
document.getElementById("yut").hidden = false;
}, false);

document.getElementById("infobtn")
.addEventListener("click", function() {
document.getElementById("start").hidden = true;
document.getElementById("info").hidden = false;
}, false);

document.getElementById("backbtn")
.addEventListener("click", function() {
document.getElementById("info").hidden = true;
document.getElementById("start").hidden = false;
}, false);

document.getElementById("backbtn2")
.addEventListener("click", function() {
document.getElementById("yut").hidden = true;
document.getElementById("start").hidden = false;
}, false);

function info(){

}
function stop(){
    if(audio.paused == true){
        audio.play();
    }else audio.pause();
}

function yutthrow(){
    if(edge<5||edge>5){
        throwresult = yutArray[Math.floor(Math.random() * yutArray.length)];
        alert(throwresult);
        yutmove();
        drawStuff();
    }
    else if(edge==5){
        throwresult1 = yutArray[Math.floor(Math.random() * yutArray.length)];
        alert(throwresult1);
        edgethrow();
        drawStuff();    

    }
    else if(firstedge<11||firstedge==8){
        throwresult1 = yutArray[Math.floor(Math.random() * yutArray.length)];
        alert(throwresult1);
        edgethrow();
        drawStuff(); 
    }
    if(edge>5 && yutxythrow>5){
        yutxy();
        drawStuff(); 
    }
    if(firstedge==8){
        throwresult2 = yutArray[Math.floor(Math.random() * yutArray.length)];
        alert(throwresult2);
        yuttwiceedge();
        drawStuff(); 
    }

    if(firstedge==11){
        throwresult3 = yutArray[Math.floor(Math.random() * yutArray.length)];
        alert(throwresult3);
        yutthirdedge();
        drawStuff(); 
    }
    

}

var gug=document.getElementById('gug');
        function tteoggug(){
            for(var j=0;j<cookstuff.length;j++){
                gug.innerHTML += "<img style='z-index:100' width='70px' src = '" + cookstuff[j] + "'>";
                console.log("tteoggug: " + cookstuff[j]);
            }

        }

function yutmove(){
    if(edge<=5){
        switch (throwresult) {
            case '도':
                r1.y -= 95;
                drawStuff();
                edge += 1;
                cookstuff.push(cook[2]);
                break;
            case '개':
                r1.y -= 185;
                drawStuff();
                edge += 2;
                cookstuff.push(cook[4]);
                break;
            case '걸':
                r1.y -= 270;
                drawStuff();
                edge += 3;
                cookstuff.push(cook[3]);
                break;
            case '윷':
                r1.y -= 360;
                drawStuff();
                edge += 4;
                cookstuff.push(cook[5]);
                break;
            case '모':
                r1.y -= 460;
                drawStuff();
                edge += 5;
                cookstuff.push(cook[0]); 
                break;
            default:
                break;
        }
        if(edge==5){
            var conmsg1 = confirm("선택의 순간! 지름길로 가시겠습니까?"); 
            msg=conmsg1;
            firstedge=edge;
        }
        if(edge>5){
            yutxythrow = edge;
            alert(yutxythrow);    
        }
    }
    drawStuff();
}
function yutxy(){
    if(yutxythrow==6){
        r1.x = 410;
        r1.y = 55;
        drawStuff();
        cookstuff.push(cook[4]);
    }
    if(yutxythrow==7){
        r1.x = 330;
        r1.y = 55;
        drawStuff(); 
        cookstuff.push(cook[2]);
    }
    if(yutxythrow==8){
        r1.x = 250;
        r1.y = 55;
        drawStuff();
        cookstuff.push(cook[5]);
    }
    if(yutxythrow==9){
        r1.x = 150;
        r1.y = 55;
        drawStuff();
        
    }
    if(yutxythrow==10){
        r1.x = 50;
        r1.y = 55;
        drawStuff();        
    }
    if(yutxythrow==11){
        r1.x = 50;
        r1.y = 100;
        drawStuff();
        
    }
    if(yutxythrow==12){
        r1.x = 50;
        r1.y = 250;
        drawStuff();
    }
    if(yutxythrow==13){
        r1.x = 50;
        r1.y = 400;
        drawStuff();   
    }
    if(yutxythrow==14){
        r1.x = 50;
        r1.y = 500;
        drawStuff();    
    }
    if(yutxythrow==15){
        r1.x = 50;
        r1.y = 600;
        drawStuff();
    }
}
function edgethrow(){
    if(firstedge<11){
        if(msg == true){
                switch(throwresult1) {
                    case '도':
                        r1.x -= 75;
                        r1.y += 75;
                        drawStuff();
                        firstedge += 1;
                        cookstuff.push(cook[3]); 
                        break;
                    case '개':
                        r1.x -= 145;
                        r1.y += 145;
                        drawStuff();
                        firstedge += 2;
                        cookstuff.push(cook[0]);
                        break;
                    case '걸':
                        r1.x -= 235;
                        r1.y += 235;
                        drawStuff();
                        firstedge += 3;
                        cookstuff.push(cook[2]);
                        break;
                    case '윷':
                        r1.x -= 305;
                        r1.y += 305;
                        drawStuff();
                        firstedge += 4;
                        cookstuff.push(cook[4]);
                        break;
                    case '모':
                        r1.x -= 365;
                        r1.y += 365;
                        drawStuff();
                        firstedge += 5;
                        cookstuff.push(cook[6]);
                        break;
                    default:
                        break;
                }
                if(firstedge==8){
                    var conmsg2 = confirm("선택의 순간! 지름길로 가시겠습니까?");
                    msg2 = conmsg2;
                    twiceedge = firstedge;
                }
                if(firstedge==11){
                    thirdedge = firstedge;
                }
            }
            if(firstedge>11){
                yuttwicethrow=firstedge;
                alert(yuttwicethrow);
                if(yuttwicethrow==12){
                    r1.x = 140;
                    r1.y = 520;
                    drawStuff();
                    cookstuff.push(cook[3]);
                    
                }
                if(yuttwicethrow==13){
                    r1.x = 220;
                    r1.y = 520;
                    drawStuff();
                    cookstuff.push(cook[5]);
                }
                if(yuttwicethrow==14){
                    r1.x = 300;
                    r1.y = 520;
                    drawStuff();
                    cookstuff.push(cook[6]);
                }
                if(yuttwicethrow==15){
                    r1.x = 440;
                    r1.y = 520;
                    drawStuff(); 
                    cookstuff.push(cook[0]);  
                }
                if(yuttwicethrow==16){
                    r1.x = 510;
                    r1.y = 520;
                    drawStuff();    
                }
                if(yuttwicethrow==17){
                    r1.x = 510;
                    r1.y = 520;
                    drawStuff();
                }
            }     
        }
    }
function yuttwiceedge(){
    if(twiceedge==8){
        if(msg2==true){
            switch (throwresult2) {
                case '도':
                    r1.x += 75;
                    r1.y += 75;
                    drawStuff();
                    fiveedge += 1;
                    cookstuff.push(cook[6]);
                    break;
                case '개':
                    r1.x += 140;
                    r1.y += 140;
                    drawStuff();
                    fiveedge += 2;
                    cookstuff.push(cook[2]);
                    break;
                case '걸':
                    r1.x += 220;
                    r1.y += 220;
                    drawStuff();
                    fiveedge += 3;
                    break;
                case '윷':
                    r1.x += 220;
                    r1.y += 220;
                    drawStuff();
                    fiveedge += 4;
                    break;
                case '모':
                    r1.x += 220;
                    r1.y += 220;
                    drawStuff();
                    fiveedge += 5;
                    break;
                default:
                    break;
            }
            if(fiveedge>=3){
                alert("도착!");
                if(confirm("오늘 재료들로 떡국 만들러 가기")){
                        document.getElementById("yut").hidden = true;
                        document.getElementById("yutyut").hidden = false;
                }
            }
        }
    }
}
function yutthirdedge(){
    if(thirdedge==11){
            switch(throwresult3){
                case '도':
                    r1.x += 75;
                    drawStuff();
                    fouredge += 1;
                    break;
                case '개':
                    r1.x += 155;
                    drawStuff();
                    fouredge += 2;
                    break;
                case '걸':
                    r1.x += 255;
                    drawStuff();
                    fouredge += 3;
                    break;
                case '윷':
                    r1.x += 355;
                    drawStuff();
                    fouredge += 4;
                    break;
                case '모':
                    r1.x += 455;;
                    drawStuff();
                    fouredge += 5;
                    break;
                default:
                    break;    
            }
            if(fouredge == 5){
                alert("도착!");
                if(confirm("오늘 재료들로 떡국 만들러 가기")){
                    document.getElementById("yut").hidden = true;
                    document.getElementById("yutyut").hidden = false;
                }

            }
        }
}
function yuttwice(){
    if(yuttwicethrow==12){
        r1.x = 140;
        r1.y = 520;
        drawStuff();
        alert("도착!");
        if(confirm("오늘 재료들로 떡국 만들러 가기")){
            document.getElementById("yut").hidden = true;
            document.getElementById("yutyut").hidden = false;
        }
        
    }
    if(yuttwicethrow==13){
        r1.x = 210;
        r1.y = 520;
        drawStuff();
        alert("도착!");
        if(confirm("오늘 재료들로 떡국 만들러 가기")){
            document.getElementById("yut").hidden = true;
            document.getElementById("yutyut").hidden = false;
        }
    }
    if(yuttwicethrow==14){
        r1.x = 310;
        r1.y = 520;
        drawStuff();   
        alert("도착!");
        if(confirm("오늘 재료들로 떡국 만들러 가기")){
            document.getElementById("yut").hidden = true;
            document.getElementById("yutyut").hidden = false;
        }
    }
    if(yuttwicethrow==15){
        r1.x = 370;
        r1.y = 520;
        drawStuff();
        alert("도착!");
        if(confirm("오늘 재료들로 떡국 만들러 가기")){
            document.getElementById("yut").hidden = true;
            document.getElementById("yutyut").hidden = false;
        }
  
    }
    if(yuttwicethrow>=16){
        r1.x = 510;
        r1.y = 520;
        drawStuff();
            alert("도착!");
    if(confirm("오늘 재료들로 떡국 만들러 가기")){
        document.getElementById("yut").hidden = true;
        document.getElementById("yutyut").hidden = false;
    }
    }
  
}
function Rect(x, y, width, height, color) { 
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.draw = function drawRect() {
        ctx.fillStyle = this.color; 
        ctx.fillRect(this.x, this.y, this.width, this.height); 
    }
}

function drawStuff() {
    ctx.clearRect(0,0,800,600); 
    ctx.strokeStyle = "white";  
    ctx.lineWidth = "1px";
    ctx.strokeRect(0,0,800,600);
    for(var k = 0; k<stuff.length; k++) {
        stuff[k].draw(); 
    }
}
