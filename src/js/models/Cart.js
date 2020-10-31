export default class cart {
    constructor() {
        this.cartItems = []
    }

    addToCart(cart, products, productId) {
        const chosenProduct = products.find(product => product.id === productId);
        cart.push(chosenProduct);
    }

    calcTotal(cartItems) {
        let total = 0;
        if (cartItems.length > 0) {
            cartItems.forEach(product => {
                total += product.total;
            })
        }
        return total;
    }

    removeProduct(cartItems, id) {
        const index = cartItems.findIndex(product => product.id === id);
        cartItems.splice(index, 1).slice();
    }

    clearCart(state) {
        state['shoppingCart'] = [];
    }
}


