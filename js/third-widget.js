$(".third-widget").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  arrows: true,
  fade: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        speed: 500,
        variableWidth: false,
        arrows: true,
      },
    },
  ],
});
