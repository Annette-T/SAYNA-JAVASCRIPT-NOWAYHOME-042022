let btninverse = document.getElementsByClassName('btninverse');

console.log(btninverse);

for (let i = 0; i<btninverse.length; i++){
    btninverse[i].addEventListener('mouseover',()=>{
        btninverse[i].style.backgroundColor ='#b11313';
        btninverse[i].style.color ='white';
        btninverse[i].style.fontWeight ='bold';
        btninverse[i].style.boxShadow = '5px 5px 30px white';
    });
    btninverse[i].addEventListener('mouseout',()=>{
        btninverse[i].style.backgroundColor ='white';
        btninverse[i].style.color ='#b11313';
        btninverse[i].style.boxShadow = 'none';
    });
}

let footericones = document.getElementsByClassName('footer-icones');

for (let i = 0; i<btninverse.length; i++){
    footericones[i].addEventListener('mouseover',()=>{
        footericones[i].style.color ='white';
    });
    footericones[i].addEventListener('mouseout',()=>{
        footericones[i].style.color ='black';
    });
}

// les rubriques du menu surligné

let menu = document.querySelectorAll('li');

menu.forEach(function(li){
    li.addEventListener('mouseover',()=>{
        li.style.textDecoration = 'line-through';
    });
    li.addEventListener('mouseout',()=>{
        li.style.textDecoration = 'none';
    });
})

//Tous les titres du site (avec la police Far From Home) doivent apparaître avec un fade in
//en démarrant de la gauche (mouvement de gauche à droite).

$(document).ready(function(){
    $(".box").animate({
        left: '30px'
    }, "slow");
    $(".description").fadeIn(6000);
})