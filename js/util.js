const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const closeMessage = () => {
  document.body.removeChild(document.body.lastChild);
};

const onPopupEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

export {onPopupEscKeydown, closeMessage};
