import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const ref = document.querySelector('.gallery');

const createElList = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<div><a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a></div>`,
  ''
);
ref.insertAdjacentHTML('beforeend', createElList);

function onClickImg(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'botom',
  captionDelay: '250',
});
ref.addEventListener('click', onClickImg);
