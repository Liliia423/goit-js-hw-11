import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { requestSending } from './js/pixabay-api';
import { markupSearchForm, renderGallery } from './js/render-functions';

// Створюємо форму пошуку
markupSearchForm();

const searchForm = document.querySelector('.search-image-form');
const searchField = document.querySelector('.search-field');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки
  const query = searchField.value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query.',
      position: 'topRight',
      class: 'error-toast',
      timeout: 4000,
    });
    return;
  }

  try {
    const data = await requestSending(query); // Отримуємо дані з Pixabay API
    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again.',
        position: 'topRight',
        class: 'error-toast',
        timeout: 4000,
      });
      return;
    }
    renderGallery(data.hits); // Рендеримо галерею
  } catch (error) {
    iziToast.error({
      message: `An error occurred: ${error.message}`,
      position: 'topRight',
      class: 'error-toast',
      timeout: 4000,
    });
  }

  searchField.value = ''; // Очищуємо поле після запиту
});
