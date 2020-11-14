import {elements} from "../utilities/elements";

export const renderCartItems = product => {
    let markup = `
                <div class="cart-product" data-id="${product.id}">
                    <img class="cart-product__image" src="${product.image}" alt="">
                    <div class="cart-product__details">
                        <p class="cart-product__description">
                            name:
                            <span>${product.description}</span>
                        </p>
                        <p class="cart-product__price">
                            price:
                            <span>${product.price}$</span>
                        </p>
                        <p class="cart-product__count">
                            count:
                            <span>${product.count}</span>
                        </p>
                    </div>
                    <div class="cart-product__actions">
                        <button class="btn-action cart-product__actions-remove">
                            <img src="./assets/icons/trash.png">
                        </button>
                        <input class="cart-product__action-count" type="number" value="${product.count}" min="1" max="10">
                    </div>
                </div>
    
    `
    elements.cartItems.insertAdjacentHTML('beforeend', markup);
}


// export const renderTotalToView = (total) => {
//     if (parseInt(total) !== parseInt(elements.total.textContent)) {
//         elements.totalPrice.textContent = total;
//     }
// }

export const onRemove = (products, id) => {
    const index = products.findIndex(product => product.id === id);
    products.splice(index, 1).slice();
};

export const clearCartView = () => {
    elements.cartItems.innerHTML = '';
}
