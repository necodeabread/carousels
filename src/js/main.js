AOS.init({disable: 'mobile'});

$(".navbar__close-btn").click(() => {
    $('body').css("overflow", "hidden");
    $(".bar").each(() => {
        $(".bar").toggleClass("bar_active");
    })
    $(".navbar__logo").toggleClass("navbar__logo_active");
    $(".navbar__hidden").toggleClass("navbar__hidden_active");
    $(".modal-btn").eq(0).toggleClass("modal-btn_transparent").toggleClass("modal-btn_active");
    setTimeout(() => {
        $(".modal-btn__img").toggleClass("modal-btn__img_active");
    }, 600);

    document.addEventListener('mouseup', (e) => {
        if (document.querySelector("nav").contains(e.target)) return;
        $(".navbar__logo").removeClass("navbar__logo_active");
        $(".navbar__hidden").removeClass("navbar__hidden_active");
        $(".modal-btn").addClass("modal-btn_transparent").removeClass("modal-btn_active");
        $(".bar").each(() => {
            $(".bar").removeClass("bar_active");
        });
        setTimeout(() => {
            $(".modal-btn__img").toggleClass("modal-btn__img_active");
        }, 600);
    }, {once: true});

    document.addEventListener( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) { 
            $(".navbar__logo").removeClass("navbar__logo_active");
            $(".navbar__hidden").removeClass("navbar__hidden_active");
            $(".modal-btn").addClass("modal-btn_transparent").removeClass("modal-btn_active");
            $(".bar").each(() => {
                $(".bar").removeClass("bar_active");
            });
            setTimeout(() => {
                $(".modal-btn__img").toggleClass("modal-btn__img_active");
            }, 600);
        }
    }, {once: true});
});

$(".modal-btn__wrapper").click(() => {
    $(".modal-window").addClass("modal-window_active");
    $(".footer-arrow-home").fadeOut();
    document.addEventListener('keydown', (e) => {
        if(e.keyCode === 27) {
            $(".modal-window").removeClass("modal-window_active");
        }
    });
    document.addEventListener("mouseup", (e) => {
        if(document.querySelector(".modal-window").contains(e.target)) return;
        $(".modal-window").removeClass("modal-window_active");
    })
});
$(".modal-window-close").click(() => {
    $(".modal-window").removeClass("modal-window_active");
    $(".footer-arrow-home").fadeIn();
});



let offsetX = 0;
let currentId = 1;
function moveSlide () {
    document.querySelectorAll('.about__indicators-item').forEach(elem => {
        elem.classList.remove("about__indicators-item_active");
    })
    document.querySelectorAll('.about__indicators-item')[currentId].classList.add("about__indicators-item_active");

    $(".about__carousel").css("transform", `translateX(${-(currentId) * 20}%)`);
    currentId == 4? currentId = 0 : currentId++;
}

setInterval(moveSlide, 10000);

for(let i = 0; i < $(".about__indicators").children().length; i++) {
    $(".about__indicators-item").eq(i).click(() => {
        $(".about__indicator-item").each(() => {
            $(".about__indicator-item").removeClass(".about__indicators-item_active")
        });
        $(".about__indicators-item").eq(i).addClass(".about__indicators-item_active");
        currentId = i;
        moveSlide()
        console.log(i);
    });
}

$(".footer-arrow-home").click(() => {
    $('html, body').animate({
        scrollTop: $('html, body').offset().top
    }, 600);
});

$('.slider').slick({
    slidesToShow: 1,
    arrows: true,
    variableWidth: true,
    variableHeight: true,
    infinte: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
});

if($(window).width() < 1024) {
    $(".slick-arrow").each(() => {
        $(".slick-arrow").remove();
    })
    $(".footer-arrow-home").remove()
}

$(".slick-prev, .slick-next").empty();

$('.about__mouse').on('click', () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".screen-second__header").offset().top
    }, 2000);
})

document.querySelectorAll('.imgtoggler').forEach((node) => {
    node.addEventListener('click', () => {
        const sliderNode = node.closest('.screen').querySelector('.slider');
        $(sliderNode).fadeIn();
        $(".popup").fadeIn();
        $(".footer-arrow-home").fadeOut();

        document.addEventListener('mouseup', (e) => {
            if (sliderNode.contains(e.target)) return;
            $(sliderNode).fadeOut();
            $(".popup").fadeOut();
            $(".footer-arrow-home").fadeIn();
        }, {once: true})

        $(document).on("keydown", (e) => {
            if(e.keyCode === 27) {
                $(".slick-initialized").fadeOut();
                $(".popup").fadeOut();
            }
        })
    })
});

document.querySelectorAll('.form-input').forEach((input) => {
    $(input).focusin(() => {
        $(input.closest(".form-slot").querySelector(".form-label")).addClass("form-label_active");
    })
    $(input).focusout(() => {
        $(".form-label").removeClass("form-label_active");
    })
});

$(window).scroll(() => {
    if($(document).scrollTop() < $(".screen-second__header").offset().top) {
        $(".footer-arrow-home").fadeOut();
    } else {
        $(".footer-arrow-home").fadeIn();
    }
    
    if($(".footer").offset().top * 0.9 < $(document).scrollTop()) {
        $(".footer-arrow-home").addClass("endmove");
    } else {
        $(".footer-arrow-home").removeClass("endmove");
    }
});
