import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const submitBtn = document.querySelector('.submit-button');
const searchField = document.querySelector('.search-field');
const searchForm = document.querySelector('.search-image-form');

searchForm.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault(); 
  }
});

submitBtn.addEventListener('click', () => {
  event.preventDefault();

  const query = searchField.value.trim(); 
  if (!query) {
    return;
  }

  searchField.value = '';

  fetch(
    `https://pixabay.com/api/?key=45378122-3aa1f0accb7d59cfaae2c348a&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json(); 
    })

    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please, try again!`,
          position: 'topRight',
          class: 'error-toast',
          timeout: 4000,
          closeOnClick: true,
        });
        return;
      }
      console.log(data.hits);
    })

    .catch(error => {    
    });
});

/*====зразок коду виведення помилки з повідомленням iziToast.error====
.catch(error => {
      iziToast.error({
        message: `Sorry, there are no images matching your search query. Please, try again!`,
        position: 'topRight',
        class: 'error-toast',
        timeout: 400000,
        closeOnClick: true,
      });
    });*/

/*====зразок коду запиту через колбек без назви функції====
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const submitBtn = document.querySelector('.submit-button');
const searchField = document.querySelector('.search-field');
const searchForm = document.querySelector('.search-image-form');

submitBtn.addEventListener('click', () => {
  event.preventDefault();

  const query = searchField.value.trim();
  if (!query) {
    iziToast.error({
      message: `Sorry, there are no images matching your search query. Please, try again!`,
      position: 'topRight',
      class: 'error-toast',
      timeout: 400000,
      closeOnClick: true,
    });
    return;
  }
  searchField.value = '';
  fetch(
    `https://pixabay.com/api/?key=45378122-3aa1f0accb7d59cfaae2c348a&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
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
        message: `Sorry, there are no images matching your search query. Please, try again!`,
        position: 'topRight',
        class: 'error-toast',
        timeout: 400000,
        closeOnClick: true,
      });
    });
});
*/

/*====зразок коду перевірки чи порожній масив====
.then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please, try again!`,
          position: 'topRight',
          class: 'error-toast',
          timeout: 400000,
          closeOnClick: true,
        });
        return;
      }
      console.log(data.hits);
    }*/

/*====зразок коду перевірки чи порожнє поле====
  const query = searchField.value.trim();
  if (!query) {
    iziToast.error({
      message: `Sorry, there are no images matching your search query. Please, try again!`,
      position: 'topRight',
      class: 'error-toast',
      timeout: 400000,
      closeOnClick: true,
    });
    return;
  }*/

/*====заборона відправки форми натисканням клавіші Enter====
searchForm.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    iziToast.warning({
      message: 'Don`t use key! Use Search button!',
    });
  }
});*/
