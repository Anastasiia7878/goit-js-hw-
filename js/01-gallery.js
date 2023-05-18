import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");


const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}" data-original-img=${original}>
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`;

galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
});


galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  lightbox.open();
});