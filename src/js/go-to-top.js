window.onscroll = function () {
  scrollFunction();
};

const topBtn = document.querySelector('[data-scroll-top]');

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.classList.add('visible');
  } else {
    topBtn.classList.remove('visible');
  }
}
