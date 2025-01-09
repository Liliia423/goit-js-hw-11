import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function markupSearchForm() {
  const tegMain = document.querySelector('main');

  const tegForm = document.createElement('form');
  tegForm.className = 'search-image-form';

  const tegInput = document.createElement('input');
  tegInput.type = 'text';
  tegInput.name = 'field';
  tegInput.className = 'search-field';
  tegInput.placeholder = 'Search images...';
  tegForm.appendChild(tegInput);

  const tegButton = document.createElement('button');
  tegButton.textContent = 'Search';
  tegButton.type = 'submit';
  tegButton.className = 'submit-button';
  tegForm.appendChild(tegButton);

  tegMain.prepend(tegForm);
}

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => 
    `
    <li>
    
      <a href="${image.largeImageURL}" title="${image.tags}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
       
      </a>
       <div class="gallery-info">
        <p class="gallery-info-item"><b>Likes:</b> ${image.likes}</p>
        <p class="gallery-info-item"><b>Views:</b> ${image.views}</p>
        <p class="gallery-info-item"><b>Comments:</b> ${image.comments}</p>
        <p class="gallery-info-item"><b>Downloads:</b> ${image.downloads}</p>
      </div>
    </li>
  `
    /*
    `
    <li>
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
        <div class="gallery-info">
        <p class="gallery-info-item"><b>Likes:</b> ${image.likes}</p>
        <p class="gallery-info-item"><b>Views:</b> ${image.views}</p>
        <p class="gallery-info-item"><b>Comments:</b> ${image.comments}</p>
        <p class="gallery-info-item"><b>Downloads:</b> ${image.downloads}</p>
      </div>
      </a>
    </li>
  `
*/
).join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  // Ініціалізація SimpleLightbox або оновлення галереї
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
}


