const refs = {
  openMenuModalBtn: document.querySelector('[data-menu-modal-open]'),
  openHeaderModalBtn: document.querySelector('[data-header-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
};

refs.openMenuModalBtn.addEventListener('click', toggleModal);
refs.openHeaderModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  document.body.classList.toggle('lock-form');
  refs.backdrop.classList.toggle('is-hidden');
}
