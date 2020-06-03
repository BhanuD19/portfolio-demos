const responsive = {
  320:{
    items:1
  },
  560:{
    items:2
  },
  960:{
    items:3
  }
};

AOS.init();

$(document).ready(function () {
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  // Click event on toggle menu
  $toggleCollapse.click(function () {
    $nav.toggleClass('collapse');
  })

//  Owl Carousel for blog

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive:responsive,
    navText:[$('.owl-nav-prev'),$('.owl-nav-next')]
  });

  // click to scroll
  $('.move-up span').click(function() {
    $('html,body').animate({
      scrollTop:0
    }, 1000);
  })
});
