
import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
galleryItems.forEach(item =>
    gallery.insertAdjacentHTML("afterbegin",
    `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class= "gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </li>`)
);

gallery.addEventListener("click", (event) => {
    event.preventDefault()
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`
    <img class="modal" src="${event.target.dataset.source}" width="800" height="600">
    `);
    instance.show();
}

);

console.log(galleryItems);