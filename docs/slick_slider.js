$('.multiple-items').slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        centerMode: true
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      }
    },
    {
      breakpoint: 555,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        vertical: true
      }
    }
  ]
});