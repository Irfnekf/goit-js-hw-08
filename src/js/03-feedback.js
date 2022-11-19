import throttle from 'lodash.throttle';

// const formRef = document.querySelector('.feedback-form');
// const emailRef = document.querySelector('.feedback-form input');
// const textareaRef = document.querySelector('.feedback-form textarea');

// formRef.addEventListener('submit', onFormSubmit);
// formRef.addEventListener('input', throttle(onFormInput, 500));

// function onFormInput(e) {
//   const data = {};

//   data.email = emailRef.value;
//   data.message = textareaRef.value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(data));
// }

// const retData = JSON.parse(localStorage.getItem('feedback-form-state'));

// function onSiteReload() {
//   if (retData) {
//     let storageData = JSON.parse(retData);
//     emailRef.value = storageData.email;
//     textareaRef.value = storageData.message;
//   }
// }
// function onFormSubmit(e) {
//   e.preventDefault();

//   e.target.reset();
//   localStorage.removeItem('feedback-form-state');
// }
const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('.feedback-form input');
const textareaRef = document.querySelector('.feedback-form textarea');

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);
document.addEventListener('DOMContentLoaded', onSiteReload);

function onFormInput(e) {
  const data = {};
  data.email = emailRef.value;
  data.message = textareaRef.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
let retDataItem = localStorage.getItem('feedback-form-state');

function onSiteReload() {
  if (retDataItem) {
    let storageData = JSON.parse(retDataItem);
    emailRef.value = storageData.email;
    textareaRef.value = storageData.message;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(retDataItem));
  localStorage.removeItem('feedback-form-state');
  emailRef.value = '';
  textareaRef.value = '';
}
