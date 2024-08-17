$window = $(window);

function newsCardSettings() {
  return $('.news-card-slide').slick({
    accessibility: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          fade: true,
          appendArrows: $('.news-card-slide-arrows'),
        },
      },
    ],
  });
}

function smNewsCardSettings() {
  return $('.sm-news-card-slide').slick({
    accessibility: false,
    responsive: [
      {
        breakpoint: 9999,
        settings: 'unslick',
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
          dotsClass: 'slider-dots',
        },
      },
    ],
  });
}

$(document).ready(function () {
  if ($window.width() >= 1024) {
    return;
  } else {
    newsCardSettings();
    smNewsCardSettings();
  }
});

$(window).on('resize', function () {
  if ($(window).width() < 1024) {
    if (
      $('.news-card-slide').hasClass('slick-initialized') &&
      $('.sm-news-card-slide').hasClass('slick-initialized')
    ) {
      return;
    } else {
      newsCardSettings();
      smNewsCardSettings();
    }
  } else if ($window.width() >= 1024) {
    if (
      $('.news-card-slide').hasClass('slick-initialized') &&
      $('.sm-news-card-slide').hasClass('slick-initialized')
    ) {
      $('.news-card-slide').slick('unslick');
      $('.sm-news-card-slide').slick('unslick');
    }
  }
});
