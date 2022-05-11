(() => {
  const refs = {
    // openlocationsBtn: document.querySelector("[data-modal-open-locations]"),
    openFranchiseBtn: document.querySelector("[data-modal-open-franchise]"),
    closeModalBtn: document.querySelector("[data-modal-close-locations]"),
    modal: document.querySelector("[data-modal-locations]"),
  };

  // refs.openlocationsBtn.addEventListener("click", toggleModal);
  refs.openFranchiseBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();