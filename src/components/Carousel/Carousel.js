import { getProducts } from "../../services/dataService.js";
import ProductCarousel from "./CarouselItem.js";

export default async function Carousel() {
    const products = await getProducts();
    const carouselContainer = document.createElement("div");
    carouselContainer.className = "carousel-container";
    carouselContainer.innerHTML = `<h2>Begenebileceğin ürünler</h2>`;

    const carousel = document.createElement("div");
    carousel.className = "carousel";

    products.forEach(product => {
        const item = ProductCarousel(product);
        carousel.appendChild(item);
    });

    carouselContainer.appendChild(carousel);
    document.getElementById("product-detail").appendChild(carouselContainer);
}
