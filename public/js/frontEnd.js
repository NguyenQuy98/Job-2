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
if (typeof(getValuePrice) == "undefined") {
    getValuePrice = 0;
}
var txtPrice = (getValuePrice).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,');
$(".priceFormat").html(txtPrice + 'vnđ');
// set height----------------------------------------------

function menuMobile() {
    var windowH_1 = $('.active-menu-mobile').prop('scrollHeight');
    var windowH_2 = $(window).height();
    var header = $('#header').height();

    if (windowH_1 > windowH_2) {
        $('#navbarMenu').css({
            'height': 'max-content',
        });
    }
    $('header').css({
        'margin-bottom': header,
    });
}
menuMobile();



$(document).ready(function() {
    $('.bannerHome .imgBoxBanner').toggleClass('active');
    $(window).resize(function() {
        menuMobile();
    });
    // scroll top---------------------------------------------
    $(window).scroll(function() {
        var header = $('#header');
        if ($(this).scrollTop() > 20) {
            $('#btnGoTop').fadeIn();
        } else {
            $('#btnGoTop').fadeOut();
        }
        // if ($(this).scrollTop() > 1) {
        //     $('#header').addClass('borderHeader');
        // } else {
        //     $('#header').removeClass('borderHeader');
        // }
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
var slideInfoD = new Swiper('.slide-infoD', {

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        stopOnLast: true,
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.paginationInfoD',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.next_infoD',
        prevEl: '.prev_infoD',
    },
});

var swiperEvaluate = new Swiper('.swiperEvaluate', {
    slidesPerView: 3,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        stopOnLast: true,
    },
    // loop: true,
    // loopFillGroupWithBlank: true,

    breakpoints: {
        450: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1020: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    }
});
// page category-----------------------------------------
$('.box-filter-1').click(function() {
    $(".box-filter-1").toggleClass('collapse');
    $(".box-filter-1").toggleClass('show');
});
$('.box-filter-2').click(function() {
    $(".box-filter-2").toggleClass('collapse');
    $(".box-filter-2").toggleClass('show');
});
$('.box-filter-3').click(function() {
    $(".box-filter-3").toggleClass('collapse');
    $(".box-filter-3").toggleClass('show');
});
$('.box-filter-4').click(function() {
    $(".box-filter-4").toggleClass('collapse');
    $(".box-filter-4").toggleClass('show');
});

$('.IDBoloc').click(function() {
    $(".box-content-filter-main .box-filter-l").toggleClass('active');
});
$('.IDSapxep').click(function() {
    $(".box-name-title .fr").toggleClass('active');
});

// detal------------------------------------------
$('#IDNoteCom').click(function() {
    $(".formComment .content-info").show("slow");
});
$(".content-info .btn-close").click(function() {
    $(".formComment .content-info").hide(1000);
});


// popup đặt hàng---------------------------------
$("#btnCheckout").click(function() {
    $('#box-content-cart .strategy').addClass("active");
    $('#nav-tab-cart .box2').addClass("active");

    $('#box-content-cart .discovery').removeClass("active");

    setTimeout(function() {
        $('#nav-tab-cart .box3').addClass("active");
        $('#box-content-cart .creative').addClass("active");
        $('#box-content-cart .strategy').removeClass("active");
        $('#box-content-cart .discovery').removeClass("active");
    }, 3000);
});