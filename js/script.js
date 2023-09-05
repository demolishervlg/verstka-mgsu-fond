$(function() {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function() {
        if($(this).scrollTop() > hederHeight) {
            header.addClass('header_fixed');
        } else {
            header.removeClass('header_fixed');
        }
    });

    const swiperProject= new Swiper('.swiper-project', {
        slidesPerView: 1,
        spaceBetween: 16,
        cssMode: true,
        mousewheel: true,
        keyboard: true,
        breakpoints: {
            500: {
                slidesPerView: "auto",
            },
            1030: {
                slidesPerView: "auto",
                cssMode: false,
            },
        }
    });


    const swiperManagement = new Swiper('.swiper-management', {
        slidesPerView: 1,
        spaceBetween: 15,
        autoHeight: true,
        breakpoints: {
            500: {
                slidesPerView: 2,
                autoHeight: false,
            },
            1030: {
                slidesPerView: "auto",
                autoHeight: false,
            },
        }
    });


    const swiperNews = new Swiper('.swiper-news', {
        slidesPerView: 1,
        spaceBetween: 15,
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1030: {
                slidesPerView: "auto",
            },
        }
    });

    $(".menu-item").each(function (i){
        $(this).find(".menu-item-submenu").css("padding-left", this.offsetLeft)
    });
});

