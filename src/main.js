/*import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';*/

/*import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';*/

/*import './js/pixabay-api.js';
import './js/render-functions.js';*/

/*const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');
const fragment = document.createDocumentFragment();

images.forEach(({ preview, original, description }) => {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery-item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery-link');
  galleryLink.href = original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery-image');
  galleryImage.src = preview;
  galleryImage.setAttribute('data-source', original);
  galleryImage.alt = description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  fragment.appendChild(galleryItem);
});

gallery.appendChild(fragment);

// ========== Modal window using Event Delegation ==========
gallery.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  const largeImageSrc = event.target.getAttribute('data-source');
  console.log(largeImageSrc);
  const instance = basicLightbox.create(
    `
      <img 
        src="${largeImageSrc}" 
        class="modal-image"
        margin: auto; object-fit: cover;">
    `
  );

  instance.show();
});*/