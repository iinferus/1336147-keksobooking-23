const GET_REQUEST_ADDRESS = 'https://23.javascript.pages.academy/keksobooking/data';
const POST_REQUEST_ADDRESS = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => {
  fetch(GET_REQUEST_ADDRESS)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    POST_REQUEST_ADDRESS,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export{getData, sendData};
