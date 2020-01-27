! function(i) {
    var o, n;
    i(".title_block").on("click", function() {
        o = i(this).parents(".accordion_item"), n = o.find(".info"),
            o.hasClass("active_block") ? (o.removeClass("active_block"),
                n.slideUp()) : (o.addClass("active_block"), n.stop(!0, !0).slideDown(),
                o.siblings(".active_block").removeClass("active_block").children(
                    ".info").stop(!0, !0).slideUp())
    })
}(jQuery);

function initMap() {
    var
        outerLocation = $('#map').attr('data-location'),
        Niko = {lat: 41, lng: 31},
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: Niko
        });
    // console.log( outerLocation );
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': outerLocation}, function (result, status) {
        if (status === 'OK') {
            map.setCenter(result[0].geometry.location);
            map.setZoom(17);
            var marker = new google.maps.Marker({
                position: result[0].geometry.location,
                // draggable: true,
                map: map
            });
            // addMarker(result[0].geometry.location, geocoder);
        }
        else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    })
}


jQuery( document ).ready( function( $ ) {
      $('.menu__icon, .overlay').click(function(){
      $('.burger').toggleClass('menu_state_open');
      $('.overlay').toggleClass('show');
      $('nav').toggleClass('show');
      $('body').toggleClass('overflow');
});

(function($){
 $(function() {
   $('.menu__icon').on('click', function() {
     $(this).closest('.menu').toggleClass('menu_state_open');
   });
 });
})(jQuery);


    $('.slick-carousel-education').slick({
        centerMode: true,
        centerPadding: '150px',
        autoplay: true,
        arrows: true,
        dots: true,
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slideToScroll: 1,
        adaptiveHeight: false,
        appendDots: $(".slide-e-dots"),
        prevArrow: $(".slide-e-prev"),
        nextArrow: $(".slide-e-next"),
        responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        }
        ]
    });

    $('.slick-carousel-cities-info').slick({
      asNavFor: '.slick-carousel-cities',
      slideToShow: 1,
      slideToScroll: 1,
      arrows: true,
      fade: true,
      dots: true,
      appendDots: $(".slide-c-dots"),
      prevArrow: $(".slide-c-prev"),
      nextArrow: $(".slide-c-next"),
      infinite: true,
      autoplay: true,
      responsive:  [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slideToScroll: 1,
                  arrows: false,
                  dots: true,
                  centerMode: true,
                  centerMode: '200px',
                  centerPadding: '0px',
                  initialSlide: 1,
              }
          },
      ]
    });

    $('.slick-carousel-cities').slick({
      asNavFor: '.slick-carousel-cities-info',
      slideToShow: 1,
      slideToScroll: 1,
      fade: true,
      centerMode: false,
      arrows: false,

      // prevArrow:'<button class="tm-slick-prev"> </button>',
      // nextArrow: '<button class="tm-slick-next"> </button>',

      responsive:  [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slideToScroll: 1,
                  arrows: false,
                  dots: false,
                  centerMode: true,
                  centerMode: '200px',
                  centerPadding: '0px',
                  initialSlide: 1,
              }
          },
      ]
    });

    $('.slick-carousel-larnakas').slick({
      asNavFor: '.slick-carousel-arrows',
      slideToShow: 1,
      slideToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      centerMode: false,
      autoplay: true,

      responsive:  [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slideToScroll: 1,
                  arrows: false,
                  dots: false,
                  centerMode: true,
                  centerMode: '200px',
                  centerPadding: '0px',
                  initialSlide: 1,
              }
          },
      ]
    });

    $('.slick-carousel-arrows').slick({
        asNavFor: '.slick-carousel-larnakas',
        dots: false,
        arrows: true,
        fade: true,
        slideToShow: 1,
        slideToScroll: 1,
        prevArrow: $(".slide-l-prev"),
        nextArrow: $(".slide-l-next"),

        responsive:  [
            {
                breakpoint: 992,
                settings: {
                    mobileFirst: true,
                    responsive: true,
                    slidesToShow: 1,
                    slideToScroll: 1,
                    dots: false,
                    // centerMode: true,
                    // centerMode: '200px',
                    // centerPadding: '0px',
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    mobileFirst: true,
                    responsive: true,
                    slidesToShow: 1,
                    slideToScroll: 1,
                    dots: false,
                    // centerMode: true,
                    // centerMode: '200px',
                    // centerPadding: '0px',
                    initialSlide: 1,
                }
            },
        ]
    });


    absFormPosCenter(
        $sliderPrimary.siblings().find('.form-wrap'),
        $sliderPrimary,
        'bottom',
        $sliderPrimary.find('.slick-dots')
    );
    absFormPosCenter(
        $('#map-abs'),
        $('#map'),
        'bottom'

    );
    $(window).on('resize',function () {
        absFormPosCenter(
            $sliderPrimary.siblings().find('.form-wrap'),
            $sliderPrimary,
            'bottom',
            $sliderPrimary.find('.slick-dots')
        );
        absFormPosCenter(
            $('#map-abs'),
            $('#map'),
            'bottom'

        );

    });

    function absFormPosCenter(itemToPlace,itemToPlaceIn,positionFrom,disturbingElem) {
        var disturbingHeight = disturbingElem !== undefined ? disturbingElem.height() : 0;
        if($(window).width() > 990){
            itemToPlace.css(positionFrom,(itemToPlaceIn.height() - itemToPlace.height())/2 + disturbingHeight + 'px')
        } else {
            itemToPlace.css(positionFrom,'auto');

        }

    }

    var $sliderTestimonials = $('.testimonial-carousel');
    $sliderTestimonials.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // fade: true,
        // cssEase: 'linear',
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
           ]
    });

    BURGER MENU




     $('body').append('<div id="overlayer"></div>')
     var $over = $('#overlayer'),
         $burger = $("#burger-menu");

     if($over.length > 0){
         $over.on('click',function () {
             $("body").removeClass("open-custom-menu");
         })
    }

    if($burger.length > 0){
         $burger.click(function () {
             $("body").toggleClass("open-custom-menu");
         });
     }


     var $flip_timers = $('.FlipClock-timer');
     if($flip_timers.length > 0){

         $flip_timers.FlipClock($flip_timers.attr('data-flipclock')*60, {
             clockFace: 'DailyCounter',
            countdown: true,
            language: 'russian',
             onStop: function() {
                alert('Акция закончилась, увы и ах!')
             },
        });
     }


     $('.phone-masked').mask("+38(999)-999-99-99?");


     var $overlayed = $('.overlayed');
     if($overlayed.length > 0){
         $overlayed.on('click',function () {
             $over.animate({
                 opacity: 1
            }, 500).css({'display':'block'});
            $(this).css({'z-index':'5'})
         });

         $over.on('click',function () {
             $over.animate({
                 opacity: 0
            }, 500);
             setTimeout(function () {
                 $over.css({'display':'none'});
                 $overlayed.each(function (index,elem) {
                     $(elem).css({'z-index':'1'});
                 });
             },500);
        })
     }


     body.animate({scrollTop:0}, '500');


     $('[data-scrollTo]').on('click', function (event) {
         event.preventDefault();
         let el = $(this).attr('data-scrollTo');
         $("html, body").animate({
             scrollTop: $(el).offset().top
         }, 1000);
     });

     (function($){
      $(function() {
        $('.menu__icon').on('click', function() {
          $(this).closest('.menu').toggleClass('menu_state_open');
        });
      });
    })(jQuery);
 });
