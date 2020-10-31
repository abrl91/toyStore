import styles from '../styles/base.scss';

import * as api from './apiService';
import {elements} from "./utilities/elements";

import { Product } from "./models/Product";
import * as Cart from "./models/Cart";
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

document.body.onload = init;



const cartController = (product) => {
    if (!state.cart) {
        state.cart = [];
    }

    // addToCart and update cart view
    Cart.addToCart(product);
    cartView.cartItem(product);

    // listen to change count and update price and total


}

elements.clearCart.addEventListener('click', () => {
    // clear cart and updateView
    Cart.clearCart(state);
    cartView.clearCartView();
})

document.querySelector('.container').addEventListener('click', e => {
    const addToCartBtn = e.target.closest('.product__action-addToCart');
    addToCartBtn.addEventListener('click', () => {
        console.log('Booooo')

    })
})
