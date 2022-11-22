import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

let retDataItem = JSON.parse(localStorage.getItem('feedback-form-state')) || '';

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);
document.addEventListener('DOMContentLoaded', onSiteReload);

function onFormInput(e) {
  retDataItem.email = emailRef.value;
  retDataItem.message = textareaRef.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(retDataItem));
}

function onSiteReload() {
  if (retDataItem) {
    emailRef.value = retDataItem.email || '';
    textareaRef.value = retDataItem.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(retDataItem);
  localStorage.removeItem('feedback-form-state');
  emailRef.value = '';
  textareaRef.value = '';
  retDataItem = {};
}
