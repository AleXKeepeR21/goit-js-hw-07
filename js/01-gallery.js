import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `;
    })
      .join("");
}

// console.log(galleryItems);

galleryMarkup.addEventListener('click', onGalleryRefClick);

let modalWindow;

function onGalleryRefClick(event) {
    event.preventDefault();
    const isGalleryRef = event.target.classList.contains('.gallery__image');
    if (!isGalleryRef) {
        return
    }
    console.log(event.target);

    modalWindow = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    modalWindow.show();
}