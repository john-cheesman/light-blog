// Off Canvas Menu
$('document').ready(function() {
    $(document).on('click', '.js-menu-link', function() {
       $('body').toggleClass('menu-open');
    });
});
