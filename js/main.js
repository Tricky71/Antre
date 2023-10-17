'use strict';

document.addEventListener('DOMContentLoaded', function() {

  $(".slider__list--1").slick({
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true, 
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }

    }]
  });

  $(".slider__list--2").slick({
    slidesToShow: 20,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true, 
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 15,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 8,
      }

    }]
  })

  $(".slider__list--3").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true, 
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }

    }]
  })

  $(".slider__list--4").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true, 
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 8,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }

    }]
  })

  $(".slider__list--5").slick({
    slidesToShow: 14,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true, 
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 14,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 4,
      }

    }]
  })

  $(".slider__list--6").slick({
    slidesToShow: 14,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true, 
    rtl: true,
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 14,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 4,
      }

    }]
  })

})



