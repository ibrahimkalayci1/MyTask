import { toggleFavorite } from "../../services/favoriteService.js";

export default function ProductCarousel(product) {
    const item = document.createElement("div");
    item.className = "carousel-item";

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;
    img.addEventListener("click", () => window.open(product.url, "_blank"));

    const name = document.createElement("p");
    name.innerText = product.name;

    const price = document.createElement("span");
    price.innerText = `${product.price} TRY`;

    const heart = document.createElement("span");
    heart.className = "heart-icon";
    heart.innerText = "❤";
    heart.addEventListener("click", () => {
        const isFavorite = toggleFavorite(product.id);
        heart.classList.toggle("favorited", isFavorite);
    });

    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(price);
    item.appendChild(heart);

    return item;
}
