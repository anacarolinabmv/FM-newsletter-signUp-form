'use strict';

const container = document.querySelector('.container');
const containerSuccess = document.querySelector('.success--container');
const form = document.querySelector('form');
const formTextInput = document.getElementById('input');
const errorMsg = document.getElementById('error--msg');
const emailSuccess = document.querySelector('.email');
const btnDissmiss = document.getElementById('dismiss');
const btnSubscribe = document.getElementById('subscribe');

const init = function () {
  formTextInput.value = '';
  container.style.display = 'flex';
  containerSuccess.style.display = 'none';
};

//Form validation
const showError = function () {
  errorMsg.classList.add('display--error');
  formTextInput.classList.add('error--border');
};
const hideError = function () {
  errorMsg.classList.remove('display--error');
  formTextInput.classList.remove('error--border');
};

const validateForm = function () {
  const email = formTextInput.value;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validEmail = re.test(email);

  if (validEmail) {
    emailSuccess.textContent = email;
    container.style.display = 'none';
    containerSuccess.style.display = 'block';
  } else {
    showError();
  }
};

//Event Listeners
form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});

formTextInput.addEventListener('focus', () => {
  if (!formTextInput.classList.contains('error--border')) return;
  formTextInput.value = '';
  hideError();
});

btnDissmiss.addEventListener('click', init);

const mq = window.matchMedia('(max-width:575px)');
mq.onchange = (e) => {
  if (e.matches) {
    btnSubscribe.textContent = 'Subscribe';
  } else {
    btnSubscribe.textContent = 'Subscribe to monthly newsletter';
  }
};
