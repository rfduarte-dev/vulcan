// Scroll Navbar
const navBar = document.querySelector('header')
const navLogo = document.querySelector('.nav__logo')
//Go to top
const goToTop = document.querySelector('.btn__top')

function scrolled() {
  if (window.pageYOffset > 0) {
    goToTop.classList.add('active')
    navBar.classList.add('active')
    navLogo.innerHTML = ` 
             <a href="#home"><img src="./assets/images/logo.png" alt="" /></a>
    `
  } else {
    goToTop.classList.remove('active')
    navBar.classList.remove('active')
    navLogo.innerHTML = ` 
             <a href="#home"><img src="./assets/images/logoneg.png" alt="" /></a>
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

// ScrollReveal ===================
const slideTop = {
  mobile: true,
  delay: 250,
  duration: 750,
  reset: true,
  origin: 'top',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)',
  viewOffset: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}
const slideBotton = {
  mobile: true,
  delay: 250,
  duration: 750,
  reset: true,
  origin: 'bottom',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)',
  viewOffset: {
    top: 100,
    right: 0,
    bottom: 0,
    left: 0
  }
}
const slideleft = {
  mobile: true,
  delay: 250,
  duration: 750,
  reset: true,
  origin: 'left',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)',
  viewOffset: {
    top: 100,
    right: 0,
    bottom: 0,
    left: 0
  }
}
const slideright = {
  mobile: true,
  delay: 250,
  duration: 750,
  reset: true,
  origin: 'rigt',
  distance: '100px',
  easing: 'cubic-bezier(.53,-0.23,.4,1.26)',
  viewOffset: {
    top: 100,
    right: 0,
    bottom: 0,
    left: 0
  }
}

ScrollReveal().reveal('#home .container', slideTop)
ScrollReveal().reveal('#info .tittle', slideTop)
ScrollReveal().reveal('.info__container', slideBotton)
ScrollReveal().reveal('.about__img', slideleft)
ScrollReveal().reveal('.about__info', slideright)
ScrollReveal().reveal('#services .tittle', slideTop)
ScrollReveal().reveal('#services .services__container', slideBotton)
ScrollReveal().reveal('#services .btn__dark', slideBotton)
ScrollReveal().reveal('#contact .contact__info', slideleft)
ScrollReveal().reveal('#contact .contact__form', slideright)

// Menu Mobile
const menuMobileBtn = document.querySelector('.mobile__menu')
const menuLinks = document.querySelector('.nav__links')
const links = document.querySelectorAll('.nav__links li ')

menuMobileBtn.addEventListener('click', () => {
  menuLinks.classList.toggle('active')
  menuMobileBtn.classList.toggle('active')
})

links.forEach((link) => {
  link.addEventListener('click', () => {
    menuLinks.classList.remove('active')
    menuMobileBtn.classList.remove('active')
  })
})
