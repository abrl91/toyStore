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
const cartController = () => {
    if (!state.cart) state.cart = new Cart();

}

// handling product buttons clicked
elements.products.addEventListener('click', e => {
    const id = e.target.closest('.product').dataset.id;
    if (e.target.matches('.product__action-addToCart *')) {
        const chosenProduct = state.products.find(p => p.id === parseInt(id));
        if (state.cart.addToCart(chosenProduct)) {
            cartView.renderCartItems(chosenProduct);
            state.total = state.cart.calcTotal();
            elements.totalPrice.textContent = state.total;
        }
    } else if (e.target.matches('.product__action-count')) {
        const id = e.target.closest('.product').dataset.id;
        const product = state.cart.cartItems.find(item => item.id === parseInt(id));
        const isProductInCart = state.cart.cartItems.some(item => item.id === product.id)
        // if (isProductInCart) {
        //     const test = document.querySelectorAll('.product__action-count');
        //     for (let t in test) {
        //         if (t === id) {
        //             test[t].setAttribute('disabled', true);
        //         }
        //     }
        // }
        if (product && !isProductInCart) {
            const btn = e.target.value > product.count ? 'inc' : 'dec';
            if (btn === 'inc') {
                product.count++;
                state.total += product.price;
                elements.totalPrice.textContent = state.total;
            } else {
                product.count--
                state.total -= product.price;
                elements.totalPrice.textContent = state.total;
            }
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
        const deletedProduct = state.cart.cartItems.find(item => item.id === parseInt(id));
        state.total -= deletedProduct.price;
        elements.totalPrice.textContent = state.total;

        state.cart.removeProduct(id);
        cartView.onRemove(state.cart.cartItems, id);
        elements.cartItems.removeChild(e.target.closest('.cart-product'));
    } else if (e.target.matches('.cart-product__action-count')) {
        const id = e.target.closest('.cart-product').dataset.id;
        const product = state.cart.cartItems.find(item => item.id === parseInt(id));
        const btn = e.target.value > product.count ? 'inc' : 'dec';
        if (btn === 'inc') {
            product.count++;
            state.total += product.price;
            elements.totalPrice.textContent = state.total;
        } else {
            product.count--;
            state.total -= product.price;
            elements.totalPrice.textContent = state.total;
        }
    }
})



