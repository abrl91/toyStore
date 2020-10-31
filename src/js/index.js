import styles from '../styles/base.scss';

import * as api from './apiService';
import {elements} from "./utilities/elements";

import { Product } from "./models/Product";
import Cart from "./models/Cart";
import * as cartView from './views/cartView';
import {productView} from "./views/productView"

const state = {}

const productController = async () => {
    try {
        fetch('./assets/db/toys.json')
            .then(res => res.json())
            .then(data => {
                state.products = data;
                state.products.map(product => {
                    return new Product(product.id, product.description, product.price, product.image)
                })
                state.products.forEach(product => {
                    productView(product);
                })

            })

    } catch (err) {
        console.log(err)
    }

}


const init = async () => {
    await productController();
};

// call init fn when document load to render the products
document.body.onload = init;


const cartController = (product) => {
    if (!state.cart) state.cart = new Cart();

    // addToCart and update cart view
    state.cart.addToCart(product);

    // listen to change count and update price and total


}

elements.clearCart.addEventListener('click', () => {
    // clear cart and updateView
    state.cart.clearCart(state);
    cartView.clearCartView();
})


// handling product events

document.querySelector('.products').addEventListener('click', e => {
    const id = e.target.closest('.products').dataset.id;
    if (e.target.closest('.product__action-addToCart')) {
       // state.cart.addToCart(state.cart, state.products, id);
    }
})
