// Off Canvas Menu
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if ( matches.call( event.target, '.js-menu-link') ) {
            $('.js-wrapper').classList.toggle('menu-open');
            $('.js-navigation').classList.toggle('menu-open');

            event.preventDefault();
        }
    }, false);
});
