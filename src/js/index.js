import styles from '../styles/base.scss';


import { Product } from "./models/Product";
import Cart from "./models/Cart";
import * as cartView from './views/cartView';
import {productView} from "./views/productView"
import {elements} from "./utilities/elements";

/** GLOBAL STATE **/
const state = {}

/* --- API ---
* loadProducts
* addToCart
* changeCount
* updateTotalPrice
* removeProduct
* clearCart
* */

window.addEventListener('load', async () => {
    await productController()
    cartController();

})

// fetch products
const fetchProducts = async (url) => {
    try {
        await fetch(url)
            .then(res => res.json())
            .then(data => {
                state.products = data.map(product => new Product(product));

                state.products.forEach(product => productView(product));

            })
    } catch (err) {
        console.log(err)
    }
}

/** PRODUCT CONTROLLER **/
const productController = async () => {
    await fetchProducts('./assets/db/toys.json');

}

/** CART CONTROLLER **/
const cartController = (productId) => {
    if (!state.cart) state.cart = new Cart();

}

// handling product buttons clicked
elements.products.addEventListener('click', e => {
    const id = e.target.closest('.product').dataset.id;
    if (e.target.matches('.product__action-addToCart *')) {
        const chosenProduct = state.products.find(p => p.id === parseInt(id));
        if (state.cart.addToCart(chosenProduct)) {
            cartView.renderCartItems(chosenProduct);
            const total = state.cart.calcTotal();
            elements.totalPrice.textContent = total;
        }
    }
})

elements.clearCart.addEventListener('click', () => {
    state.cart.clearCart();
    cartView.clearCartView();
    elements.totalPrice.textContent = '';
})

elements.cartItems.addEventListener('click', e => {
    const id = e.target.closest('.cart-product').dataset.id;
    if (e.target.matches('.cart-product__actions-remove *')) {
        state.cart.removeProduct(id);
        console.log(state.cart.cartItems);
    }
})



