//Toggle menu

$('.menu').on('click', function () {
    $(this).toggleClass('active');
    $('.overlay').toggleClass('menu-open');
});

$('.nav a').on('click', function () {
    $('.menu').removeClass('active');
    $('.overlay').removeClass('menu-open');
});



//Smooth Scrolling

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});



//page loader and delay animation when page loads

var loaderOverlay = document.getElementById("page-loader");
var mainTitle = document.getElementById("title-main");
var subTitle = document.getElementById("title-second");
var titlePara = document.getElementById("title-para");

window.addEventListener('load', function () {
    loaderOverlay.style.display = 'none';
    mainTitle.style.display = 'block';
    subTitle.style.display = 'block';
    titlePara.style.display = 'block';
});


//Slider

$(document).ready(function ($) {
    $('.carousel').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 2,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000
    });
});
