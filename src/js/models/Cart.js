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

    calcTotal() {
        let total = 0;
        if (this.cartItems.length > 0) {
            this.cartItems.forEach(product => {
                const calcProduct = product.price * product.count;
                total += calcProduct;
            })
        }
        return `${total}$`;
    }

    removeProduct(id) {
        const index = this.cartItems.findIndex(product => product.id === id);
        this.cartItems.splice(index, 1).slice();
    }

    clearCart() {
        this.cartItems = [];
    }
}


