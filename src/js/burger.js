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