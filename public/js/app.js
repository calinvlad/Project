// TO DO: CLEAN THIS MESS UP

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


// SCROLL DOWN ANIMATION
$('#scroll').on('click', function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#aboutTriggerLower").offset().top
    }, 800);
});
// $('#scroll').on('mouseover', function() {
//     setTimeout(function() {
//         $([document.documentElement, document.body]).animate({
//             scrollTop: $("#aboutTriggerLower").offset().top
//         }, 800);
//     }, 3000) 
// });

// ABOUT US
// PAINT TRIGGER
$(window).on('scroll', function() {
      if($(window).scrollTop() >= $('#aboutTrigger').offset().top) {
        // $('#section2').addClass('in-view');
        $('#paint').addClass('about__paint--show')
      } 
    });
    
// PAINTDROP TRIGGER
// Pentru un efect mai natural, 2 picaturi , animatie mai intai pe cea mare dupa aceea apare cea mica
$('.about__item--3').on('mouseover', function() {
    $('.about__paintdrop').addClass('about__paintdrop--animation')
})



// SERVICES
// PAINT TRIGGER
$(window).on('scroll', function() {
    if($(window).scrollTop() >= $('#servicesTrigger').offset().top) {
      // $('#section2').addClass('in-view');
      $('#paint-2').addClass('services__paint--show')
    } else {
      $('#section2').removeClass('in-view');
    }
  });

//WATERDROP
// Pentru un efect mai natural. ce zice mai sus la PAINTDROP TRIGGER
$('.services__item--2').on('mouseover', function() {
    $('.services__waterdrop').addClass('services__waterdrop--animation');
})

//SERVICES EXTRA 
    var $design = $('#design');
    var $programming = $('#programming');
    var $marketing = $('#marketing');

    var $designIcon = $('#designIcon');
    var $programmingIcon = $('#programmingIcon');
    var $marketingIcon = $('#marketingIcon');

    var $active = $('#servicesActive');
    var $active2 = $('#servicesActive2');
    var $active3 = $('#servicesActive3');

    $active.on('mouseover', function() {  
        $design.removeClass('under').addClass('over');
        $designIcon.removeClass('over').addClass('under')
    }); 
    $active2.on('mouseover', function() {  
        $programming.removeClass('under').addClass('over');
        $programmingIcon.removeClass('over').addClass('under')
    });
    $active3.on('mouseover', function() {  
        $marketing.removeClass('under').addClass('over');
        $marketingIcon.removeClass('over').addClass('under')
    })


//PORTOFOLIO
//PAINT TRIGGER
$(window).on('scroll', function() {
    if($(window).scrollTop() >= $('#categoryTrigger').offset().top) {
      // $('#section2').addClass('in-view');
      $('#paint-3').addClass('category__paint--show')
    } 
  });


//CHAT
$(window).on('scroll', function() {
    if($(window).scrollTop() >= $('#paintBrushTrigger').offset().top) {
      $('#paintBrush').addClass('paintbrush--box-animation');
    } 
  });