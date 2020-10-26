$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.burger-menu,.main-nav,.header-form').toggleClass('active');
        $('body').toggleClass('lock');
    });
 });

