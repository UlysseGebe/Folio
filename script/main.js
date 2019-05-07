const $header = document.querySelector('header')
const $pres = document.querySelector('.presentation')
let limit = $pres.offsetHeight / 1.05

window.addEventListener('scroll', () => {
    let position = $pres.offsetHeight - window.pageYOffset
    if (position < limit) {
        $header.style.opacity = 1
    }
    else {
        $header.style.opacity = 0
    }
})