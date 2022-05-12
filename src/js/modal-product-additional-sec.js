(() => {
  const refs = {
    openModalBtn: document.querySelector('[product-modal-second-open]'),
    closeModalBtn: document.querySelector('[product-modal-second-close]'),
    modal: document.querySelector('[product-modal-second]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('lock-form');
  }
})();
