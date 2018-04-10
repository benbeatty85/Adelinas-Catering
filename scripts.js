//toggle menu bar

$(document).ready(function(){
        $('.handle').on('click', function(e){
            e.preventDefault();
            $('nav ul').slideToggle(-1000);
        });
    });

$(document).ready(function() {
    $('.menu-link').on('click', function (e) {
        e.preventDefault();
        $('nav ul').hide();
    })
})

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


      // Scrolling effect on desktop navigation

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('white');
            }

            else {
                  $('nav').removeClass('white');
            }
      })

    //slideshow


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}