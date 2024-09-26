import { countingStart } from './count';

$('.first-widget-slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  autoplay: true,
  dots: true,
  fade: true,
  arrows: false,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dots: false,
        fade: false,
        arrows: true,
      },
    },
  ],
});

$('.first-widget-slide').on(
  'init reinit beforeChange',
  function (e, slick, currentSlide) {
    const customPaging =
      document.documentElement.querySelector('.custom-paging');
    const currentNumberSpan = customPaging.querySelector('.num_current');

    if (currentSlide === 0) {
      currentNumberSpan.innerHTML = 2;
    } else {
      currentNumberSpan.innerHTML = 1;
      if (slick.activeBreakpoint === null) {
        countingStart();
      }
    }
  }
);
