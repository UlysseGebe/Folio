const $header = document.querySelector('header')
const $logo = $header.querySelector('h1')
const $pres = document.querySelector('.presentation')

if (window.location.href.indexOf("contact") != -1) {
    $header.style.backgroundColor = '#ffffff'
    $header.style.borderBottom = '5px solid #f2f2f2'
    $logo.style.display = 'block'
    $logo.style.opacity = '1'
}
else {
    let limit = $pres.offsetHeight / 1.05
    window.addEventListener('scroll', () => {
        let position = $pres.offsetHeight - window.pageYOffset
        if (position < limit) {
            $header.style.backgroundColor = '#ffffff'
            $header.style.borderBottom = '5px solid #f2f2f2'
            $logo.style.display = 'block'
            $logo.style.opacity = '1'
        }
        else if (position > limit) {
            $header.style.backgroundColor = 'rgba(255, 255, 255, 0)'
            $header.style.borderBottom = 'none'
            $logo.style.opacity = '0'
            $logo.style.display = 'none'

        }
    })
}

