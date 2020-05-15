// animate
AOS.init();
// menu----------------------------------------------------
$('#id-menu-nav-header').click(function() {
    $("#navbarMenu").toggleClass('active-menu-mobile ');
});
$('#btnCloseMenuHeader').click(function() {
    $("#navbarMenu").toggleClass('active-menu-mobile ');
});

$('#btnSupport').click(function() {
    $("#supportContent").toggleClass('active');
});
// format price----------------------------------------------
var getValuePrice = $(".priceFormat").data('value');
var txtPrice = (getValuePrice).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
$(".priceFormat").html(txtPrice + 'vnđ');
// set height----------------------------------------------

function menuMobile() {
    var windowH_1 = $('.active-menu-mobile').prop('scrollHeight');
    var windowH_2 = $(window).height();
    if (windowH_1 > windowH_2) {
        $('#navbarMenu').css({
            'height': 'max-content',
        });
    }



}
menuMobile();

$(document).ready(function() {
    $(window).resize(function() {
        menuMobile();
    });
    // scroll top---------------------------------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $('#btnGoTop').fadeIn();
        } else {
            $('#btnGoTop').fadeOut();
        }
    });
    $('#btnGoTop').click(function() {
        // $('#btnGoTop').tooltip('hide', 800);
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // $('#btnGoTop').tooltip('show', 800);
});

// page home---------------------------------------------
var swiperHome = new Swiper('.swiperHome', {
    slidesPerView: 3,
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        stopOnLast: true,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.next_item',
        prevEl: '.prev_item',
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
    }
});
var swiperBox6 = new Swiper('.swiperBox-6', {
    slidesPerView: 4,
    spaceBetween: 15,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        stopOnLast: true,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.next_blog',
        prevEl: '.prev_blog',
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
    }
});
var swiperVisa = new Swiper('.swiperVisa', {
    slidesPerView: 4,
    spaceBetween: 15,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        stopOnLast: true,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.next_visa',
        prevEl: '.prev_visa',
    },
    breakpoints: {
        450: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
    }
});