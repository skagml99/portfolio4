$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            disableOnInteraction: false,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })
})

$(function () {
    AOS.init();
})



// 반응형
$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on')
        $(' .header .gnb').toggleClass('on')
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }

    });

    $(window).on('resize', function () {
        $('.header .mbtn').removeClass('on');
        $('.header .gnb').removeClass('on');
        $('.header .gnb>ul ul').removeAttr('style')
    });

    $('.header .gnb').on('whell touchmove', function (e) {
        e.preventDefault();
    })
});