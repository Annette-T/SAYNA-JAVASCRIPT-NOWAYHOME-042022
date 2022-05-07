var i = 0;
var images = ['heroslider1.png', 'heroslider2.png', 'heroslider3.png', 'heroslider4.png', 'heroslider5.png',];


function slideimg(){
    document.slider.src = './assets/imgjs/' + images[i];
    if(i<images.length -1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slideimg()",2000);
}

window.onload = slideimg;