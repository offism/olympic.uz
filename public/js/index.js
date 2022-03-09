$(function() {
    $('.banner__wrapper').slick({
        dots: false,
        infinite: true,
        fade:true,
        speed: 300,
        // autoplay:true,
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


function openCity(evt, cityName = 'Paris') {
  // Declare all variables
  var i, tabcontent, tablinks;
 console.log(evt)
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}