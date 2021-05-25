(function($) {
    "use strict";

    /* ..............................................
    Navbar Bar
    ................................................. */

    $('.navbar-nav .nav-link').on('click', function() {
        var toggle = $('.navbar-toggler').is(':visible');
        if (toggle) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    /* ..............................................
    Fixed Menu
    ................................................. */

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.top-header').addClass('fixed-menu');
        } else {
            $('.top-header').removeClass('fixed-menu');
        }
    });



    /* ..............................................
    Scroll To Top
    ................................................. */

    $(document).ready(function() {

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#scroll-to-top').fadeIn();
            } else {
                $('#scroll-to-top').fadeOut();
            }
        });

        $('#scroll-to-top').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });


    /* ..............................................
    Smooth Scroll
    ................................................. */

    $('a[href*="#"]:not([href="#"])').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 65,
                }, 1000);
                return false;
            }
        }
    });


}(jQuery));