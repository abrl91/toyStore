import styles from '../styles/base.scss';

import * as api from './apiService';
import { Product } from "./models/Product";
import {productView} from "./views/product"

const state = {}


const productController = async () => {
    try {
        fetch('./assets/db/toys.json')
            .then(res => res.json())
            .then(data => {
                state.products = data;
                console.log(state.products);
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
