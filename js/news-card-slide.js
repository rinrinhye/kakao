$window = $(window);

$(document).ready(function () {
  if ($window.width() >= 1024) {
    $(".news-card-slide").slick("unslick");
    $(".sm-news-card-slide").slick("unslick");
  } else {
    $(".news-card-slide").slick({
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick",
        },
        {
          breakpoint: 1024,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            appendArrows: $(".news-card-slide-arrows"),
          },
        },
      ],
    });

    $(".sm-news-card-slide").slick({
      responsive: [
        {
          breakpoint: 9999,
          settings: "unslick",
        },
        {
          breakpoint: 1024,
          settings: {
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            arrows: false,
            dots: true,
            dotsClass: "slider-dots",
          },
        },
      ],
    });
  }
});

$(window).on("resize", function () {
  if ($(window).width() < 1024) {
    if (
      $(".news-card-slide").hasClass("slick-initialized") &&
      $(".sm-news-card-slide").hasClass("slick-initialized")
    ) {
    } else {
      $(".news-card-slide").slick({
        responsive: [
          {
            breakpoint: 9999,
            settings: "unslick",
          },
          {
            breakpoint: 1024,
            settings: {
              infinite: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              fade: true,
              appendArrows: $(".news-card-slide-arrows"),
            },
          },
        ],
      });
      $(".sm-news-card-slide").slick({
        responsive: [
          {
            breakpoint: 9999,
            settings: "unslick",
          },
          {
            breakpoint: 1024,
            settings: {
              infinite: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              speed: 500,
              fade: true,
              arrows: false,
              dots: true,
              dotsClass: "slider-dots",
            },
          },
        ],
      });
    }
  } else if ($window.width() >= 1024) {
    if (
      $(".news-card-slide").hasClass("slick-initialized") &&
      $(".sm-news-card-slide").hasClass("slick-initialized")
    ) {
      $(".news-card-slide").slick("unslick");
      $(".sm-news-card-slide").slick("unslick");
    }
  }
});
