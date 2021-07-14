import {onPopupEscKeydown, closeMessage} from './util.js';

const ALERT_SHOW_TIME = 5000;

const mapError = (message) => {
  const map = document.querySelector('.map');
  map.style.boxShadow = '0px 0px 30px red';

  const alertContainer = document.createElement('div');
  alertContainer.style.color = 'red';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textTransform = 'uppercase';

  alertContainer.textContent = message;

  map.parentNode.insertBefore(alertContainer, map.nextSibling);

  setTimeout(() => {
    alertContainer.remove();
    map.style.boxShadow = 'none';
  }, ALERT_SHOW_TIME);
};

const formSuccess = () => {
  const messageTmpl = document.querySelector('#success')
    .content
    .querySelector('.success');

  const messageElement = messageTmpl.cloneNode(true);

  document.body.appendChild(messageElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', closeMessage);
};

const formFail = () => {
  const messageTmpl = document.querySelector('#error')
    .content
    .querySelector('.error');
  const messageElement = messageTmpl.cloneNode(true);
  const messageButton = messageElement.querySelector('.messageTmpl');

  document.body.appendChild(messageElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', closeMessage);
  if (messageButton !== null) {
    messageButton.addEventListener('click', closeMessage);
  }
};

export {mapError, formSuccess, formFail};
