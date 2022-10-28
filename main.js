const togglebtn = document.querySelector('.navbar__togglebtn');
const menu = document.querySelector('.navbar__menu');
const login = document.querySelector('.navbar__login');

togglebtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  login.classList.toggle('active');
});