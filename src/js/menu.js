const btnMenu = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const toggleMenu = function () {
  menu.classList.toggle('is-open');
  btnMenu.classList.toggle('active');
  btnMenu.setAttribute('aria-expanded', !expanded);
  const expanded = btnMenu.getAttribute('aria-expanded') === 'true' || false;
  document.body.classList.toggle('lock-menu');
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

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});

btnMenu.addEventListener('click', () => {
  document.body.classList.toggle('lock-menu');
});
