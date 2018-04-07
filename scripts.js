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


 //Smooth Scrolling for navigation


    $(document).ready(function(){
        $('a[href*="#"]').on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop':  $target.offset().top 
            }, 800, 'swing', function () {
                window.location.hash = target;
            });
        });
    });