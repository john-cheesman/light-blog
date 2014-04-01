// Off Canvas Menu
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(event) {
        if ( matches.call( event.target, '.js-menu-link') ) {
            $('body').classList.toggle('menu-open');
        }

        event.preventDefault();
    }, false);
});
