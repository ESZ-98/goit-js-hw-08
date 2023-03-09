import throttle from 'lodash/throttle';

const feedback = document.querySelector('.feedback-form');
const { email, message } = feedback.elements;

function saveFeedback(event) {
  event.preventDefault();
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: email.value, message: message.value })
  );
}
loadFeedback();

function loadFeedback() {
  const receivedFeedback = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (receivedFeedback) {
    email.value = receivedFeedback.email;
    message.value = receivedFeedback.message;
  }
}

function submitFeedback(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Please fill out all fields!');
  }
  const receivedFeedback = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  const object = {
    email: receivedFeedback.email,
    message: receivedFeedback.message,
  };
  console.log(object);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

feedback.addEventListener('input', throttle(saveFeedback, 500));
feedback.addEventListener('submit', submitFeedback);
