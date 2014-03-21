/* Main Light Blog functions */
$('html').attr('class', 'js');

$(document).ready(function() {

    /* Fixed header class */
    $(document).scroll(function() {
        if ($(document).scrollTop() > 0) {
            var offset = $('.header-main').height();
            console.log(offset);

            $('.header-main').addClass('fixed');
            $('body').css('margin-top', offset + 'px');
        }
        else {
            $('.header-main').removeClass('fixed');
            $('body').css('margin-top', 0);
        }
    })

    /* Reveal menu */
    $('.menu-link').click(function(e) {
        var menu = $('.nav-main');

        menu.slideToggle();
        e.preventDefault();
    })
})
