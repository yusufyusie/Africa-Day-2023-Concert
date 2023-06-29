function mobileMenu() {
  const menuIcon = document.querySelector('#hamburger-img');
  const mainNav = document.querySelector('.nav-bar');
  const exitIcon = document.querySelector('.exit');
  const navLinks = document.querySelectorAll('.nav-bar-ul li');
  const body = document.querySelector('body');

  menuIcon.addEventListener('click', () => {
    mainNav.classList.add('nav-bar-active');
    body.classList.add('overflow-hidden');
  });
  exitIcon.addEventListener('click', () => {
    mainNav.classList.remove('nav-bar-active');
    body.classList.remove('overflow-hidden');
  });
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('nav-bar-active');
      body.classList.remove('overflow-hidden');
    });
  });
}

mobileMenu();