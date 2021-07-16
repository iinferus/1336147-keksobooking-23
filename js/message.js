const ALERT_SHOW_TIME = 5000;

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const mapError = () => {
  const map = document.querySelector('.map');
  map.style.boxShadow = '0px 0px 30px red';

  const alertContainer = document.createElement('div');
  alertContainer.style.color = 'red';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textTransform = 'uppercase';

  alertContainer.textContent = 'Не удалось загрузить похожие объявления';

  map.parentNode.insertBefore(alertContainer, map.nextSibling);

  setTimeout(() => {
    alertContainer.remove();
    map.style.boxShadow = 'none';
  }, ALERT_SHOW_TIME);
};

let messageElement;

const closeMessage = () => {
  messageElement.remove();

  document.removeEventListener('keydown', onPopupEscKeydown);
  document.removeEventListener('click', closeMessage);
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const formSuccess = () => {
  const messageTmpl = document.querySelector('#success')
    .content
    .querySelector('.success');

  messageElement = messageTmpl.cloneNode(true);

  document.body.appendChild(messageElement);
  document.addEventListener('keydown', onPopupEscKeydown, {once: true});
  document.addEventListener('click', closeMessage, {once: true});
};

const formFail = () => {
  const messageTmpl = document.querySelector('#error')
    .content
    .querySelector('.error');
  messageElement = messageTmpl.cloneNode(true);
  const messageButton = messageElement.querySelector('.messageTmpl');

  document.body.appendChild(messageElement);
  document.addEventListener('keydown', onPopupEscKeydown);
  document.addEventListener('click', closeMessage);
  if (messageButton !== null) {
    messageButton.addEventListener('click', closeMessage);
  }
};

export {mapError, formSuccess, formFail};
