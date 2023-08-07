'use strict';

const btnSubscribe = document.getElementById('submit');
const formInput = document.getElementById('input');
const errorMessage = document.getElementById('error--msg');
const formContainer = document.querySelector('.form--container');
const successContainer = document.querySelector('.success');
const btnDissmiss = document.getElementById('dissmiss');
const emailDefault = document.querySelector('.email');

const emailDatabase = `carolinabmv@hotmail.com`;

const addError = function () {
  errorMessage.classList.add('show--error');
  formInput.classList.add('error');
};
const removeError = function () {
  errorMessage.classList.remove('show--error');
  formInput.classList.remove('error');
};

const restoreDefault = function () {
  formInput.value = '';
  removeError();
};
formInput.addEventListener('click', restoreDefault);

const validateForm = function (e) {
  e.preventDefault();
  const email = formInput.value;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const valid = re.test(email);

  const subscribed = function () {
    emailDefault.textContent = email;
    formContainer.style.display = 'none';
    successContainer.style.display = 'block';
  };

  valid ? subscribed() : addError();
};
btnSubscribe.addEventListener('click', validateForm);

const init = function () {
  formInput.value = '';
  formContainer.style.display = 'grid';
  successContainer.style.display = 'none';
};
btnDissmiss.addEventListener('click', init);
