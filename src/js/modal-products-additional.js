(() => {
  const refs = {
    openModalBtn: document.querySelector("[product-modal-open]"),
    closeModalBtn: document.querySelector("[product-modal-close]"),
    modal: document.querySelector("[product-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();