const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarFileChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview');
const houseFileChooser = document.querySelector('.ad-form__upload input[type=file]');
const housePreview = document.querySelector('.ad-form__photo');

const createPhoto = (alternativeText, result) => {
  const photoElement = document.createElement('img');
  photoElement.setAttribute('alt', alternativeText);
  photoElement.setAttribute('width', 70);
  photoElement.setAttribute('height', 70);
  photoElement.src = result;
  return photoElement;
};

const createPreviewPhoto = (inputChoose, blockPreview) => {
  const file = inputChoose.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      blockPreview.innerHTML = '';
      blockPreview.appendChild(createPhoto('Аватар пользователя', reader.result));
      blockPreview.style.padding = 0;
    });

    reader.readAsDataURL(file);
  }
};

avatarFileChooser.addEventListener('change', () => {
  createPreviewPhoto(avatarFileChooser, avatarPreview);
});

houseFileChooser.addEventListener('change', () => {
  createPreviewPhoto(houseFileChooser, housePreview);
});
