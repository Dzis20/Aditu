$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.burger-menu.,main-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
 });

