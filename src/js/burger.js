const burgerBtn = document.querySelector('.hamburger_btn');
const burgerBtnClose = document.querySelector('.modal-close-btn');
const burgerMenu = document. querySelector('.modal-menu');

const openMenu = () => {
  burgerMenu.classList.add('modal-menu_active');
}

const closeMenu = () => {
  burgerMenu.classList.remove('modal-menu_active');
}

burgerBtn.addEventListener('click', openMenu);
burgerBtnClose.addEventListener('click', closeMenu);

const leftUl = document.querySelector('.left');
const rightUl = document.querySelector('.right');

window.addEventListener('scroll', () => {
  if (window.innerWidth > 708) {
  console.log('ok');
  console.log(pageYOffset);
  if (pageYOffset >= 1060) {
    leftUl.classList.add('slideInLeft');
    rightUl.classList.add('slideInRight');
  } else {
    leftUl.classList.remove('slideInLeft');
    rightUl.classList.remove('slideInRight');
  }
}
  
});