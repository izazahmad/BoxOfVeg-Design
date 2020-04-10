/*==================================
    Wow- animation reveal on scroll
====================================*/
$(function () {
    new WOW().init();
});
/*==================================
                Navgation
====================================*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("boxofveg-top-nav");
        } else {
            $("nav").addClass("boxofveg-top-nav");
        }
    });
});
/*==================================
                Logo
====================================*/
/* change logo on mouse hover*/
$(function () {
    $(".logo").hover(function () {
            $(this).attr("src", "content/images/whitelogo.png");
        },
        function () {
            $(this).attr("src", "content/images/logo.png");
        })
});
/*==================================
                owl carousel slider
====================================*/
$(function () {
    //owl carousel categories slider
    $("#bov-slide-carousel").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="far fa-arrow-alt-circle-left d-flex align-items-center"></i>', '<i class="far fa-arrow-alt-circle-right d-flex align-items-center"></i>'],
        autoplay: true,
        loop: true,
        smartSpeed: 450,
        autoplayHoverPause: true,
        animateIn: 'flipInX',
        animateOut: 'slideOutDown',
        responsive: {
            768: {
                autoplay: false,
                animateIn: false,
                animateOut: false
            }
        }
    });
    // magnific popup- it opens up the image by clicking on it
    $(".img-block").magnificPopup({
        //child items selector
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*==================================
            scrolling up
====================================*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $("#scroll-up").fadeIn();
    } else {
        $("#scroll-up").fadeOut();
    }
});
$(function () {
    $("a.smooth-scroll").click(function () {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 1250, "easeInOutExpo");
    });
});