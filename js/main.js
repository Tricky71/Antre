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
        slidesToShow: 3,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }

    }]
  })





})



