$(".third-widget").slick({
  responsive: [
    {
      breakpoint: 768,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        variableWidth: false,
        arrows: true,
      },
    },
  ],
});
