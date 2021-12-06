$(document).ready(function () {
    $('.slider-wrapper').slick({
        dots: true,
        infinite: false,
        speed: 1000,
        autoplay: false,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                autoplay: false,
            }
        }]
    });
});