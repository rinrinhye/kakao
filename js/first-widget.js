$(".first-widget-slide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  autoplay: true,
  dots: true,
  fade: true,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dots: true,
        fade: false,
        arrows: true,
        customPaging: (slider, i) => {
          console.log(slider);
          return i + 1;
        },
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        fade: true,
        dots: true,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        fade: true,
        dots: true,
      },
    },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        fade: true,
        dots: true,
      },
    },
  ],
});
