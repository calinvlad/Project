// OPENS UP THE MENU
$('#menu').on('click', function() {
    $('.header').addClass('header--open');
    $(this).hide();
    $('#logo').hide();
    $('#menu-2').show();
    $('#logo-2').show();
});

$('#menu-2').on('click', function() {
    $(this).hide();
    $('#logo-2').hide();
    // $('.header').removeClass('header--open');  
    if($('.header').hasClass('header--open')) {
        $('.header').removeClass('header--open');
        setTimeout(function() {
            $('#menu').show();
            $('#logo').show();
        },400);
    } 
});

// HERO PAINT AND TITLE
$(window).on('load', function() {
    $('#paintAnimation').addClass('about-hero__img--animation');
    setTimeout(function() {
        $('#titleAnimation').addClass('about-hero__title--animation');
    }, 1750)
    setTimeout(function() {
        $('.about-hero__title').css({'transition-duration': '0.1s'});
    }, 2000)

    
});
$(window).on('scroll', function() {
    var $window = $(window).scrollTop();
    $('.about-hero__title').css('opacity', 1 - $window / 250);
    if($window >= $('#titleShow').offset().top) {
        $('#title-1').addClass('about-us__title--show')
    }
    if($window >= $('#titleShow-2').offset().top) {
        $('#title-2').addClass('about-us__title--show')
    }
})
