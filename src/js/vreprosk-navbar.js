// VER ISSO DEPOIS DE CRIAR O BANNER (E SE CRIAR!)

$(document).ready(function () {

    var menu = $('#site_navbar');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.menu').addClass('sticky');
            $('.content').addClass('menu-padding');
        } else {
            $('.menu').removeClass('sticky');
            $('.content').removeClass('menu-padding');
        }


    }

    document.onscroll = scroll;

});