'use strict';

var Database = require('./database');

class Webshop {
    constructor() {
        this.db = new Database();
    }

    destruct() {
        this.db.destruct();
    }

    getAllProducts() {
        return this.db.getAllProducts();
    }

    getProductById(id) {
        return this.db.getProductById(id);
    }

    getTotalPrice() {
        var products = this.getAllProducts(),
            price = 0;

        for (var product of products) {
            price = price + (product.amount * product.price);
        }

        return price;
    }
}

(function() {
    var shop = new Webshop();

    console.log('All products: ', shop.getAllProducts());
    console.log('Product #2: ', shop.getProductById(2));
    console.log('Total price: ', shop.getTotalPrice());
})();

module.exports = Webshop;