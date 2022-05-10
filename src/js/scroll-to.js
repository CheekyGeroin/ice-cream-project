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
