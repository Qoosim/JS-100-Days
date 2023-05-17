const btn = document.querySelector('.popup'),
      close = document.querySelector('.close'),
      modal = document.querySelector('.modal');

  btn.addEventListener('click', openModal);
  close.addEventListener('click', closeModal);

  function openModal(e) {
      e.preventDefault();
      modal.style.display = 'block';
  }
  function closeModal() {
      modal.style.display = 'none';
  }
