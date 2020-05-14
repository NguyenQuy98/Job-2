$('#id-menu-nav-header').click(function() {
    $("#navbarMenu").toggleClass('active-menu-mobile ');
});
$('#btnCloseMenuHeader').click(function() {
    $("#navbarMenu").toggleClass('active-menu-mobile ');
});

function menuMobile() {
    var windowH_1 = $('.active-menu-mobile').prop('scrollHeight');
    var windowH_2 = $(window).height();
    if (windowH_1 > windowH_2) {
        $('#navbarMenu').css({
            'height': 'max-content',
        })
    }


}
var getValuePrice = $(".priceFormat").data('value');
var txtPrice = (getValuePrice).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
$(".priceFormat").html(txtPrice + 'vnđ');
menuMobile();

$(document).ready(function() {
    $(window).resize(function() {
        menuMobile();
    });

});

var swiperHome = new Swiper('.swiperHome', {
    slidesPerView: 3,
    spaceBetween: 30,
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
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    }
});
var swiperBox6 = new Swiper('.swiperBox-6', {
    slidesPerView: 4,
    spaceBetween: 40,
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
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});