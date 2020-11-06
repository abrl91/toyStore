export default class Cart {
    constructor() {
        this.cartItems = [];
    }

    isDuplicate(product) {
        if (this.cartItems.length) {

        } else {
            this.cartItems.push(product)
        }
        // if (!item) {
        //     this.cartItems.push(item);
        // }
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


