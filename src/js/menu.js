const btnMenu = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const bodyLock = document.querySelector('[data-menu-lock]');

const toggleMenu = function () {
  const expanded = btnMenu.getAttribute('aria-expanded') === 'true' || false;
  menu.classList.toggle('is-open');
  btnMenu.setAttribute('aria-expanded', !expanded);

  btnMenu.classList.toggle('active');
  bodyLock.classList.toggle('lock-menu');
};

btnMenu.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', function (e) {
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == btnMenu;
  const menu_is_active = menu.classList.contains('is-open');
  const body_is_loked = bodyLock.classList.contains('lock-menu');

  if (!its_menu && !its_btnMenu && menu_is_active && body_is_loked) {
    toggleMenu();
  }
});

let hashTagActive = '';

$(document).ready(function () {
  $('.scroll__to').click(function (event) {
    if (hashTagActive != this.hash) {
      event.preventDefault();
      let dest = 0;
      if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        dest = $(document).height() - $(window).height();
      } else {
        dest = $(this.hash).offset().top;
      }
      $('html,body').animate(
        {
          scrollTop: dest,
        },
        1500,
        'swing',
      );
      // hashTagActive = this.hash;
      // console.log(hashTagActive);
      toggleMenu();
    }
  });
});
