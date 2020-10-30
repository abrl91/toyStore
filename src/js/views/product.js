import {elements} from "../utilities/elements";

export const productView = product => {
    const markup = `
        <div class="product" data-id="${product.id}">
                <img class="product__image" src="${product.image}" alt="product image">
                <div class="product__details">
                    <p class="product__description">${product.description}</p>
                    <p class="product__price">${product.price}</p>
                </div>
                <div class="product__action">
                    <input class="product__action-count" type="number" value="0" min="0" max="10">
                    <button class="btn-action product__action-addToCart">
                        <img src="./assets/icons/add-to-cart.png">
                    </button>
                </div>
            </div>
            
    `;

    elements.products.insertAdjacentHTML('beforeend', markup);

}
