const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const forgotLink = document.querySelector('.forgot-link');
const login = document.querySelector('.login');
const register = document.querySelector('.register');
const forgot = document.querySelector('.forgot');
const close = document.querySelector('.close');

registerLink.addEventListener('click', () => {
  login.style.display = 'none';
  register.style.display = 'flex';
})

loginLink.addEventListener('click', () => {
  register.style.display = 'none';
  login.style.display = 'flex';
})

forgotLink.addEventListener('click', () => {
  login.style.display = 'none';
  forgot.style.display = 'flex';
})

close.addEventListener('click', () => {
  forgot.style.display = 'none';
  login.style.display = 'flex';
})
