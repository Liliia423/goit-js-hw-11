import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { requestSending } from './js/pixabay-api';
import { markupSearchForm, renderGallery } from './js/render-functions';

markupSearchForm();

const searchForm = document.querySelector('.search-image-form');
const searchField = document.querySelector('.search-field');
const gallery = document.querySelector('.gallery');

const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault(); 
  const query = searchField.value.trim();

  if (!query) {
    return;
  }

  showLoader();

  try {
    const data = await requestSending(query); 
    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again.',
        position: 'topRight',
        class: 'error-toast',
        timeout: 4000,
      });
      return;
    }
    
   gallery.innerHTML = ''; 
   
  renderGallery(data.hits);
  hideLoader()
  } catch (error) {  
  }
  finally {
  }

  searchField.value = ''; 
});


function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
