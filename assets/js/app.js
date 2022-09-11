// Scroll Navbar
const navBar = document.querySelector('header')
const navLogo = document.querySelector('.nav__logo')

function scrolled() {
  if (window.pageYOffset > 0) {
    navBar.classList.add('active')
    navLogo.innerHTML = ` 
             <a href=""><img src="./assets/images/logo.png" alt="" /></a>
    `
  } else {
    navBar.classList.remove('active')
    navLogo.innerHTML = ` 
             <a href=""><img src="./assets/images/logoneg.png" alt="" /></a>
`
  }
}

scrolled()

window.addEventListener('scroll', scrolled)

// Acordion
const accordion = document.querySelectorAll('.accordion')
accordion.forEach((target) => {
  target.addEventListener('click', () => {
    const itemInfo = target.querySelector('.accordion__info')

    if (target.classList.contains('open')) {
      target.classList.remove('open')
      itemInfo.style.height = 0 + 'px'
    } else {
      target.classList.add('open')
      itemInfo.style.height = itemInfo.scrollHeight + 'px'
    }
  })
})
