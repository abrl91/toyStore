export class Product {
    constructor({id, description, price, image}) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.image = image;
        this.count = 1;
    }

    // onChangeCount(arrow) {
    //    return  arrow === 'up' ? this.total += this.price : this.total -= this.price;
    // }
}
