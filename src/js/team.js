$(document).ready(function () {
  $('.your-class-team').slick({
    arrows: true,
    centerMode: true,
    // centerPadding: '60px',
    // slidesToShow: 4,

    responsive: [
      {
        breakpoint: 3200,
        settings: {
          slidesToShow: 3,
          centerPadding: '90px',
        }
      },
      {
        breakpoint: 1144,
        settings: {
          slidesToShow: 2,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 708,
        settings: {
          arrows: false,
          slidesToShow: 1,
          centerPadding: '0px',
        }
      }
    ]
  })
});
