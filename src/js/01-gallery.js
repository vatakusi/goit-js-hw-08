// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const ulGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a href="${original}"><img src="${preview}" alt="${description}" title="/* ${description} */"  width="100%" height="99%"/></a>`;
  })
  .join('');

ulGallery.insertAdjacentHTML('afterbegin', markup);

const modalFrame = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
});
