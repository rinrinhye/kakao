$(".second-widget").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: false,
        arrows: false,
        dots: true,
      },
    },
  ],
});
