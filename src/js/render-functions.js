/*const gallery = document.querySelector('.gallery');
      gallery.innerHTML = '';

      data.hits.forEach(image => {
        const imageHTML = `
          <li class="gallery-item">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
            <div class="info">
              <p><strong>Likes:</strong> ${image.likes}</p>
              <p><strong>Views:</strong> ${image.views}</p>
              <p><strong>Comments:</strong> ${image.comments}</p>
              <p><strong>Downloads:</strong> ${image.downloads}</p>
            </div>
          </li>
        `;
        gallery.insertAdjacentHTML('beforeend', imageHTML);
      });*/

const tegMain = document.querySelector('main');

// Створюємо форму
const tegForm = document.createElement('form');
tegForm.className = 'search-image-form';
tegMain.appendChild(tegForm); // Додаємо форму в main

// Створюємо input
const tegInput = document.createElement('input');
tegInput.type = 'text';
tegInput.name = 'field';
tegInput.className = 'search-field';
tegInput.placeholder = 'Search images...';
tegForm.appendChild(tegInput); // Додаємо input у форму

// Створюємо кнопку
const tegButton = document.createElement('button');
tegButton.textContent = 'Search';
tegButton.type = 'submit';
tegButton.className = 'submit-button';
tegForm.appendChild(tegButton); // Додаємо кнопку у форму

tegMain.prepend(tegForm);
