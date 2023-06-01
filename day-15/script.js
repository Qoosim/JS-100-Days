const toggleDarkMode = document.querySelector('.toggle-darkmode');
const toggleText = document.querySelector('.toggle-text');

let darkMode = localStorage.getItem('darkmode');

// Enable Dark Mode
const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  toggleText.innerText = 'Light';
  localStorage.setItem('darkmode', 'enabled');
}

// Disable Dark Mode
const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  toggleText.innerText = 'Dark';
  localStorage.setItem('darkmode', null);
}

// Save darkMode History
if (darkMode === 'enabled') {
  enableDarkMode();
}

// Add EventListener  to toggle
toggleDarkMode.addEventListener('click', () => {
  let darkMode = localStorage.getItem('darkmode');

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})
