let hashTagActive = '';

$(document).ready(function () {
  $('.nav__link').click(function (event) {
    if (hashTagActive != this.hash) {
      event.preventDefault();
      let dest = 0;
      if ($(this.hash).offset() || { top: NaN } > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
      } else {
        dest = $(this.hash).offset() || { top: NaN };
      }
      $('html,body').animate(
        {
          scrollTop: dest,
        },
        2000,
        'swing',
      );
      hashTagActive = this.hash;
      console.log(hashTagActive);
    }
  });
});
// $(document).ready(function () {
//   $('.nav__link').click(function (event) {
//     event.preventDefault();
//     $('html, body').animate({ scrollTop: $(this.hash).offset() }, 1000);
//     console.log(555);
//     console.log($(this.hash));
//   });
// });
