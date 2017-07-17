//Return top button
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 1200);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

});

//Intro fade
    $(window).scroll(function() {
    if ($(window).scrollTop() > 240) {
        $('.intro-bg-image').css("opacity", 0.3).fadeIn("1000");;
    }
    else{
        $('.intro-bg-image').css("opacity", 1).fadeIn("1000") ;
    }
});
