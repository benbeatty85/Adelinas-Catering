//toggle menu bar

$(document).ready(function(){
        $('.handle').on('click', function(e){
            e.preventDefault();
            $('nav ul').slideToggle();
        });
    });

//page loader

var overlay = document.getElementById("overlay");

window.addEventListener('load', function () {
  overlay.style.display = 'none';
});
