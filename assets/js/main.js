(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {

        $(document).ready(function () {
            $('#nav').onePageNav();
        });




        //------------ Hero slider -------------

        $('.explore__active').owlCarousel({
            loop: true,
            margin: 0,
            navText: ['', '<i class="far fa-angle-right"></i>'],
            nav: true,
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })



        $('.cart__img').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dot: false,
            autoplay:true,
            autoplayTimeout:4000,
            smartSpeed:1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })


        $('.cart__img2').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dot: false,
            autoplay:true,
            autoplayTimeout:4000,
            smartSpeed:1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })



        //---owl dots number-----

        var i = 1;

        $('.hero-slier-main.owl-carousel .owl-dot').each(function () {
            $(this).text(i);
            i++;
        });









   //  offcanvas-menu

        //    click-action
        $(".about_details").on("click", function () {
            $(".anastasios_detail").addClass("active");
            return false;
        });

        $(".founder, .demi_about_details").on("click", function () {
            $(".anastasios_detail").removeClass("active");
        }); 


        //    click-action
        $(".demi_about_details").on("click", function () {
            $(".demi_detail").addClass("actived");
            return false;
        });

        $(".founder, .about_details").on("click", function () {
            $(".demi_detail").removeClass("actived");
        });







    }); //---document-ready-----





}(jQuery));