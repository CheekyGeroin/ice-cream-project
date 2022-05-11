const slides = document.querySelectorAll('.modal-contacts__slide')

for (const slide of slides) {
    slide.addEventListener ('click', () => {
     clearActiveClasses() 

        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
