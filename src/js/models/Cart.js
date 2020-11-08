export default class Cart {
    constructor() {
        this.cartItems = [];
    }

    addToCart(product) {
        const itemExist = this.cartItems.some(item => item.id === product.id);
        if (!itemExist) {
            this.cartItems.push(product);
            return true;
        }
        return false;
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


