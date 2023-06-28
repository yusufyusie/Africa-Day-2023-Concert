'use script';

const homeBtn = document.getElementById('home-btn');
const closeBtn = document.getElementById('closeid');
const navBar = document.getElementById('nav-bar-ul');
const main = document.getElementById('main');
const intro = document.getElementById('intro');
const navBarBlock = document.getElementById('nav-bar');
const navBarList = document.querySelectorAll('.nav-bar-list');
const footer = document.getElementById('footer');

/* OPEN MOBILE MENU */
homeBtn.addEventListener('click', () => {
  navBar.style.display = 'flex';
  homeBtn.style.display = 'none';
  closeBtn.style.display = 'block';
  main.style.display = 'none';
  intro.style.display = 'none';
  footer.style.display = 'none';
  navBarBlock.style.height = '100vh';
});

/* CLOSE MOBILE MENU USING MEDIA QUERIES */
function closeMenu() {
  navBar.style.display = 'none';
  homeBtn.style.display = 'block';
  closeBtn.style.display = 'none';
  main.style.display = 'block';
  intro.style.display = 'block';
  footer.style.display = 'block';
  navBarBlock.style.height = 'auto';
}

const mediaQuery = window.matchMedia('(min-width: 768px)');
function handleTabletChange(e) {
  if (!e.matches) {
    closeBtn.addEventListener('click', closeMenu);
    navBarList.forEach((e) => {
      e.addEventListener('click', closeMenu);
    });
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);