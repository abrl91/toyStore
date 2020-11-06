export class Product {
    constructor({id, description, price, image}) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.image = image;
        this.count = 1;
    }
}
