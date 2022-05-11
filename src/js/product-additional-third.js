(() => {
  const refs = {
    openModalBtn: document.querySelector("[product-modal-third-open]"),
    closeModalBtn: document.querySelector("[product-modal-third-close]"),
    modal: document.querySelector("[product-modal-third]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();