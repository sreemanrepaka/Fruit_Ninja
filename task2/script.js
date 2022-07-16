function cursor_move(e){
    var x=e.clientX;
    var y=e.clientY;
    console.log(x,y);

    document.getElementById('cursor').style.left = x-100 + 'px';
    document.getElementById('cursor').style.top = y-100 + 'px';

    
}



function apple_visible(){
    x=document.getElementById('apple');
    x.style.display="inline-block";
}

function pear_visible(){
    x=document.getElementById('pear');
    x.style.display="inline-block";
}

function watermelon_visible(){
    x=document.getElementById('watermelon');
    x.style.display="inline-block";
}

function pineapple_visible(){
    x=document.getElementById('pineapple');
    x.style.display="inline-block";
}

function bomb1_visible(){
    x=document.getElementById('bomb1');
    x.style.display="inline-block";
}

function bomb2_visible(){
    x=document.getElementById('bomb2');
    x.style.display="inline-block";
}

function apple_vanish(){
    x=document.getElementById('apple');
    x.style.display="none";
}

function pear_vanish(){
    x=document.getElementById('pear');
    x.style.display="none";
}

function watermelon_vanish(){
    x=document.getElementById('watermelon');
    x.style.display="none";
}

function pineapple_vanish(){
    x=document.getElementById('pineapple');
    x.style.display="none";
}

function bomb1_vanish(){
    x=document.getElementById('bomb1');
    x.style.display="none";
}

function bomb2_vanish(){
    x=document.getElementById('bomb2');
    x.style.display="none";

}


function btn_clicked(){

    document.getElementById('cursor').style.visibility="visible";
    document.getElementById('btn').style.display="none";
    document.getElementsByClassName('intro')[0].style.display="none";
    d=setInterval(watermelon_visible,3000);
    setInterval(watermelon_vanish,5000);
    y=setInterval(apple_visible,5000);
    setInterval(apple_vanish,6000);
    z=setInterval(pear_visible,7000);
    setInterval(pear_vanish,8000);
    a=setInterval(pineapple_visible,9000);
    setInterval(pineapple_vanish,10000);
   b= setInterval(bomb1_visible,6500);
    setInterval(bomb1_vanish,7500);
   c= setInterval(bomb2_visible,11000);
    setInterval(bomb2_vanish,12000);

    document.getElementById('score').style.display="inline-block";

    
}

function fruit_chopped(fruit){
    x=document.getElementById(fruit.id);
    x.style.display="none";
}


i=0;

function score_increase(){
    i+=20;
    document.getElementById('score').innerHTML="Score: " + i;
    if (i>=100){
        document.getElementById('end').style.display="inline-block";
        clearInterval(y);
        clearInterval(z);
        clearInterval(a);
        clearInterval(b);
        clearInterval(c);
        clearInterval(d);

    }


}

function score_decrease(){
    i-=50;
    document.getElementById('score').innerHTML="Score: " + i;

}




    

