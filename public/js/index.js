$(function() {
    $('.banner__wrapper').slick({
        dots: false,
        infinite: true,
        fade:true,
        speed: 300,
        autoplay:true,
        slidesToShow: 1,
        adaptiveHeight: true
      });
  });

  $(function() {
    $('.banner_foter__box').slick({
        dots: false,
  infinite: true,
  speed: 300,
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
      });
  });
  
  
//   $(function() {
//           $('.news__slider').owlCarousel();
//     });