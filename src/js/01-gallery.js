// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const ulGallery = document.querySelector('.gallery');

// 1
const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a href="${original}"><img src="${preview}" alt="${description}" title="/* ${description} */"  width="100%" height="99%"/></a>`;
  })
  .join('');

ulGallery.insertAdjacentHTML('afterbegin', markup);

//// 2
ulGallery.addEventListener('click', openModal);
function openModal(event) {
  event.preventDefault();
  if (event.target.tagName !== 'IMG') {
    return;
  }

  const selectedImg = event.target.src;
  console.log('1: ', selectedImg);

  const modalFrame = new SimpleLightbox('.gallery a', {
    /* options */
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
  });
}
