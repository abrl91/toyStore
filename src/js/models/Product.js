export class Product {
    constructor(id, title, price, image, count) {
        this.id = id;
        this.description = title;
        this.price = price;
        this.image = image;
        this.count = count;
        this.total = this.count * this.price
    }

    // onChangeCount(arrow) {
    //    return  arrow === 'up' ? this.total += this.price : this.total -= this.price;
    // }
}
