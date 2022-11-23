import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);

let data = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

function onFormInput(e) {
  data[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

onSiteReload();

function onSiteReload() {
  if (data) {
    emailRef.value = data.email || '';
    textareaRef.value = data.message || '';
  }
}
function onFormSubmit(e) {
  e.preventDefault();
  console.log(data);
  localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
  data = {};
}
