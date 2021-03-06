import './sass/main.scss';

import modalMarkup from './templates/modal';

const openModalBtnEl = document.querySelector('.open-button');
const closeModalBtnEl = document.querySelector('.close-button');
const backdropEl = document.querySelector('.backdrop');
const modalInfoEl = document.querySelector('.modal__main-container');

openModalBtnEl.addEventListener('click', openModal);
closeModalBtnEl.addEventListener('click', closeModal);
backdropEl.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) closeModal();
});

function openModal() {
  renderModalInfo();
  toggleModal();
};

function closeModal() {
  toggleModal();
  clearModalInfo();
};

function toggleModal() {
  document.body.classList.toggle('modal-open');
  backdropEl.classList.toggle('is-hidden');
};

function renderModalInfo() {
  modalInfoEl.insertAdjacentHTML('beforeend', modalMarkup());
};

function clearModalInfo() {
  modalInfoEl.innerHTML = '';
}