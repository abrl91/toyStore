export default class Cart {
    constructor() {
        this.cartItems = [];
    }

    addToCart(product) {
        if (this.cartItems.length) {
            for (let item of this.cartItems) {
                if (item.id === product.id) continue;
                this.cartItems.push(product);
            }
        }
        this.cartItems.push(product);
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


