import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const submitBtn = document.querySelector('.submit-button');
const searchField = document.querySelector('.search-field');

submitBtn.addEventListener('click', () => {
  const query = searchField.value.trim();

  if (!query) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please, try again!',
    });
    return;
  }

  const options = {
    method: 'GET',
    q: 'query',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  fetch(
    `https://pixabay.com/api/?key=45378122-3aa1f0accb7d59cfaae2c348a`,
    options
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: `Something went wrong: ${error.message}`,
      });
    });
});
