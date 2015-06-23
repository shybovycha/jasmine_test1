'use strict';

class MockMysql {
    constructor() {
        // NOP
    }

    getAllProducts() {
        return [
                { id: 1, name: 'szampon', price: 12, amount: 4 },
                { id: 2, name: 'żel pod pryśnic', price: 19, amount: 7 },
                { id: 3, name: 'deodorant nivea', price: 25.5, amount: 19 }
            ];
    }

    getTotalPrice() {
        return 0;
    }

    getProductById(id) {
        var products = this.getAllProducts();

        for (var product of products) {
            if (product.id == id) {
                return product;
            }
        }

        return null;
    }
}

module.exports = MockMysql;