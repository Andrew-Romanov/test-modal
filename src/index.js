import './sass/main.scss';

const openModalBtnEl = document.querySelector('.open-button');
const closeModalBtnEl = document.querySelector('.close-button');
const backdropEl = document.querySelector('.backdrop');

openModalBtnEl.addEventListener('click', toggleModal);
closeModalBtnEl.addEventListener('click', toggleModal);
backdropEl.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) toggleModal();
});

function toggleModal() {
  document.body.classList.toggle('modal-open');
  backdropEl.classList.toggle('is-hidden');
};