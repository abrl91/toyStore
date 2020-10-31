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
        await fetch('./assets/db/toys.json')
            .then(res => res.json())
            .then(data => {
                state.products = data.map(product => new Product(product));

                state.products.forEach(product => productView(product));

            })
    } catch (err) {
        console.log(err)
    }

}


const init = async () => {
    await productController();
    // cartController();

    // handling product events
    document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('click', e => {
            const id = product.dataset.id;
            const chosenProduct = state.products.find(product => {
                if (product.id === id) {
                    console.log(product)
                    return product;
                }
                return product
            });
            console.log(chosenProduct)
            if (!state.cart) state.cart = new Cart();
            state.cart.addToCart(chosenProduct);
            console.log(state)
            cartView.cartItem(chosenProduct);
        })
    })
};

// call init fn when document load to render the products
document.body.onload = init;


const cartController = () => {
    if (!state.cart) state.cart = new Cart();

    // addToCart and update cart view


    // listen to change count and update price and total


}

elements.clearCart.addEventListener('click', () => {
    // clear cart and updateView
    state.cart.clearCart(state);
    cartView.clearCartView();
})
