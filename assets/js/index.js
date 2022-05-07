$(document).ready(function(){
    $('#marveltext').fadeIn();
    $('#marveltext').animate({
        left:"400px",
    },"slow");
});


$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        $('#marvelimage').css('top', scroll + 'px');
    })
})


// Affichage Popup Box

var modal =document.getElementById('myModal');

var sendmodal = document.getElementById('sendmodal');

sendmodal.onclick = function(){
    modal.style.display = "block";
}