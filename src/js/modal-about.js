const refs = {
  openAboutModalBtn: document.querySelector('[data-about-modal-open]'),
  closeAboutModalBtn: document.querySelector('[data-about-modal-close]'),
  backdrop: document.querySelector('[data-about-modal]'),
};

refs.openAboutModalBtn.addEventListener('click', toggleModal);
refs.closeAboutModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.backdrop.classList.toggle('is-hidden');
  document.body.classList.toggle('lock-form');
}
