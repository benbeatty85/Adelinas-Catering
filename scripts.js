$(document).ready(function(){
        $('.handle').on('click', function(e){
            e.preventDefault();
            $('nav ul').slideToggle();
        });
    });
