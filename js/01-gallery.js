import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('ul.gallery');
console.log(galleryItems);
for (const pic of galleryItems) {
  const item = `<div class="gallery__item">
  <a class="gallery__link" href="${pic.original}">
  <img
    class="gallery__image"
    src="${pic.preview}"
    data-source="${pic.original}"
    alt="${pic.description}"
  />
</a>
</div>`;
  gallery.insertAdjacentHTML('beforeend', item);
}
const popUpPic = ev => {
  ev.preventDefault();
  const makePicBig = basicLightbox.create(`<img src="${ev.target.dataset.source}" >`, {
    onShow: () => {
      gallery.addEventListener('keydown', closePopUpPic);
    },
  });
  makePicBig.show();

  function closePopUpPic(ev) {
    if (ev.key === 'Escape') {
      makePicBig.close();
    }
  }
};

gallery.addEventListener('click', popUpPic);
