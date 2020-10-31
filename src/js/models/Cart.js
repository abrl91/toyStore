
    export const addToCart = (cart, products, productId) => {
        const chosenProduct = products.find(product => product.id === productId);
        cart.push(chosenProduct);
    }

    export const calcTotal = (cartItems) => {
        let total = 0;
        if (cartItems.length > 0) {
            cartItems.forEach(product => {
                total += product.total;
            })
        }
        return total;
    }

    export const removeProduct = (products, id) => {
        const index = products.findIndex(product => product.id === id);
        products.splice(index, 1).slice();
    }

    export const clearCart = (state) => {
        state['shoppingCart'] = [];
    }

